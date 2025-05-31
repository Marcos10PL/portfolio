import { StaticImageData } from "next/image";

export type RepositoriesGithub = {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  image?: StaticImageData;
};

export type RepositoriesData = {
  [key: string]: {
    name: string;
    image?: StaticImageData;
  };
};

export type RepositoryData = RepositoriesData[keyof RepositoriesData];

