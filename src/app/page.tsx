import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Vision from "@/components/Vision";
import Programs from "@/components/Programs";
import GetInvolved from "@/components/GetInvolved";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Vision />
      <Programs />
      <GetInvolved />
      <Donate />
      <Footer />
    </main>
  );
}
