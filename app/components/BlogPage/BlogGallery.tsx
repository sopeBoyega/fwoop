
import React from "react";

interface BlogGalleryProps {
  images: string[];
}

const BlogGallery: React.FC<BlogGalleryProps> = ({ images }) => {
  if (!images.length) return null;
  if (images.length === 1)
    return (
      <img
        src={images[0]}
        alt="Blog gallery main"
        className="rounded-lg w-full mb-4 object-cover max-h-[60vh]"
      />
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Gallery image ${idx + 1}`}
          className="rounded-lg object-cover w-full max-h-96"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default BlogGallery;
