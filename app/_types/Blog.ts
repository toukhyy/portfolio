import { JSXElementConstructor, ReactElement } from "react";

export type Meta = {
  slug: string;
  title: string;
  language: string;
  translations: ("en" | "ar")[];
  date: string;
  tags: string[];
  banner: string;
  bannerCredits: string;
  readTime: string;
};

export type Post = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
