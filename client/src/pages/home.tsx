import { WeekCard } from "@/components/WeekCard";
import { getAvailableWeeks, getDaysForWeek } from "@shared/workoutData";
import { useLocation } from "wouter";
import { Dumbbell } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();
  const availableWeeks = getAvailableWeeks();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold" data-testid="text-home-title">
              Workout Tracker
            </h1>
          </div>
          <p className="text-muted-foreground" data-testid="text-home-subtitle">
            Full Body Beginner Program
          </p>
        </div>

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
