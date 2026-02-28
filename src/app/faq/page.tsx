import Layout from "@/components/Layout";
import FAQContent from "@/components/faq/FAQContent";

export const metadata = {
  title: "FAQ - ERA Engineering Resources Academy",
  description: "Frequently asked questions about ERA's programs, placement process, and how to get started.",
};

export default function FAQPage() {
  return (
    <Layout>
      <FAQContent />
    </Layout>
  );
}
