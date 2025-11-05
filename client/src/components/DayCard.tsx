import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import { isDayCompleted } from "@/lib/storage";

interface DayCardProps {
  week: number;
  day: number;
  onClick: () => void;
}

export function DayCard({ week, day, onClick }: DayCardProps) {
  const completed = isDayCompleted(week, day);

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
        <div data-testid={`status-day-${day}`}>
          {completed ? (
            <CheckCircle2 className="h-8 w-8 text-primary" />
          ) : (
            <Circle className="h-8 w-8 text-muted-foreground" />
          )}
        </div>
      </div>
    </Card>
  );
}
