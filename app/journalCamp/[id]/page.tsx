
"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@radix-ui/themes';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { School, Calendar, BookOpen, ArrowLeft, Check, Target, AlertCircle, ArrowRight } from 'lucide-react';
import { WasteReport } from '@/app/components/journal-dashboard';
import axios from 'axios';

const JournalDetail = () => {
  const { id } = useParams();
  const [journalEntries,setJournalEntries] = useState<Array<WasteReport>>()

  // Mock data - in real app this would come from your database based on the ID

 useEffect(() => {
  const getJournalEntries = async () => {
    try {
      const response = await axios.get("https://foodproj-backend-4y4z.onrender.com/api/journal/getJournals", {
        headers: {
          "Cache-Control": "no-cache",
        }
      });
      setJournalEntries(response?.data?.data);
    } catch (error) {
      console.error("An Error occurred:", error || error);
    }
  };
  getJournalEntries();
}, []);

const idString = Array.isArray(id) ? id[0] : id ?? '1';
const entry = (journalEntries ?? []).find(e => e.id === parseInt(idString, 10));

if (!journalEntries?.length) {
    return <div className='flex items-center justify-center text-bold text-[24px] text-black'>No Journal Entries Present at the Moment</div>
  }
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
                <h1 className="text-4xl font-bold text-primary">{entry?.schoolName}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Journal Entry - {entry?.date ? new Date(entry.date).toLocaleDateString() : "Date not available"}
                  </span>
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
                  <div className="text-3xl font-bold text-primary">{entry?.wasteAmount} kg/day</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Reduction Goal</div>
                  <div className="text-3xl font-bold text-school-green">{entry?.wasteReduction}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Progress</div>
                  <div className="text-3xl font-bold text-primary">{entry?.progress}%</div>
                </div>
              </div>
              <div className="mt-6">
                <Progress value={entry?.progress} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Milestones */}
          {(entry?.milestones?.length ?? 0) > 0 && (
            <Card className="shadow-md border-primary/20 animate-scale-in mb-6">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Check className="h-6 w-6" />
                  Milestones Achieved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {entry?.milestones.map((milestone, index) => (
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
                  {entry?.actions}
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
                  {entry?.challenges}
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
                  {entry?.nextSteps}
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
