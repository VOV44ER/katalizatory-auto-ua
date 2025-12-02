import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { WhyBuyInfo } from "@/components/WhyBuyInfo";
import { PriceList } from "@/components/PriceList";
import { Process } from "@/components/Process";
import { OnlineEstimate } from "@/components/OnlineEstimate";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MessengerButtons } from "@/components/MessengerButtons";

export default function HomePage() {
    return (
        <div className="min-h-screen" id="top">
            <Header />
            <Hero />
            <Advantages />
            <PriceList />
            <WhyBuyInfo />
            <Process />
            <OnlineEstimate />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
            <MessengerButtons />
        </div>
    );
}


