export async function getReadmeContent(
  repoName: string,
  username: string = "Marcos10PL"
): Promise<string[]> {
  try {
    const url = `https://api.github.com/repos/${username}/${repoName}/readme`;
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`README not found: ${res.status}`);
    }

    const data = await res.json();
    const content = atob(data.content);
    return cleanTechStack(extractTechStack(content));
  } catch (error) {
    console.warn(`Could not fetch README for ${repoName}:`, error);
    return [];
  }
}

function extractTechStack(readmeContent: string): string[] {
  if (!readmeContent) return [];

  const techSectionRegex =
    /(?:##?|###)\s+(?:Tech|Technologies|tech|Stack)[\s\S]*?(?=##?|###|$)/i;
  const match = readmeContent.match(techSectionRegex);

  if (!match) return [];

  const techSection = match[0];

  const techItems: string[] = [];

  const listItems = techSection.match(/^[-*]\s+(.+)$/gm);
  if (listItems) {
    listItems.forEach(item => {
      const tech = item.replace(/^[-*]\s+/, "").trim();
      if (tech) techItems.push(tech);
    });
  }

  const tagItems = techSection.match(/`([^`]+)`/g);
  if (tagItems && techItems.length === 0) {
    tagItems.forEach(tag => {
      const tech = tag.replace(/`/g, "").trim();
      if (tech) techItems.push(tech);
    });
  }

  if (techItems.length === 0) {
    const lines = techSection
      .split("\n")
      .filter(line => line.trim().length > 0 && !line.startsWith("#"))
      .map(line => line.trim().replace(/^[-*]\s+/, ""));

    techItems.push(...lines);
  }

  return techItems.filter(item => item.length > 0);
}

function cleanTechStack(techStack: string[]): string[] {
  return techStack
    .map(tech => {
      return tech
        .replace(/^--\s*/, "")
        .replace(/\s*<br\s*\/?>\s*$/i, "")
        .replace(/\s*<br\s*\/?>\s*/gi, ", ")
        .trim();
    })
    .filter(tech => tech.length > 0);
}
