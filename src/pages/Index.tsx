import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { WhyExpensive } from "@/components/WhyExpensive";
import { PriceList } from "@/components/PriceList";
import { Process } from "@/components/Process";
import { OnlineEstimate } from "@/components/OnlineEstimate";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MessengerButtons } from "@/components/MessengerButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <WhyExpensive />
      <PriceList />
      <Process />
      <OnlineEstimate />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <MessengerButtons />
    </div>
  );
};

export default Index;