import Link from "next/link";

export default function Home() {
  const navCards = [
    {
      title: "Browse",
      description: "Explore all recipes",
      href: "/browse",
      color: "#F5C4B3",
      arrow: "→",
    },
    {
      title: "Popular",
      description: "Community favourites",
      href: "/popular",
      color: "#9FE1CB",
      arrow: "→",
    },
    {
      title: "Create",
      description: "Share your recipe",
      href: "/create",
      color: "#FAC775",
      arrow: "→",
    },
    {
      title: "Contact",
      description: "Get in touch",
      href: "/contact",
      color: "#F4C0D1",
      arrow: "→",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F5E642] text-[#2C2C2A] flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">

      {/* LEFT — Hero */}
      <main className="flex flex-col justify-between px-8 py-10 lg:px-12 lg:py-10 lg:w-1/2 lg:border-r-2 border-b-2 lg:border-b-0 border-[#2C2C2A]">
        <p
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#2C2C2A]/50"
          style={{ fontFamily: "sans-serif" }}
        >
          Your community cookbook
        </p>

        {/* Wordmark */}
        <div className="py-8 lg:py-0">
          <h1
            className="font-black uppercase text-[#2C2C2A] leading-[0.85]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Recipe
          </h1>
          <h1
            className="font-black italic text-[#2C2C2A] leading-[0.85]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Bank.
          </h1>
        </div>

        {/* Tagline + CTA */}
        <div className="flex flex-col gap-4">
          <p
            className="text-sm leading-relaxed text-[#2C2C2A]/65 max-w-[260px]"
            style={{ fontFamily: "sans-serif" }}
          >
            Share your recipe and inspire others. Upload, discover, and learn.
          </p>
          <a
            href="/join"
            className="self-start h-11 px-8 flex items-center justify-center rounded-full bg-[#2C2C2A] text-[#F5E642] text-xs font-bold tracking-widest uppercase hover:bg-[#444441] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          >
            Join free
          </a>
        </div>
      </main>

      {/* RIGHT — 2×2 nav grid */}
      <div className="grid grid-cols-2 grid-rows-2 lg:w-1/2 lg:h-full">
        {navCards.map((card, i) => (
          <Link
            key={card.title}
            href={card.href}
            className="flex flex-col justify-between p-6 lg:p-8 min-h-[160px] lg:min-h-0 hover:brightness-95 transition-all cursor-pointer"
            style={{
              backgroundColor: card.color,
              borderRight: i % 2 === 0 ? "2px solid #2C2C2A" : "none",
              borderBottom: i < 2 ? "2px solid #2C2C2A" : "none",
              textDecoration: "none",
            }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2C2C2A]/45"
              style={{ fontFamily: "sans-serif" }}
            >
              {card.description}
            </span>
            <div className="flex items-end justify-between">
              <span
                className="font-black text-[#2C2C2A] leading-none"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {card.title}
              </span>
              <span
                className="text-2xl text-[#2C2C2A]/40 font-light"
                style={{ fontFamily: "sans-serif" }}
              >
                {card.arrow}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}