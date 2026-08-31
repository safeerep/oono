import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main className="bg-white flex items-center justify-center px-6">
            <div className="w-full max-w-md text-center">
                {/* Logo / Brand */}
                <div className="mb-10">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                        oono<span className="text-orange-500">.</span>
                    </span>
                </div>

                {/* 404 */}
                <div className="mb-8">
                    <h1 className="text-[100px] sm:text-[140px] leading-none font-black tracking-tighter text-gray-100">
                        404
                    </h1>

                    <div className="-mt-4 relative">
                        <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
                            The page you're looking for doesn't exist or may have been
                            moved.
                        </p>
                    </div>
                </div>

                {/* Action */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-full
                     bg-gray-900 px-6 py-3 text-sm font-medium text-white
                     transition hover:bg-gray-800 active:scale-95"
                >
                    Go back home
                    <span className="ml-2">→</span>
                </Link>
            </div>
        </main>
    );
};

export default NotFound;