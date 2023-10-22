import Image from "next/image";

export default function Section2() {
    return (
        <section className="py-24 bg-gray-100 border-t border-b">
            <div
                className="px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
                style={{ maxWidth: "1024px" }}
            >
                <div className="h-fit">
                    <Image
                        src="/img/homepage/section-2/fast.png"
                        alt=""
                        width={256}
                        height={256}
                        className="w-20 h-20"
                    />

                    <p className="mt-4 text-xl font-bold text-gray-800 font-poppins">
                        Rápido
                    </p>

                    <p className="mt-4 text-base text-gray-600">
                        Super ligero, y con una inteligencia artificial que va a
                        la velocidad de la luz, generando tus resumenes en
                        cuestión de segundos.
                    </p>
                </div>

                <div className="h-fit">
                    <Image
                        src="/img/homepage/section-2/easy.png"
                        alt=""
                        width={256}
                        height={256}
                        className="w-20 h-20"
                    />

                    <p className="mt-4 text-xl font-bold text-gray-800 font-poppins">
                        Fácil
                    </p>

                    <p className="mt-4 text-base text-gray-600">
                        Resumir un articulo científico es algo que te tomaría
                        horas, tomar las palabras correctas para que lo entienda
                        cualquier persona. Acá lo haces en tan solo segundos y
                        con pocos clicks.
                    </p>
                </div>

                <div className="h-fit">
                    <Image
                        src="/img/homepage/section-2/brain.png"
                        alt=""
                        width={256}
                        height={256}
                        className="w-20 h-20"
                    />

                    <p className="mt-4 text-xl font-bold text-gray-800 font-poppins">
                        Machine Learning
                    </p>

                    <p className="mt-4 text-base text-gray-600">
                        El poder de la inteligencia artificial acompañan a los
                        resumenes, resumiendo un articulo de más de 20 páginas
                        en pocas lineas, y fácil de entender.
                    </p>
                </div>
            </div>
        </section>
    );
}
