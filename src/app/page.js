import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen grid grid-cols-2 bg-amber-200 text-black overflow-hidden">
        {/* LEFT COLUMN — Title & CTA */}
        <main className="flex flex-col justify-center px-20">
          <h1 className="text-6xl sm:text-8xl font-bold font-serif tracking-tight text-black leading-none">
            Recipe
            <br />
            <span className="font-edu font-normal">Bank</span>
          </h1>
          <p className="max-w-xs text-base leading-6 font-serif italic text-black/70 mt-5">
            Share your recipe and inspire others today. Upload all your recipe
            needs and learn from others.
          </p>
          <a
            className="flex h-11 w-[130px] items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background text-sm transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] mt-7 font-medium"
            href=""
            rel="noopener noreferrer"
          >
            Join
          </a>
          <a
            className="flex h-11 w-[130px] items-center justify-center rounded-full border border-solid border-black px-5 text-sm transition-colors hover:border-transparent hover:bg-amber-600 dark:border-white/[.145] dark:border-4 dark:hover:bg-amber-600 mt-3 font-medium"
            href=""
            rel="noopener noreferrer"
          >
            Browse
          </a>
        </main>

        {/* RIGHT COLUMN — 2x2 Recipe Card Grid */}
        <div className="flex items-center justify-center px-8 py-10">
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {[
              { title: "Pasta Carbonara", tag: "Italian", time: "25 min", emoji: "🍝" },
              { title: "Mango Salsa", tag: "Mexican", time: "10 min", emoji: "🥭" },
              { title: "Lemon Tart", tag: "Dessert", time: "45 min", emoji: "🍋" },
              { title: "Butter Chicken", tag: "Indian", time: "40 min", emoji: "🍛" },
            ].map((recipe) => (
              <div
                key={recipe.title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex flex-col gap-2 shadow-sm hover:shadow-md hover:bg-white/90 transition-all cursor-pointer aspect-square"
              >
                <div className="text-2xl">{recipe.emoji}</div>
                <div className="flex-1">
                  <p className="font-serif font-bold text-sm leading-snug text-black">
                    {recipe.title}
                  </p>
                  <p className="text-xs text-black/60 mt-0.5">{recipe.tag}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-black/50 font-medium">
                  <span>⏱</span>
                  <span>{recipe.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}