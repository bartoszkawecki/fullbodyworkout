import { DayCard } from "@/components/DayCard";
import { getDaysForWeek } from "@shared/workoutData";
import { useLocation, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Week() {
  const [, params] = useRoute("/week/:week");
  const [, setLocation] = useLocation();
  const week = parseInt(params?.week || "1");
  const days = getDaysForWeek(week);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold" data-testid="text-week-title">
            Week {week}
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Select a Day</h2>
          <div className="grid gap-4">
            {days.map((day) => (
              <DayCard
                key={day}
                week={week}
                day={day}
                onClick={() => setLocation(`/week/${week}/day/${day}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
