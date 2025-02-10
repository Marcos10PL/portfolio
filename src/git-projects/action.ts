export async function fetchRepositories(): Promise<GithubRespository[]> {
  const query = `user:Marcos10PL language:JavaScript language:TypeScript language:HTML`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.items;
}
