
const Footer = () => {
    return (
        <>
            {/* mobile bottom navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-white/95 px-6 py-3 backdrop-blur-xl md:hidden">
                <div className="mx-auto flex max-w-md items-center justify-between">
                    <button className="flex flex-col items-center gap-1 text-[#ff5a36]">
                        <span>⌂</span>
                        <span className="text-[10px] font-bold">Home</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-black/40">
                        <span>⌕</span>
                        <span className="text-[10px] font-bold">Explore</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-black/40">
                        <span>♡</span>
                        <span className="text-[10px] font-bold">Saved</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-black/40">
                        <span>◯</span>
                        <span className="text-[10px] font-bold">Profile</span>
                    </button>
                </div>
            </nav>

            {/* Bottom spacing for mobile navigation */}
            <div className="h-20 md:hidden" />
        </>
    )
}

export default Footer