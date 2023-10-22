import Image from "next/image";
import cheerio from "cheerio";

// Heroicons
import { MagnifyingGlassIcon, CameraIcon } from "@heroicons/react/24/outline";

// Get data from arXiv.
async function getData(query) {
    const res = await fetch(
        `https://export.arxiv.org/api/query?search_query=all:${query}&max_results=25`,
    );
    const xml = res.text();

    return xml;
}

export default async function Search({ searchParams }) {
    // Get data from arXiv.
    const xml = await getData(searchParams.q);
    const $ = cheerio.load(xml);

    // Parse data from arXiv.
    let articles = [];
    $("entry").each((_, element) => {
        const entry = $(element);

        articles.push({
            url: entry.find("id").text().trim(),
            title: entry
                .find("title")
                .text()
                .replace(/  /g, " ")
                .replace(/\n/g, "")
                .trim(),
            published: new Date(entry.find("published").text().trim()),
            updated: new Date(entry.find("updated").text().trim()),
            summary: entry
                .find("summary")
                .text()
                .replace(/  /g, " ")
                .replace(/\n/g, "")
                .trim(),
        });
    });

    return (
        <section className="py-8 bg-white">
            <div className="px-4 mx-auto" style={{ maxWidth: "1140px" }}>
                <form
                    action="/search"
                    method="GET"
                    className="max-w-2xl mx-auto sm:ml-0"
                >
                    <label className="relative" htmlFor="q">
                        <input
                            type="text"
                            id="q"
                            name="q"
                            required
                            defaultValue={searchParams.q}
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

                <ul className="flex items-center mt-4 space-x-4">
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center h-10 px-8 py-2 bg-gray-100 border rounded-full focus:outline-none hover:border-black"
                        >
                            <Image
                                width={300}
                                height={135}
                                src="/img/search/arxiv.png"
                                alt="arXiv"
                                className="w-12 h-auto"
                            />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center h-10 px-8 py-2 text-xs text-gray-600 bg-white border rounded-full focus:outline-none transition hover:border-black"
                        >
                            More...
                        </a>
                    </li>
                </ul>

                {articles.length > 1 && (
                    <ul className="mt-8 space-y-6">
                        {articles.map((article, idx) => (
                            <li>
                                <a
                                    href={"/article/?id=" + article.url}
                                    key={idx}
                                    className="block max-w-3xl text-blue-600 hover:text-blue-400 transition"
                                >
                                    {article.title}
                                </a>

                                <p
                                    class="block max-w-3xl mt-2 text-xs text-gray-800 truncate"
                                    style={{
                                        lineClamp: 3,
                                        boxOrient: "vertical",
                                    }}
                                >
                                    {article.summary}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}

                {articles.length === 0 && (
                    <p className="mt-8">Articulos no encontrados.</p>
                )}
            </div>
        </section>
    );
}
