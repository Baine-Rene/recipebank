import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-amber-200 text-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center pb-32 pt-20 px-16 sm:items-center">
          <div className="flex flex-col items-center gap-2 text-center sm:items-center">
            <h1 className="max-w-prose text-8xl lg:text-9xl md:text-7xl sm:text-6xl font-bold font-serif tracking-tight text-black dark:zinc-50">
              Recipe
              <br />
              <span className="font-edu font-normal"> Bank</span>
            </h1>
            <p className="max-w-md text-lg leading-7 font-serif italic">
              Share your recipe and inspire others today. Upload all you recipe
              needs and learn from others.
            </p>
          </div>
          <div className="flex flex-row gap-4 text-base pt-5 font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href=""
              rel="noopener noreferrer"
            >
              Join
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-amber-600 dark:border-white/[.145] dark:border-4 dark:hover:bg-amber-600 md:w-[158px]"
              href=""
              rel="noopener noreferrer"
            >
              Browse
            </a>
          </div>
        </main>
        <div className="flex flex-row bg-gray-600 py-24 w-full items-center gap-2 text-center sm:items-center">
          <div className="w-1/2">
          <h2 classname=" text-8xl lg:text-9xl md:text-7xl sm:text-6xl font-bold font-serif tracking-tight text-amber-200 dark:zinc-50">This is the content for the first page</h2>
          </div>
          <div classname="w-1/2 bg-blue-700"> this is the content for the second page </div>
        </div>
      </div>
    </>
  );
}
