const categories = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Burger", emoji: "🍔" },
    { name: "Biryani", emoji: "🍛" },
    { name: "Desserts", emoji: "🍰" },
    { name: "Drinks", emoji: "🥤" },
    { name: "Healthy", emoji: "🥗" },
];

const restaurants = [
    {
        name: "The Burger House",
        cuisine: "Burgers · American",
        rating: "4.8",
        time: "20–30 min",
        price: "₹₹",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Bowl & Spice",
        cuisine: "Indian · Biryani",
        rating: "4.7",
        time: "25–35 min",
        price: "₹₹",
        image:
            "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Crust & Co.",
        cuisine: "Pizza · Italian",
        rating: "4.6",
        time: "20–25 min",
        price: "₹₹₹",
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },
];

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="px-5 pb-10 pt-10 sm:px-8 sm:pt-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-10 sm:grid-cols-2 md:grid-cols-1">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ff5a36]/10 px-4 py-2 text-sm font-semibold text-[#e94725]">
                                <span>✦</span>
                                Good food. Good mood.
                            </div>

                            <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
                                Find something
                                <span className="text-[#ff5a36]"> delicious.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
                                Discover great places to eat, explore new flavours, and find
                                something you'll love.
                            </p>

                            {/* Search */}
                            <div className="mt-7 flex max-w-full items-center rounded-2xl border border-black/10 bg-white p-2 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center text-xl">
                                    🔍
                                </div>

                                <input
                                    type="text"
                                    placeholder="Search restaurants, dishes..."
                                    className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-black/35 sm:text-base"
                                />

                                <button className="hidden rounded-xl bg-[#171717] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ff5a36] sm:block">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Hero visual */}
                        {/* <div className="relative mx-auto w-full max-w-md md:max-w-none">
                <div className="overflow-hidden rounded-4xl">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
                    alt="Delicious food"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff5a36]/10 text-xl">
                      ⭐
                    </div>
                    <div>
                      <p className="text-sm font-bold">Top rated</p>
                      <p className="text-xs text-black/50">
                        Loved by foodies
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-5 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a36]">
                                Explore
                            </p>
                            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                                What are you craving?
                            </h2>
                        </div>

                        <button className="hidden text-sm font-bold text-black/50 hover:text-black sm:block">
                            View all →
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className="group rounded-2xl border border-black/5 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#faf9f6] text-3xl transition group-hover:scale-110">
                                    {category.emoji}
                                </div>

                                <p className="mt-3 text-xs font-bold sm:text-sm">
                                    {category.name}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Restaurants */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a36]">
                            Popular near you
                        </p>
                        <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                            Places worth trying
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {restaurants.map((restaurant) => (
                            <article
                                key={restaurant.name}
                                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold shadow-sm">
                                        ⭐ {restaurant.rating}
                                    </div>

                                    <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg shadow-sm">
                                        ♡
                                    </button>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-black">{restaurant.name}</h3>
                                            <p className="mt-1 text-sm text-black/45">
                                                {restaurant.cuisine}
                                            </p>
                                        </div>

                                        <span className="text-sm font-semibold text-black/40">
                                            {restaurant.price}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-black/50">
                                        <span>◷ {restaurant.time}</span>
                                        <span>·</span>
                                        <span>Great choice</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden rounded-4xl bg-[#171717] px-6 py-12 text-white sm:px-12">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold text-[#ff7657]">
                                DISCOVER MORE
                            </p>

                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                                Your next favourite meal is waiting.
                            </h2>

                            <p className="mt-4 max-w-lg leading-7 text-white/55">
                                Explore local favourites, hidden gems, and everything in
                                between.
                            </p>

                            <button className="mt-7 rounded-xl bg-[#ff5a36] px-6 py-3.5 text-sm font-bold transition hover:bg-[#ff704f]">
                                Explore food
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}