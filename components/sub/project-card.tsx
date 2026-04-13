import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex h-full flex-col overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg"
    >
      <div className="relative h-64 w-full md:h-100 overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 790px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};