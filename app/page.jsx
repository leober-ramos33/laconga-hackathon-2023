// SEO
export const metadata = {
    description: "Homepage",
};

// Components
import Section1 from "./homepage/Section1";
import Section2 from "./homepage/Section2";
import Foooter from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Foooter />
        </>
    );
}
