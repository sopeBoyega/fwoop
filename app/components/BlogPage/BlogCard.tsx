"use client"
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { School } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostSummary {
  id: number;
  title: string;
  school: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
}

const BlogCard: React.FC<{ post: BlogPostSummary }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`} aria-label={`View blog post: ${post.title}`}>
      <Card className="transition-transform hover:scale-105 shadow hover:shadow-lg border-primary/20 hover:border-primary/40">
        <div className="aspect-w-16 aspect-h-9 w-full rounded-t-lg overflow-hidden bg-muted">
          <Image
            src="/logo.jpg"
            alt={post.title}
            className="object-cover w-full h-48"
            width={640}
            height={360}
            loading="lazy"
            style={{ width: "100%", height: "12rem" }}
          />
        </div>
        <CardContent>
          <h3 className="mt-2 font-bold text-lg text-primary mb-1">{post.title}</h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <School className="w-4 h-4" />
            <span>{post.school}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <p className="text-sm line-clamp-2 mb-2">{post.description}</p>
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
