import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import blogs from "@/data/blogs.json";

const Blog = () => {
  const published = blogs.filter((b) => b.published);
  const featured = published[0];
  const rest = published.slice(1);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading tag="Blog" title="Insights & stories" subtitle="Articles on engineering education, career tips, and success stories." />

          {featured && (
            <Link to={`/blog/${featured.slug}`} className="block rounded-2xl bg-card border border-border overflow-hidden hover-lift mb-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-secondary">
                  <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-3">{featured.category}</Badge>
                  <h2 className="font-display text-2xl text-foreground mb-3">{featured.title}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{featured.date} · {featured.author}</span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">Read <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rest.map((b, i) => (
              <motion.div key={b.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${b.slug}`} className="block rounded-2xl bg-card border border-border overflow-hidden hover-lift group">
                  <div className="aspect-video bg-secondary"><img src={b.coverImage} alt={b.title} className="w-full h-full object-cover" /></div>
                  <div className="p-5">
                    <Badge variant="secondary" className="mb-2">{b.category}</Badge>
                    <h3 className="font-display text-lg text-foreground mb-1 line-clamp-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{b.excerpt}</p>
                    <span className="text-xs text-muted-foreground">{b.date} · {b.author}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
