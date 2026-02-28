import Layout from "@/components/Layout";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata = {
  title: "Gallery - ERA Engineering Resources Academy",
  description: "A glimpse into life at ERA Academy - moments from trainings, graduations, and site visits.",
};

export default function GalleryPage() {
  return (
    <Layout>
      <GalleryContent />
    </Layout>
  );
}
