import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-amber-900 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-center">
        <div className="flex flex-col items-center gap-2 text-center sm:items-center">
          <h1 className="max-w-prose  text-7xl lg:text-8xl md:text-7xl sm:text-6xl font-black tracking-tight text-amber-50 dark:zinc-50">
            Recipe<span className="font-serif italic font-normal"> Bank</span>
          </h1>
          <p className="max-w-md text-lg leading-7 font-serif italic text-amber-50">
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
            Sign In
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
    </div>
  </>
  );
}
