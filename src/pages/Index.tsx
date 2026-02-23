import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import BentoStats from "@/components/home/BentoStats";
import ProgramsBento from "@/components/home/ProgramsBento";
import TrainingsStrip from "@/components/home/TrainingsStrip";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PartnersMarquee />
      <BentoStats />
      <ProgramsBento />
      <TrainingsStrip />
      <Testimonials />
    </Layout>
  );
};

export default Index;
