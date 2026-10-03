import ListOfSchools from "@/components/parent/ListOfSchools";

const processSteps = [
    {
        step: "01",
        title: "Morning Home Pickup",
        description: "Our agent collects the packed lunchbox right from your doorstep between 7:30 AM - 11:00 AM.",
        icon: "🏠",
    },
    {
        step: "02",
        title: "QR Tagging & Route Sorting",
        description: "Every lunchbox is assigned a smart QR code matching student name, school, and classroom details.",
        icon: "🏷️",
    },
    {
        step: "03",
        title: "Desk Delivery Before Lunch",
        description: "Delivered safely to the school's distribution point before the lunch bell rings.",
        icon: "🎒",
    },
];

export default function Home() {
    return (
        <main className="bg-[#faf9f6] text-[#171717]">
            {/* Hero Section */}
            <section className="px-5 pb-14 pt-4 sm:px-8 sm:pt-4">
                <div className="mx-auto max-w-7xl">
                    <div className="w-full">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ff5a36]/10 px-4 py-2 text-sm font-semibold text-[#e94725]">
                            <span>✦</span>
                            Hot, fresh home lunch at school desks
                        </div>
                        {/* Live Delivery Status Check */}
                        <div className="mb-4 rounded-3xl border border-black/10 bg-white p-1 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-4">
                            <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                                Track Today's Lunchbox
                            </p>
                            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                                <div className="flex min-w-0 flex-1 items-center rounded-xl bg-[#faf9f6] px-3.5 py-2.5">
                                    <span className="mr-2 text-lg">📱</span>
                                    <input
                                        type="text"
                                        placeholder="Enter Student ID or Parent Phone Number"
                                        className="w-full bg-transparent text-sm outline-none placeholder:text-black/35 sm:text-base"
                                    />
                                </div>
                                <button className="rounded-xl bg-[#171717] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#ff5a36]">
                                    Track Status
                                </button>
                            </div>
                        </div>

                        <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                            Skip the morning rush. We carry
                            <span className="text-[#ff5a36]"> home to school.</span>
                        </h1>

                        <p className="mt-6 text-base leading-7 text-black/60 sm:text-lg">
                            oono collects lunchboxes directly from homes and delivers them right to school desks before the lunch bell.
                        </p>
                    </div>
                </div>
            </section>

            {/* How oono Works */}
            <section className="px-5 py-12 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a36]">
                            How OONO Works
                        </p>
                        <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                            From kitchen table to classroom desk
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {processSteps.map((step) => (
                            <div key={step.step} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl">{step.icon}</span>
                                    <span className="text-xs font-black text-black/30">{step.step}</span>
                                </div>
                                <h3 className="mt-5 text-lg font-black">{step.title}</h3>
                                <p className="mt-2 text-sm text-black/55">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Check School Coverage */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a36]">
                                Coverage
                            </p>
                            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                                Partnered Schools
                            </h2>
                            <p className="mt-2 text-sm text-black/50">
                                Check if oono currently serves your child's school.
                            </p>
                        </div>
                    </div>
                    <ListOfSchools />                    
                </div>
            </section>

            {/* School Partnership CTA */}
            <section className="px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-4xl bg-[#171717] px-6 py-12 text-white sm:px-12 sm:py-16">
                        <div className="relative max-w-2xl">
                            <p className="text-sm font-bold text-[#ff7657]">FOR SCHOOL MANAGEMENT</p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                                Partner with oono for organized lunch hours.
                            </h2>
                            <p className="mt-4 leading-7 text-white/60">
                                We coordinate directly with school administration to streamline daily lunchbox drops with zero classroom distraction.
                            </p>
                            <button className="mt-7 rounded-xl bg-[#ff5a36] px-6 py-3.5 text-sm font-bold transition hover:bg-[#ff704f]">
                                Register Your School
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}