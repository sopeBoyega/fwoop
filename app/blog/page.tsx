"use client"
import React from "react";
import BlogCard from "../components/BlogPage/BlogCard";
import { Button } from "../components/ui/button";
import Link from "next/link";

// Placeholder images from public URLs
const posts = [
  {
    id: 1,
    title: "Composting in Action",
    school: "ABC Elementary School",
    date: "2024-05-30",
    description: "Students started a composting program and built their own bins from recycled materials.",
    tags: ["Composting", "Sustainability", "DIY"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Food Sharing Table Launch",
    school: "Green Valley High",
    date: "2024-06-02",
    description: "Our food share table launched! Unused food is now available for everyone, reducing waste.",
    tags: ["Food Sharing", "Community"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "School Garden Harvest",
    school: "Sunshine Primary",
    date: "2024-06-10",
    description: "First harvest from our garden! Leftover veggies help our lunch program and local shelters.",
    tags: ["Garden", "Food Recovery"],
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const Blog = () => {
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
              <Button className="school-gradient text-white uppercase font-bold flex items-center gap-2" size="lg">
                {/* <Plus className="w-5 h-5" /> */}
                Still Under Development!
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
          See what schools are up to! Posts showcase recent food waste reduction activities, events, and creative ideas.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <BlogCard post={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
