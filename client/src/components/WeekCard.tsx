import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getCompletedDaysForWeek } from "@/lib/storage";
import { getBlockForWeek } from "@shared/workoutData";

interface WeekCardProps {
  week: number;
  totalDays: number;
  onClick: () => void;
}

export function WeekCard({ week, totalDays, onClick }: WeekCardProps) {
  const [completedDays, setCompletedDays] = useState(getCompletedDaysForWeek(week));
  const isFullyCompleted = completedDays === totalDays;
  const blockName = getBlockForWeek(week);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedDays(getCompletedDaysForWeek(week));
    }, 500);
    return () => clearInterval(interval);
  }, [week]);

  return (
    <Card
      className="relative p-6 hover-elevate active-elevate-2 cursor-pointer border"
      onClick={onClick}
      data-testid={`card-week-${week}`}
    >
      {isFullyCompleted && (
        <div className="absolute top-3 right-3">
          <CheckCircle2 className="h-6 w-6 text-primary" data-testid={`icon-week-${week}-completed`} />
        </div>
      )}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold" data-testid={`text-week-${week}-title`}>
          Week {week} - {blockName}
        </h3>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" data-testid={`badge-week-${week}-progress`}>
            {completedDays}/{totalDays} days
          </Badge>
        </div>
        {completedDays > 0 && completedDays < totalDays && (
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className="bg-primary h-1.5 rounded-full transition-all"
              style={{ width: `${(completedDays / totalDays) * 100}%` }}
            />
          </div>
        )}
      </div>
    </Card>
  );
}
