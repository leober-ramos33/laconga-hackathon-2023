export default function Foooter() {
    return (
        <footer className="relative bottom-0 w-full">
            <div className="py-6 mx-auto px" style={{ maxWidth: "1024px" }}>
                <p className="text-base text-center text-gray-600">
                    Hecho por{" "}
                    <a
                        className="font-bold"
                        href="https://github.com/eduardob999/"
                        target="_blank"
                        rel="noopener"
                        style={{ color: "#ff4b4d" }}
                    >
                        Eduardo Bogado
                    </a>
                    ,{" "}
                    <a
                        className="font-bold"
                        href="#"
                        target="_blank"
                        rel="noopener"
                        style={{ color: "#ff4b4d" }}
                    >
                        Arazani Balcazar
                    </a>{" "}
                    y{" "}
                    <a
                        className="font-bold"
                        href="https://leober-ramos.com"
                        target="_blank"
                        rel="noopener"
                        style={{ color: "#ff4b4d" }}
                    >
                        Leober Ramos
                    </a>{" "}
                    con ❤️
                </p>
            </div>

            <div
                className="w-full py-1"
                style={{
                    background: "linear-gradient(to right, #FF416C, #FF4B2B)",
                }}
            ></div>
        </footer>
    );
}
