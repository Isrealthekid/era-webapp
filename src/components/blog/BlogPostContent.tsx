"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import blogs from "@/data/blogs.json";

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  coverImage: string;
  date: string;
  tags: string[];
  published: boolean;
}

interface BlogPostContentProps {
  post: Blog;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const related = blogs.filter((b) => b.category === post.category && b.slug !== post.slug && b.published);

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="font-display text-2xl text-foreground mt-8 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith("> ")) return <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">{line.slice(2)}</blockquote>;
      if (line.startsWith("- ")) return <li key={i} className="ml-4 text-foreground">{line.slice(2)}</li>;
      if (line.trim() === "") return <br key={i} />;
      // bold
      const rendered = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={i} className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: rendered }} />;
    });
  };

  return (
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={16} /> All Posts
        </Link>

        <div className="aspect-video rounded-2xl bg-secondary overflow-hidden mb-8 relative">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>

        <Badge variant="secondary" className="mb-3">{post.category}</Badge>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
          <div className="relative w-8 h-8 rounded-full bg-secondary overflow-hidden">
            <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" />
          </div>
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <div className="prose-era space-y-1">
          {renderContent(post.content)}
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-xl text-foreground mb-4">Related posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-xl bg-secondary p-4 hover-lift">
                  <h4 className="font-display text-lg text-foreground mb-1">{r.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostContent;
