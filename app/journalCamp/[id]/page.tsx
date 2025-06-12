
"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@radix-ui/themes';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { School, Calendar, BookOpen, ArrowLeft, Check, Target, AlertCircle, ArrowRight } from 'lucide-react';

const JournalDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from your database based on the ID
  const journalEntries = [
    {
      id: 1,
      schoolName: "ABC Elementary School",
      date: "2024-06-05",
      wasteReduction: "25",
      wasteAmount: "15",
      progress: 75,
      actions: "Today we implemented our new composting program in the cafeteria. We set up three composting bins near the lunch disposal area and trained our lunch staff on proper sorting techniques. Students were given a brief presentation during lunch about which items go in which bins. We also started our 'Clean Plate Club' where students who finish their entire lunch get a small sticker. The response was overwhelmingly positive, with many students excited to participate. We reduced our lunch waste by approximately 3kg today compared to yesterday.",
      challenges: "The main challenge we faced was getting all students to remember the new sorting system. Some younger students (grades K-2) struggled with identifying which items should go in the compost bin versus regular trash. We also had some issues with the placement of the bins - they were initially too close to the exit and created a bottleneck during lunch dismissal. Our custodial staff expressed some concerns about the additional workload of managing the compost bins.",
      nextSteps: "Tomorrow we plan to move the composting bins to a better location that won't create traffic issues. We're also going to create simple visual guides with pictures to help younger students understand the sorting system. We'll assign 5th grade 'Green Ambassadors' to help monitor and assist younger students during lunch. Next week, we want to start measuring our compost output and begin using it in our school garden project.",
      milestones: ["Started composting program", "Reduced lunch waste by 20%", "Trained all lunch staff", "Created Green Ambassadors program"]
    },
    {
      id: 2,
      schoolName: "Green Valley High",
      date: "2024-06-03",
      wasteReduction: "50",
      wasteAmount: "8",
      progress: 60,
      actions: "Our student-led environmental club organized a comprehensive food waste audit during all three lunch periods. We weighed and categorized all discarded food for data collection. The results showed that 40% of our waste comes from untouched fruit and vegetables, 30% from partially eaten main courses, and 30% from opened but unconsumed packaged items like milk and crackers. Based on these findings, we launched our 'Share Table' initiative where students can place unopened, untouched items for other students to take. We also started a survey to understand why students aren't eating certain foods.",
      challenges: "Getting accurate data was difficult because some students were self-conscious about being observed during the audit. We also discovered that our current lunch schedule doesn't give students enough time to eat, leading to rushed meals and more waste. The Share Table concept needed approval from our food service director due to health regulations, which took longer than expected. Some teachers were concerned about students taking items from the Share Table without proper supervision.",
      nextSteps: "We're working with administration to extend lunch periods by 5 minutes. The environmental club will present our findings to the school board next week with recommendations for menu adjustments. We want to partner with our health class to educate students about nutrition and the importance of eating the foods provided. We're also exploring options for donating unopened, non-perishable items to local food banks.",
      milestones: ["Completed comprehensive food waste audit", "Implemented Share Table program", "Student environmental club leadership", "Identified key waste sources"]
    }
  ];
const idString = Array.isArray(id) ? id[0] : id ?? '1';
  const entry = journalEntries.find(e => e.id === parseInt(idString)) || journalEntries[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-school-green-light to-white school-pattern">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <Link href="/journalCamp">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary rounded-full">
                <School className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-primary">{entry.schoolName}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Journal Entry - {new Date(entry.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <Card className="shadow-lg border-2 border-primary/20 animate-scale-in mb-6">
            <CardHeader className="school-gradient text-primary-foreground">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Current Waste</div>
                  <div className="text-3xl font-bold text-primary">{entry.wasteAmount} kg/day</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Reduction Goal</div>
                  <div className="text-3xl font-bold text-school-green">{entry.wasteReduction}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Progress</div>
                  <div className="text-3xl font-bold text-primary">{entry.progress}%</div>
                </div>
              </div>
              <div className="mt-6">
                <Progress value={entry.progress} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Milestones */}
          {entry.milestones.length > 0 && (
            <Card className="shadow-md border-primary/20 animate-scale-in mb-6">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Check className="h-6 w-6" />
                  Milestones Achieved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {entry.milestones.map((milestone, index) => (
                    <Badge key={index} variant="secondary" className="bg-school-green/10 text-school-green">
                      <Check className="h-3 w-3 mr-1" />
                      {milestone}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Journal Sections */}
          <div className="space-y-6">
            {/* Actions Taken */}
            <Card className="shadow-md border-primary/20 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Actions Taken Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {entry.actions}
                </p>
              </CardContent>
            </Card>

            {/* Challenges Faced */}
            <Card className="shadow-md border-primary/20 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  Obstacles & Challenges Faced
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {entry.challenges}
                </p>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-md border-primary/20 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <ArrowRight className="h-6 w-6" />
                  Next Steps & Future Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {entry.nextSteps}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
