import TrainingDetailContent from "@/components/trainings/TrainingDetailContent";
import trainings from "@/data/trainings.json";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return trainings.map((training) => ({
    slug: training.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const training = trainings.find((t) => t.slug === slug);
  
  if (!training) {
    return { title: "Training Not Found" };
  }
  
  return {
    title: `${training.title} - ERA Training`,
    description: training.description,
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = trainings.find((t) => t.slug === slug);

  if (!training) {
    notFound();
  }

  return <TrainingDetailContent training={training} />;
}
