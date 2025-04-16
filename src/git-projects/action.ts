import { repositories } from "@/utils/data";
import { RepositoriesGithub, RepositoryData } from "@/utils/types";

export async function fetchRepositories(): Promise<RepositoriesGithub[]> {
  const query = `user:Marcos10PL language:JavaScript language:TypeScript language:HTML`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated`;

  const res = await fetch(url);
  // headers: {
  //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  //   Accept: "application/vnd.github.v3+json",
  // },

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  console.log(data);
  const orderedRepositories = Object.keys(repositories).map(key => {
    const repoData = repositories[key];
    const apiRepo = data.items.find(
      (item: RepositoryData) => item.name === key
    );

    return {
      id: apiRepo?.id,
      name: repoData.name,
      html_url: apiRepo?.html_url,
      homepage: apiRepo?.homepage,
      description: repoData.description,
      image: repoData.image,
    };
  });

  return orderedRepositories;
}
