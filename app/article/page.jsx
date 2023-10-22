import cheerio from "cheerio";

// Components
import ResumeWithAI from "./ResumeWithAI";

// Get data from arXiv.
async function getData(articleId) {
    const realId = articleId.split("/").slice(-1)[0];
    const res = await fetch(
        "https://export.arxiv.org/api/query?id_list=" + realId,
    );
    const xml = await res.text();

    return xml;
}

export default async function Page({ searchParams }) {
    // Get data from arXiv.
    const xml = await getData(searchParams.id);
    const $ = cheerio.load(xml);

    // Parse data from arXiv.
    const entry = $("entry");
    const article = {
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
        pdf: entry.find("link[title='pdf']").attr("href").trim(),
    };

    return (
        <section className="flex items-center justify-center pt-12 pb-24 bg-white lg:py-24 lg:min-h-screen">
            <div
                className="px-4 mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2"
                style={{ maxWidth: "1140px" }}
            >
                <div>
                    <h1 className="text-xl font-bold tracking-wider text-center font-poppins lg:text-left">
                        {article.title}
                    </h1>

                    <p className="mt-8 font-bold text-black">Descripción:</p>

                    <p className="mt-4 text-xs text-gray-600 sm:text-sm">
                        {article.summary}
                    </p>

                    <div className="flex items-center justify-center mt-8">
                        <object
                            data={article.pdf}
                            type="application/pdf"
                            width="90%"
                            height="600"
                            className="rounded shadow-md"
                        >
                            <iframe
                                src={article.pdf}
                                width="90%"
                                height="600"
                                className="rounded shadow-md"
                            ></iframe>
                        </object>
                    </div>
                </div>

                <ResumeWithAI pdf={article.pdf} />
            </div>
        </section>
    );
}
