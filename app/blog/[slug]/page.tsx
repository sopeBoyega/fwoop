"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogGallery from "@/app/components/BlogPage/BlogGallery";
import { Badge } from "@/app/components/ui/badge";
import { School, ArrowLeft, User, Calendar } from "lucide-react";
import axios from "axios";


export interface Article {
  title: string;
  school: string;
  description: string;
  content: string;
  tags?: string[];            // not required
  images?: string[];          // not required
  date: Date;
  author: string;
  status?: "draft" | "published"; // defaults to "draft"
  slug?: string;
  featuredImage?: string;
  readTime?: number;
  views?: number;             // defaults to 0
  likes?: number;             // defaults to 0
  createdAt?: Date;           // from timestamps
  updatedAt?: Date;           // from timestamps
}


const BlogPost = () => {
  const { slug } = useParams<{ slug?: string }>();


  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<Article[]>()
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
       const response = await axios.get(
          "https://foodproj-backend-4y4z.onrender.com/api/blog/getBlogs",
          {
            headers: {
              "Cache-Control": "no-cache",
            },
          }
        );
        setBlogPosts(response?.data?.data || []);
        console.log(response.data.data);
   
      } catch (err) {
        setBlogPosts([]);
      } finally {
        // setLoading(false);
      }
    };
    fetchblogs();
  }, []);

  const post = blogPosts?.find((p: Article) => p.slug === slug) ;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-lg">Post not found.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-primary underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-school-green-light to-white py-10">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <h1 className="text-3xl font-bold text-primary mb-4">{post.title}</h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5" />
            <span>{post.school}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          {post.author && (
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
          )}
        </div>

        <BlogGallery images={post.images ?? []} />
        
        <div className="prose prose-lg max-w-none mt-8 mb-6">
          <p className="text-lg leading-relaxed text-foreground">{post.description}</p>
          {post.content && (
            <div className="mt-6">
              <p className="leading-relaxed text-foreground">{post.content}</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
