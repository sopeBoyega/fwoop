"use client"
import React, { useState} from "react";
import { Button } from "@radix-ui/themes";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Plus, X, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/app/hooks/use-toast";
import slugify from "slugify";

const BlogCreate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    school: "",
    description: "",
    content: "",
    tags: [] as string[],
    images: [] as string[],
    date: "",
    author: "",
    status: "published"
  });
  const [newTag, setNewTag] = useState("");
const [images, setImages] = useState<File[]>([]);
const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({ 
      ...prev, 
      tags: prev.tags.filter(tag => tag !== tagToRemove) 
    }));
  };

 const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = Array.from(e.target.files || []);
  setImages(prev => [...prev, ...files]);

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImagePreviews(prev => [...prev, e.target!.result as string]);
      }
    };
    reader.readAsDataURL(file);
  });
};

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.school || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (title, school, description).",
        variant: "destructive"
      });
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("school", formData.school);
    form.append("description", formData.description);
    form.append("content", formData.content);
    form.append("slug", slugify(formData.title, { lower: true, strict: true }));
    form.append("date", formData.date || new Date().toISOString());
    form.append("author", formData.author || "Current User");
    form.append("status", formData.status);
    formData.tags.forEach(tag => form.append("tags", tag));
    images.forEach(image => form.append("images", image));

    try {
      const response = await fetch("https://foodproj-backend-4y4z.onrender.com/api/blog/add", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

      toast({
        title: "Blog Post Created!",
        description: "Your blog post has been saved successfully.",
      });

      // Reset form
      setFormData({
        title: "",
        school: "",
        description: "",
        content: "",
        tags: [],
        images: [],
        date: "",
        author: "",
        status: "published"
      });
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-school-green-light to-white py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/blog">
            <Button variant="outline" size="1" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">Create New Blog Post</h1>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Share Your School's Food Waste Initiative</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Post Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Our New Composting Program"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school">School Name *</Label>
                  <Input
                    id="school"
                    placeholder="e.g., Greenwood Elementary"
                    value={formData.school}
                    onChange={(e) => handleInputChange("school", e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Date, Author, and Status */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder="e.g., Jane Doe"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Brief Description *</Label>
                <Textarea
                  id="description"
                  placeholder="A short summary of your initiative (will appear on blog cards)"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={3}
                  required
                />
              </div>

              {/* Full Content */}
              <div className="space-y-2">
                <Label htmlFor="content">Full Content</Label>
                <Textarea
                  id="content"
                  placeholder="Tell the full story of your food waste reduction initiative..."
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  rows={8}
                />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag (e.g., Composting, Food Sharing)"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="1">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Images */}
              <div className="space-y-2">
                <Label>Images</Label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="block w-full border rounded-md px-3 py-2 text-sm"
                />
                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="school-gradient text-white" size="3">
                  Create Blog Post
                </Button>
                <Button type="button" variant="outline" size="3">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* JSON Schema Documentation */}
        <Card className="mt-8 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Database JSON Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "id": "string | number",
  "title": "string",
  "school": "string", 
  "description": "string",
  "content": "string",
  "tags": ["string", "string"],
  "images": ["string", "string"],
  "date": "ISO string",
  "author": "string",
  "status": "draft | published",
  "createdAt": "ISO string",
  "updatedAt": "ISO string",
  "slug": "string (optional)",
  "featuredImage": "string (first image)",
  "readTime": "number (optional)",
  "views": "number (optional)",
  "likes": "number (optional)"
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogCreate;