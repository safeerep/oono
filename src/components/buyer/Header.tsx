
const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf9f6]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
                <div className="text-2xl font-black tracking-tight">
                    <span className="text-[#ff5a36]">oono</span>
                </div>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm font-medium text-black/70 hover:text-black">
                        Explore
                    </a>
                    <a href="#" className="text-sm font-medium text-black/70 hover:text-black">
                        Restaurants
                    </a>
                    <a href="#" className="text-sm font-medium text-black/70 hover:text-black">
                        Offers
                    </a>
                </div>

                <button className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                    Sign in
                </button>
            </div>
        </header>
    )
}

export default Header