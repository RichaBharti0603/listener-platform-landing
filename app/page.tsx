import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Trust from "../components/Trust";
import StartSessionForm from "../components/StartSessionForm";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <HowItWorks />
      <Pricing />
      <Trust />
      <StartSessionForm />
    </main>
  );
}
