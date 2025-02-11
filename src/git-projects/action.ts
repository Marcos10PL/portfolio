type Repositories = {
  [key: string]: {
    name: string;
    description: string;
    tech: string[];
  };
}

const repositories: Repositories = {
  "your-movies": {
    name: "Your Movies",
    description:
      "Aplikacja służąca do wyszukiwania filmów i seriali. Pozwala sprawdzać szczegółowe informacje o tytułach i śledzić premiery kinowe. Dane pochodzą z interfejsu API TMDB.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"], 
  },
  "website-for-the-company": {
    name: "Website for the company",
    description:
    "Kompletny szablon strony internetowej dla przykładowej firmy. Strona wykorzystuje Bootstrapa i animacje CSS.",
    tech: ["Bootstrap", "jQuery"],
  },
  "games": {
    name: "Games",
    description: "Strona z grami takimi jak: kółko i krzyżyk, memory, wisielec, kamień-papier-nożyce. Gry mają różne tryby.",
    tech: ["React.js"]
  },
  "to-do-list": {
    name: "To Do List",
    description: "Interaktywna lista to-do, którą można dowolnie zarządzać. Lista jest zapisywana na bieżąco w plikach cookies.",
    tech: ["TypeScript"],
  },
  "movie-center": {
    name: "Movie Center",
    description: "Centrum filmowe, w którym można przeglądać i zarządzać ulubionymi filmami.",
    tech: ["React.js", "Bootstrap", "SCSS"],
  },
  "mini-apps": {
    name: "Mini Apps",
    description:
      "Strona internetowa z zegarem, prognozą pogody i stoperem. Strona korzysta z API umożliwiającego pobranie aktualnej pogody.",
    tech: ["Vanilla JS"],
  },
};

export async function fetchRepositories(): Promise<Respository[]> {
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

  const orderedRepositories = Object.keys(repositories).map((key) => {
    const repoData = repositories[key];
    const apiRepo = data.items.find((item: any) => item.name === key);

    return {
      id: apiRepo?.id,
      name: repoData.name,
      html_url: apiRepo?.html_url,
      homepage: apiRepo?.homepage,
      description: repoData.description,
      tech: repoData.tech,
    };
  });

  return orderedRepositories;
}
