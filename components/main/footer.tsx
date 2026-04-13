import Link from "next/link";

import { FOOTER_DATA, PROFILE } from "@/constants";

export const Footer = () => {
  return (
    <div className="h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex w-full max-w-7xl flex-col items-center justify-center">
        <div className="flex h-full w-full flex-row flex-wrap items-start justify-center gap-8 sm:justify-around">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex h-auto min-w-[170px] flex-col items-center justify-start"
            >
              <h3 className="text-[16px] font-bold">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="my-[12px] flex flex-row items-center"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {PROFILE.name} {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
