import Image from "next/image";

export function MDImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-full w-full">
      <Image
        className="mx-auto rounded-lg"
        src={src}
        alt={alt}
        width={650}
        height={650}
      />
    </div>
  );
}
