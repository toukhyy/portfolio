import { Post, Meta } from "@/app/_types/Blog";
import { mdxCompiler } from "../_lib/mdx";
import { formatDate } from "./formatDate";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

const blogDir = path.join(process.cwd(), "app", "_content", "posts");

export async function getPostByPath(slug: string): Promise<Post | undefined> {
  try {
    const filePath = path.join(blogDir, slug, "index.mdx");

    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    if (!fileContent) return undefined;

    const post = await mdxCompiler(fileContent);

    return post;
  } catch (error) {
    notFound();
  }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const files = fs.readdirSync(blogDir);

  const postsMeta: Meta[] = [];

  for (const file of files) {
    const post = await getPostByPath(file);
    if (post) {
      postsMeta.push(post.meta);
    }
  }

  postsMeta.sort((a: Meta, b: Meta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return postsMeta.map((post) => ({ ...post, date: formatDate(post.date) }));
}
