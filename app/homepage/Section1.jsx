import Image from "next/image";

// Heroicons
import {
    MagnifyingGlassIcon,
    CameraIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Images
import logo from "@/public/img/logo/logo.jpeg";

export default function Section1() {
    return (
        <section className="relative flex items-center justify-center pt-4 pb-32 bg-primary">
            <div className="max-w-2xl px-4">
                <Image
                    src={logo}
                    alt="IntiTex AI"
                    className="w-64 h-auto mx-auto"
                />

                <h1
                    class="text-2xl font-bold tracking-wider text-center text-white font-poppins sm:text-3xl"
                    style={{ textShadowo: "3px 3px 3px rgba(0, 0, 0, .6)" }}
                >
                    Inti
                    <span className="relative whitespace-nowrap text-third">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute w-full top-2/3 fill-third"
                            preserveAspectRatio="none"
                            height="0.58em"
                            style={{ left: 0 }}
                        >
                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                        </svg>
                        <span className="relative">Tex</span>
                    </span>{" "}
                    AI
                </h1>

                <p className="mt-2 text-lg font-bold text-center text-third">
                    Resume tu articulo científico
                    <br />
                    en cuestión de segundos ✨
                </p>

                <form action="/search" method="GET" className="w-full mt-8">
                    <label className="relative" htmlFor="q">
                        <input
                            type="text"
                            id="q"
                            name="q"
                            required
                            className="w-full px-12 py-2 text-gray-800 border rounded-full focus:outline-none focus:border-third transition"
                        />

                        <button
                            type="submit"
                            className="absolute inset-0 right-0 flex items-center justify-center ml-4"
                            title="Buscar"
                        >
                            <MagnifyingGlassIcon className="w-5 h-5" />
                        </button>

                        <a
                            href="https://redbird-in-silkworm.ngrok-free.app"
                            rel="noopener"
                            className="absolute flex items-center justify-center mr-4"
                            style={{ right: 0, bottom: 0 }}
                            title="Buscar por imagen"
                        >
                            <CameraIcon className="w-5 h-5" />
                        </a>
                    </label>
                </form>
            </div>

            <div
                className="absolute z-10 flex items-center justify-center w-10 h-10 p-2 bg-white border border-black rounded-full"
                style={{ bottom: "-1.25rem" }}
            >
                <ChevronDownIcon className="w-10 h-10" />
            </div>
        </section>
    );
}
