"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button, Badge } from "@radix-ui/themes";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { School, BookOpen, Check, Plus, X, Upload } from "lucide-react";
import { useToast } from "./ui/use-toast";
import axios from "axios";
import DotsSpinner from "./spinners/DotsSpinner";

const JournalEntry = () => {
  

  const [loading,setLoading] = useState<boolean>(false)
    const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    schoolName: "",
    date: "",
    wasteReduction: "",
    actions: "",
    challenges: "",
    nextSteps: "",
    wasteAmount: "",
  });

  const [milestones, setMilestones] = useState<string[]>([]);
  const [newMilestone, setNewMilestone] = useState("");
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addMilestone = () => {
    if (newMilestone.trim()) {
      setMilestones((prev) => [...prev, newMilestone.trim()]);
      setNewMilestone("");
    }
  };

  const removeMilestone = (index: number) => {
    setMilestones((prev) => prev.filter((_, i) => i !== index));
  };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Validate file types
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid Files",
        description: "Please select only image files.",
        variant: "destructive"
      });
      return;
    }

    // Add new images
    setImages(prev => [...prev, ...validFiles]);

    // Create previews
    validFiles.forEach(file => {
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

  if (!formData.schoolName || !formData.date || !formData.actions) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive",
    });
    return;
  }

  console.log("Submitting form...");

  const data = new FormData();

  // Append text fields
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value);
  });

  // Append milestones
  milestones.forEach((milestone, index) => {
    data.append(`milestones[${index}]`, milestone);
  });

  // Append multiple images
  images.forEach((image) => {
    data.append("images", image); // key must match what your backend expects
  });

  try {
    setLoading(true);
    await axios.post(
      "https://foodproj-backend-4y4z.onrender.com/api/journal/add",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast({
      title: "Journal Entry Submitted! 🌱",
      description:
        "Your food waste journey progress has been recorded successfully.",
    });

    // Reset form
    setFormData({
      schoolName: "",
      date: "",
      wasteReduction: "",
      actions: "",
      challenges: "",
      nextSteps: "",
      wasteAmount: "",
    });
    setMilestones([]);
    setImages([]);
    setImagePreviews([]);
  } catch (error) {
    console.error("Failed to send data", error);
    toast({
      title: "Submission Failed",
      description: "Something went wrong while submitting the journal.",
      variant: "destructive",
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-green-600 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-green-800">
                Food Waste Journey Journal
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your school&apos;s progress in reducing food waste and inspire
              change in your community
            </p>
          </div>

          <Card className="shadow-lg border-2 border-green-200">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center gap-2 text-xl">
                <School className="h-6 w-6" />
                New Journal Entry
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School Name *</Label>
                    <Input
                      id="schoolName"
                      placeholder="Enter school name"
                      value={formData.schoolName}
                      onChange={(e) =>
                        handleInputChange("schoolName", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="wasteAmount">
                      Current Waste Amount (kg/day)
                    </Label>
                    <Input
                      id="wasteAmount"
                      type="number"
                      placeholder="e.g., 25"
                      value={formData.wasteAmount}
                      onChange={(e) =>
                        handleInputChange("wasteAmount", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wasteReduction">Waste Reduction Goal</Label>
                    <Select
                      value={formData.wasteReduction}
                      onValueChange={(value) =>
                        handleInputChange("wasteReduction", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select reduction target" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10% reduction</SelectItem>
                        <SelectItem value="25">25% reduction</SelectItem>
                        <SelectItem value="50">50% reduction</SelectItem>
                        <SelectItem value="75">75% reduction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                 {/* Image Upload Section */}
                <div className="space-y-3">
                  <Label className="text-primary font-semibold">Add Images</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Upload images of your food waste reduction activities
                      </p>
                      <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="max-w-xs"
                      />
                    </div>
                  </div>
                  
                  {/* Image Previews */}
                  {imagePreviews.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border border-border"
                          />
                          <Button
                            type="button"
                            variant="solid"
                            
                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="actions">Actions Taken This Period *</Label>
                  <Textarea
                    id="actions"
                    placeholder="Describe actions taken to reduce food waste..."
                    className="min-h-[100px]"
                    value={formData.actions}
                    onChange={(e) =>
                      handleInputChange("actions", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-3">
                  <Label>Milestones Achieved</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a milestone..."
                      value={newMilestone}
                      onChange={(e) => setNewMilestone(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addMilestone();
                        }
                      }}
                    />
                    <Button type="button" onClick={addMilestone}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {milestones.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {milestones.map((milestone, index) => (
                        <Badge
                          key={index}
                          className="cursor-pointer"
                          onClick={() => removeMilestone(index)}
                        >
                          <Check className="h-3 w-3 mr-1" />
                          {milestone}
                          <span className="ml-2">&times;</span>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenges">Challenges Faced</Label>
                  <Textarea
                    id="challenges"
                    placeholder="What obstacles did you encounter?"
                    className="min-h-[80px]"
                    value={formData.challenges}
                    onChange={(e) =>
                      handleInputChange("challenges", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nextSteps">Next Steps & Goals</Label>
                  <Textarea
                    id="nextSteps"
                    placeholder="Plans for the next period"
                    className="min-h-[80px]"
                    value={formData.nextSteps}
                    onChange={(e) =>
                      handleInputChange("nextSteps", e.target.value)
                    }
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button type="submit">
                    {loading ? <DotsSpinner color="#ffffff"/> : <><BookOpen className="h-5 w-5 mr-2" /> Submit Journal Entry</>}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
