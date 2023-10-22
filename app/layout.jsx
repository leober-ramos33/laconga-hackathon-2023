import "./layout.css";

// Fonts
import { Roboto, Raleway } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    style: ["normal"],
    variable: "--font-lato",
});
const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    style: ["normal"],
    variable: "--font-raleway",
});

// SEO
export const metadata = {
    title: "LA-CoNGA Hackathon 2023",
    description: "",
};

// Components
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                {/* Browserconfig */}
                <meta
                    name="msapplication-TileImage"
                    content="/icons/ms-icon-144x144.png"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />

                {/* Favicons */}
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/icons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/icons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/icons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/icons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/icons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/icons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/icons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/icons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-icon-180x180.png"
                />
                <link rel="shortcut icon" href="/favicon.ico" />

                <link
                    rel="search"
                    type="application/opensearchdescription+xml"
                    href="/opensearch.xml"
                />
            </head>

            <body className={roboto.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
