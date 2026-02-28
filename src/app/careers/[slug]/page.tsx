import Layout from "@/components/Layout";
import CareerDetailContent from "@/components/careers/CareerDetailContent";
import positions from "@/data/positions.json";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return positions.map((position) => ({
    slug: position.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const position = positions.find((p) => p.slug === slug);
  
  if (!position) {
    return { title: "Position Not Found" };
  }
  
  return {
    title: `${position.title} - ERA Careers`,
    description: position.summary,
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const position = positions.find((p) => p.slug === slug);

  if (!position) {
    notFound();
  }

  return (
    <Layout>
      <CareerDetailContent position={position} />
    </Layout>
  );
}
