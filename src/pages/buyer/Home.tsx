const localKitchens = [
    {
        name: "ABC Kitchen",
        location: "Kozhikode",
        speciality: "Malabar home-style food",
        rating: "4.9",
        time: "30-40 min",
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
        name: "Nadan Sadhya",
        location: "Malappuram",
        speciality: "Traditional Kerala cuisine",
        rating: "4.8",
        time: "25-35 min",
        image:
            "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
        name: "Thattinpuram",
        location: "Kochi",
        speciality: "Freshly made local favourites",
        rating: "4.8",
        time: "30-45 min",
        image:
            "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
    },
];

const highlights = [
    {
        title: "Home Kitchens",
        description: "Food made at home, just the way you like it.",
        icon: "🏠",
    },
    {
        title: "Local Sellers",
        description: "Discover talented food makers around you.",
        icon: "🧑‍🍳",
    },
    {
        title: "Made Fresh",
        description: "Freshly prepared food from local kitchens.",
        icon: "🥘",
    },
    {
        title: "Kerala Flavours",
        description: "Authentic flavours from across Kerala.",
        icon: "🌴",
    },
];

export default function Home() {
    return (
        <main className="bg-[#faf9f6]">
            {/* Hero */}
            <section className="px-5 pb-14 pt-10 sm:px-8 sm:pt-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 sm:grid-cols-1">
                        {/* Hero content */}
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ff5a36]/10 px-4 py-2 text-sm font-semibold text-[#e94725]">
                                <span>✦</span>
                                From local kitchens to you
                            </div>

                            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
                                Food made
                                <span className="text-[#ff5a36]"> closer.</span>
                            </h1>

                            <p className="mt-6 text-base leading-7 text-black/55 sm:text-lg">
                                Discover delicious food made by local sellers and
                                home kitchens across Kerala.
                            </p>

                            {/* Location */}
                            <button className="mt-7 flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-white p-3 text-left shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition hover:border-black/20">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff5a36]/10 text-xl">
                                    📍
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-black/40">
                                        Delivering to
                                    </p>

                                    <p className="mt-0.5 truncate text-sm font-bold sm:text-base">
                                        Choose your location
                                    </p>
                                </div>

                                <span className="text-black/40">→</span>
                            </button>

                            {/* Search */}
                            <div className="mt-3 flex items-center rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center text-xl">
                                    🔍
                                </div>

                                <input
                                    type="text"
                                    placeholder="Search for food or a local kitchen..."
                                    className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-black/35 sm:text-base"
                                />

                                <button className="hidden rounded-xl bg-[#171717] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ff5a36] sm:block">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What makes oono different */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-7">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a36]">
                            Why oono
                        </p>

                        <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                            More than just food.
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-black/50 sm:text-base">
                            We bring local food makers and food lovers together.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#faf9f6] text-xl">
                                    {item.icon}
                                </div>

                                <h3 className="mt-4 text-sm font-black sm:text-base">
                                    {item.title}
                                </h3>

                                <p className="mt-1.5 text-xs leading-5 text-black/45 sm:text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local kitchens */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a36]">
                                Around you
                            </p>

                            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                                Local kitchens
                            </h2>

                            <p className="mt-2 text-sm text-black/50">
                                Discover food makers near you.
                            </p>
                        </div>

                        <button className="hidden text-sm font-bold text-black/50 hover:text-black sm:block">
                            View all →
                        </button>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {localKitchens.map((kitchen) => (
                            <article
                                key={kitchen.name}
                                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={kitchen.image}
                                        alt={kitchen.name}
                                        className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold shadow-sm">
                                        ⭐ {kitchen.rating}
                                    </div>

                                    <button
                                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg shadow-sm"
                                        aria-label={`Save ${kitchen.name}`}
                                    >
                                        ♡
                                    </button>
                                </div>

                                {/* Details */}
                                <div className="p-5">
                                    <h3 className="font-black">
                                        {kitchen.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-black/45">
                                        {kitchen.speciality}
                                    </p>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-black/50">
                                            <span>📍 {kitchen.location}</span>
                                        </div>

                                        <span className="text-xs font-semibold text-black/50">
                                            ◷ {kitchen.time}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kerala message */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-4xl bg-[#171717] px-6 py-12 text-white sm:px-12 sm:py-16">
                        {/* Decorative element */}
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff5a36]/20 blur-3xl" />

                        <div className="relative max-w-2xl">
                            <p className="text-sm font-bold text-[#ff7657]">
                                MADE IN KERALA
                            </p>

                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                                Every kitchen has a story.
                            </h2>

                            <p className="mt-4 max-w-lg leading-7 text-white/55">
                                discover the people and flavours
                                behind your next meal.
                            </p>

                            <button className="mt-7 rounded-xl bg-[#ff5a36] px-6 py-3.5 text-sm font-bold transition hover:bg-[#ff704f]">
                                Explore local food
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}