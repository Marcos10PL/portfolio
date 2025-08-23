import { repositories } from "@/data/data";
import { RepositoriesGithub, RepositoryData } from "@/types";
import { getReadmeContent } from "../readme/action";

export async function fetchRepositories(): Promise<RepositoriesGithub[]> {
  const query = `user:Marcos10PL language:JavaScript language:TypeScript language:HTML language:Vue`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated`;

  const res = await fetch(url);

  if (!res.ok)
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);

  const data = await res.json();

  const orderedRepositories = await Promise.all(
    Object.keys(repositories).map(async key => {
      const repoData = repositories[key];
      const apiRepo = data.items.find(
        (item: RepositoryData) => item.name === key
      );

      const readmeTech = await getReadmeContent(key);

      return {
        id: apiRepo?.id || repoData.name,
        name: repoData.name,
        html_url: apiRepo?.html_url,
        homepage: apiRepo?.homepage,
        image: repoData.image,
        tech: readmeTech,
      };
    })
  );

  return orderedRepositories;
}
