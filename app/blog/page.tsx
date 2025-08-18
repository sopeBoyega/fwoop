"use client"
import React from "react";
import BlogCard from "../components/BlogPage/BlogCard";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "./[slug]/page";

const Blog = () => {
  const [blogs, setBlogs] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

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
        setBlogs(response?.data?.data || []);
      } catch (err) {
        setBlogs([]);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchblogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-school-green-light to-white py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">School Blog</h1>
          <div className="flex flex-wrap gap-2">
            <Link href="/gallery">
              <span className="inline-block px-4 py-2 rounded school-gradient text-white font-semibold shadow hover:opacity-90 transition-opacity hover-scale">Gallery</span>
            </Link>
            <Link href="/blog/create">
              <Button className="school-gradient text-white font-bold flex items-center gap-2" size="lg">
                Create
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
          See what schools are up to! blogs showcase recent food waste reduction activities, events, and creative ideas.
        </p>
        {loading ? (
          <div className="text-center py-10 text-muted-foreground">Loading...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length === 0 ? (
              <div className="col-span-3 text-center text-muted-foreground">No blog blogs found.</div>
            ) : (
              blogs.map((p) => (
                <Link href={`/blog/${p.slug}`} key={p.slug}>
                 
                 <BlogCard post={p} key={p.slug} />
                 </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
