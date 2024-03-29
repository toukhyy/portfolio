import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getPostsMeta, getPostByPath } from "@/app/_utils/blog";

type Props = {
  params: { slug: string; lang: string };
};

export async function generateStaticParams() {
  const postsMeta = await getPostsMeta();
  const staticParams: { slug: string; lang: string }[] = [];

  postsMeta?.forEach((post) => {
    post.translations.forEach((val) =>
      staticParams.push({ lang: val, slug: post.slug }),
    );
  });

  return staticParams;
}

export async function generateMetadata({ params }: Props) {
  const { slug, lang } = params;

  const post = await getPostByPath(slug, lang);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

async function page({ params }: Props) {
  const { slug, lang } = params;

  const post = await getPostByPath(slug, lang);
  if (!post) return <h1>Not Found</h1>;

  return (
    <>
      <header className="mx-auto mb-10 mt-20 max-w-lg px-4 md:mb-16 md:mt-24 md:max-w-2xl lg:max-w-5xl lg:px-0">
        <Link
          href="/blog"
          className="mb-5 flex w-fit items-center gap-2.5 text-cream-900 duration-300 hover:text-cream-700"
        >
          <FaArrowLeftLong className="h-3 w-3 md:h-4 md:w-4" />
          <span className="text-xs font-semibold md:text-base">
            Back to Blog
          </span>
        </Link>

        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          lang={lang}
          className="relative mb-2 h-52 md:h-80 lg:h-[40rem]"
        >
          <div className="flex h-full w-full items-center justify-center">
            <h2 className="z-10 max-w-xs text-center text-xl font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)] md:max-w-xl md:text-3xl lg:text-4xl">
              {post.meta.title}
            </h2>
          </div>
          <Image
            alt={post.meta.bannerCredits}
            src={post.meta.banner}
            title={post.meta.bannerCredits.split(" (")[0]}
            width={800}
            height={800}
            className="absolute left-0 top-0 h-52 w-full rounded-md object-cover md:h-full"
          />
        </div>
        <p className="text-center text-xs text-cream-800 md:text-base">
          {post.meta.date} — {post.meta.readTime}
        </p>
      </header>
      <main dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        <article className="prose prose-sm prose-neutral mx-auto px-8 pb-16 md:prose-base lg:prose-lg md:max-w-2xl md:pb-20 lg:max-w-3xl">
          {post?.content}
        </article>
      </main>
    </>
  );
}

export default page;
