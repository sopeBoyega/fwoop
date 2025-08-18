
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Example images (Unsplash IDs from placeholder list)
const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
];

const Gallery = () => (
  <div className="min-h-screen bg-gradient-to-br from-school-green-light to-white py-8">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary">School Gallery</h1>
        <Link href="/blog" className="text-primary underline font-medium hover:opacity-80 transition-opacity">← Back to Blog</Link>
      </div>
      <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
        Explore what all schools have shared! Hover or tap images for extra fun. Animations powered by Tailwind and our design system.
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, idx) => (
          <div
            key={src}
            className="rounded-xl overflow-hidden shadow-lg group relative bg-card animate-fade-in"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="object-cover w-full h-52 sm:h-48 md:h-44 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:brightness-110 group-hover:animate-pulse ease-cubic-bezier"
              width={800}
              height={208}
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 25vw"
              // priority={idx < 2}
            />
            <div className="absolute inset-0 pointer-events-none rounded-xl border border-primary opacity-0 group-hover:opacity-60 transition-all duration-300 animate-none group-hover:animate-scale-in" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;

