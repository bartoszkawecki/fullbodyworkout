import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompletions, toggleDayCompletion } from "@/lib/storage";
import type { Completion } from "@shared/schema";

interface DayCardProps {
  week: number;
  day: number;
  onClick: () => void;
}

export function DayCard({ week, day, onClick }: DayCardProps) {
  const { data: completions = [] } = useQuery<Completion[]>({
    queryKey: ["/api/completions"],
    queryFn: fetchCompletions,
    staleTime: 30000,
    placeholderData: (previousData) => previousData,
  });

  const completed = completions.some(c => c.week === week && c.day === day);

  const handleToggleCompletion = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await toggleDayCompletion(week, day);
      console.log(`Toggled completion for Week ${week}, Day ${day}`);
    } catch (error) {
      console.error("Failed to toggle completion:", error);
    }
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
