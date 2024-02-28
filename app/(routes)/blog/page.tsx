import { getPostsMeta } from "@/app/_utils/blog";
import { Meta } from "@/app/_types/Blog";
import { Card, FeaturedCard } from "@/app/_components/post/Post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Abdelrahman El Toukhy's Blog",
};

async function page() {
  const postsMeta = await getPostsMeta();

  if (!postsMeta) return <h1>there's no blog posts yet</h1>;

  const [mostRecent, ...rest] = postsMeta;
  return (
    <div className="mx-auto mb-16 mt-24 flex max-w-5xl flex-col items-center justify-center gap-16 px-4 md:mt-28 md:px-4 lg:px-0">
      <FeaturedCard post={mostRecent} />
      <ul className="grid w-full grid-cols-1 justify-between justify-items-center gap-10 md:grid-cols-2 md:gap-x-0 md:gap-y-10 lg:grid-cols-3 lg:gap-y-6">
        {rest.map((postMeta: Meta) => (
          <Card key={postMeta.slug} post={postMeta} />
        ))}
      </ul>
    </div>
  );
}

export default page;
