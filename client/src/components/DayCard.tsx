import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import { isDayCompleted, toggleDayCompletion } from "@/lib/storage";

interface DayCardProps {
  week: number;
  day: number;
  onClick: () => void;
}

export function DayCard({ week, day, onClick }: DayCardProps) {
  const [completed, setCompleted] = useState(isDayCompleted(week, day));

  const handleToggleCompletion = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDayCompletion(week, day);
    setCompleted(!completed);
    console.log(`Toggled completion for Week ${week}, Day ${day}`);
  };

  return (
    <Card
      className="relative p-6 hover-elevate active-elevate-2 cursor-pointer border"
      onClick={onClick}
      data-testid={`card-day-${day}`}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold" data-testid={`text-day-${day}-title`}>
            Day {day}
          </h3>
          {completed && (
            <p className="text-sm text-muted-foreground">Completed</p>
          )}
        </div>
        <button
          onClick={handleToggleCompletion}
          className="hover-elevate active-elevate-2 rounded-full p-1 -m-1"
          data-testid={`button-toggle-day-${day}`}
        >
          {completed ? (
            <CheckCircle2 className="h-8 w-8 text-primary" data-testid={`status-day-${day}`} />
          ) : (
            <Circle className="h-8 w-8 text-muted-foreground" data-testid={`status-day-${day}`} />
          )}
        </button>
      </div>
    </Card>
  );
}
