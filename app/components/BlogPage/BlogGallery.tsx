import React from "react";
import Image from "next/image";

interface BlogGalleryProps {
  images: string[];
}

const BlogGallery: React.FC<BlogGalleryProps> = ({ images  }) => {
  if (!images.length) return null;
  if (images.length === 1)
    return (
      <Image
        src={images[0]}
        alt="Blog gallery main"
        className="rounded-lg w-full mb-4 object-cover max-h-[60vh]"
        width={1200}
        height={600}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {images.map((img, idx) => (
        <img
          key={img}
          src={`https://foodproj-backend-4y4z.onrender.com/images/${img}`}
          alt={`Gallery image ${idx + 1}`}
          className="rounded-lg object-cover w-full max-h-96"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default BlogGallery;
