import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SpeakerForm from "@/components/SpeakerForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LiveStats />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <SpeakerForm />
      <Footer />
    </>
  );
}
