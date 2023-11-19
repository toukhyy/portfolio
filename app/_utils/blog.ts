import { Post, Meta } from "@/app/_types/Blog";
import { mdxCompiler } from "../_lib/mdx";

export async function getPostByPath(path: string): Promise<Post | undefined> {
  const result = await fetch(
    `https://raw.githubusercontent.com/toukhyy/blog-content/master/${path}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  if (!result.ok) return undefined;
  const rawMDX = await result.text();
  if (rawMDX === "404: Not Found") return undefined;

  const post = await mdxCompiler(rawMDX);

  return post;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const result = await fetch(
    "https://api.github.com/repos/toukhyy/blog-content/git/trees/master?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!result.ok) return undefined;

  const content = await result.json();

  const mdxPaths: string[] = content.tree
    .filter((obj: { path: string }) => obj.path.endsWith(".mdx"))
    .map((obj: { path: string }) => obj.path);

  const postsMeta: Meta[] = [];

  for (const path of mdxPaths) {
    const post = await getPostByPath(path);
    if (post) {
      postsMeta.push(post.meta);
    }
  }
  return postsMeta;
}
