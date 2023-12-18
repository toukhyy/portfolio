import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { Post } from "@/app/_types/Blog";
import { s } from "hastscript";
import { MDImage } from "./components";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import slugify from "@sindresorhus/slugify";
import readingTime from "reading-time";

const options: Options = {
  theme: "github-dark-dimmed",
  // theme: "material-theme-palenight"
  // theme: "one-dark-pro"
};

export async function mdxCompiler(mdxFile: string) {
  const { text } = readingTime(mdxFile);
  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
    banner: string;
    bannerCredits: string;
  }>({
    source: mdxFile,
    components: {
      h1: (props) => <h1 {...props} className="group" />,
      h2: (props) => <h2 {...props} className="group" />,
      h3: (props) => <h3 {...props} className="group" />,
      h4: (props) => <h4 {...props} className="group" />,
      h5: (props) => <h5 {...props} className="group" />,
      h6: (props) => <h6 {...props} className="group" />,
      MDImage,
    },

    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, options],
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                ariaHidden: true,
                tabIndex: -1,
                class:
                  "inline-block ml-2 opacity-0 group-hover:opacity-100 transition duration-200",
              },
              content: s(
                "svg",
                {
                  ariaHidden: "true",
                  viewBox: [0, 0, 24, 24],
                  focusable: false,
                  width: 22,
                  height: 22,
                  fill: "none",
                  className:
                    "stroke-current text-cream-600 hover:text-cream-800",
                },
                s("path", {
                  strokeLinecap: "round",
                  strokeWidth: 2.5,
                  strokeLinejoin: "round",
                  d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                }),
              ),
            },
          ],
        ],
      },
    },
  });

  const { tags, title, date, banner, bannerCredits } = frontmatter;
  const slug = slugify(title.toLowerCase());

  const blogPost: Post = {
    meta: { slug, tags, date, title, banner, bannerCredits, readTime: text },
    content,
  };

  return blogPost;
}
