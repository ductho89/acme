import Carousel from "./carousel";
import CtaSection from "../components/ctasection";
import Footer from "../components/footer";
import Header from "../components/header";
import StudyPrograms from "../components/studyprograms";
import VguInFigures from "../components/vguinfigures";
import VguPartners from "../components/vgupartners";
import VguToday from "../components/vgutoday";

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col">
            <Header/>
            <Carousel/>
            <StudyPrograms />
            <VguInFigures />
            <VguToday />
            <VguPartners />
            <CtaSection />
            <Footer />
        </main>
    )


}