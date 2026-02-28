import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About - ERA Engineering Resources Academy",
  description: "Learn about ERA's mission, vision, values, and the team behind Nigeria's leading engineering resource academy.",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
