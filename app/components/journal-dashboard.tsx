"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "@radix-ui/themes";
import { Badge } from "@radix-ui/themes";
import { Progress } from "./ui/progress";
import { School, Calendar, BookOpen, Plus, Check } from "lucide-react";
import Link from "next/link";

const JournalDashboard = () => {
  // Mock data - in real app this would come from your database
  const journalEntries = [
    {
      id: 1,
      schoolName: "ABC Elementary School",
      date: "2024-06-05",
      wasteReduction: "25",
      wasteAmount: "15",
      progress: 75,
      milestones: ["Started composting program", "Reduced lunch waste by 20%"],
    },
    {
      id: 2,
      schoolName: "Green Valley High",
      date: "2024-06-03",
      wasteReduction: "50",
      wasteAmount: "8",
      progress: 60,
      milestones: ["Implemented portion control", "Student awareness campaign"],
    },
    {
      id: 3,
      schoolName: "Sunshine Primary",
      date: "2024-06-01",
      wasteReduction: "10",
      wasteAmount: "22",
      progress: 30,
      milestones: ["Food waste tracking started"],
    },
  ];

  const leaderboardData = journalEntries
    .sort((a, b) => b.progress - a.progress)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-school-green-light to-white school-pattern">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary rounded-full">
                <School className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold text-primary">
                Food Waste Initiative Dashboard
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Track progress across participating schools and celebrate
              achievements in reducing food waste
            </p>
            <Link href="/journal" passHref>
              <Button
                asChild
                size="3"
                className="school-gradient hover:opacity-90 transition-opacity"
              >
                <div className="">
                      <Plus className="h-5 w-5 mr-2" />
                Add New Journal Entry
                </div>
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Journal Entries */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Recent Journal Entries
              </h2>

              {journalEntries.map((entry) => (
                <Card
                  key={entry.id}
                  className="shadow-md border-primary/20 hover:shadow-lg transition-shadow animate-scale-in"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-primary text-lg flex items-center gap-2">
                        <School className="h-5 w-5" />
                        {entry.schoolName}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Current Waste
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {entry.wasteAmount} kg/day
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Reduction Goal
                        </div>
                        <div className="text-2xl font-bold text-school-green">
                          {entry.wasteReduction}%
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Progress
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {entry.progress}%
                        </span>
                      </div>
                      <Progress value={entry.progress} className="h-2" />
                    </div>

                    {entry.milestones.length > 0 && (
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-2">
                          Latest Milestones
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {entry.milestones.map((milestone, index) => (
                            <Badge
                              key={index}
                              variant="solid"
                              className="bg-school-green/10 text-school-green"
                            >
                              <Check className="h-3 w-3 mr-1" />
                              {milestone}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Leadership Board */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mb-4">
                🏆 Leadership Board
              </h2>

              <Card className="shadow-lg border-2 border-primary/20 animate-scale-in">
                <CardHeader className="school-gradient text-primary-foreground">
                  <CardTitle className="text-lg">Top Performers</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {leaderboardData.map((school) => (
                    <div
                      key={school.id}
                      className="p-4 border-b last:border-b-0 hover:bg-school-green-light/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            school.rank === 1
                              ? "bg-yellow-500 text-white"
                              : school.rank === 2
                              ? "bg-gray-400 text-white"
                              : school.rank === 3
                              ? "bg-amber-600 text-white"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {school.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-primary text-sm truncate">
                            {school.schoolName}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {school.progress}% progress • {school.wasteAmount}
                            kg/day
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-md border-primary/20 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    Initiative Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Participating Schools
                    </span>
                    <span className="font-bold text-primary">
                      {journalEntries.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Total Waste Reduced
                    </span>
                    <span className="font-bold text-school-green">
                      127 kg/day
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Active Programs
                    </span>
                    <span className="font-bold text-primary">5</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDashboard;
