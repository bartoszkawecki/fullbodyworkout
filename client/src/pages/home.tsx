import { WeekCard } from "@/components/WeekCard";
import { getAvailableWeeks, getDaysForWeek } from "@shared/workoutData";
import { useLocation } from "wouter";
import { Dumbbell, TrendingUp, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchCompletions } from "@/lib/storage";
import type { Completion } from "@shared/schema";

export default function Home() {
  const [, setLocation] = useLocation();
  const availableWeeks = getAvailableWeeks();

  useQuery<Completion[]>({
    queryKey: ['completions'],
    queryFn: fetchCompletions,
    staleTime: 30000,
    placeholderData: (previousData) => previousData,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-primary" data-testid="text-home-title">
              Workout Tracker
            </h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation("/settings")}
            className="gap-2"
            data-testid="button-settings"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <p className="text-muted-foreground" data-testid="text-home-subtitle">
          Full Body Beginner Program
        </p>

        <Card
          className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
          onClick={() => setLocation("/progress")}
          data-testid="button-progress"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Progress</h2>
          </div>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Select a Week</h2>
          <div className="grid gap-4">
            {availableWeeks.map((week) => (
              <WeekCard
                key={week}
                week={week}
                totalDays={getDaysForWeek(week).length}
                onClick={() => setLocation(`/week/${week}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
