import { WeekCard } from "@/components/WeekCard";
import { getAvailableWeeks, getDaysForWeek } from "@shared/workoutData";
import { useLocation } from "wouter";
import { Dumbbell, TrendingUp, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchCompletions } from "@/lib/storage";
import type { Completion } from "@shared/schema";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [, setLocation] = useLocation();
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const availableWeeks = getAvailableWeeks();

  useQuery<Completion[]>({
    queryKey: ["/api/completions"],
    queryFn: fetchCompletions,
    staleTime: 30000,
    placeholderData: (previousData) => previousData,
  });

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
    setLocation("/login");
  };

  const username = user?.user_metadata?.username || user?.email?.split('@')[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Dumbbell className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold text-primary" data-testid="text-home-title">
                  Workout Tracker
                </h1>
                {username && (
                  <p className="text-sm text-muted-foreground">Welcome, {username}</p>
                )}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
          <p className="text-muted-foreground" data-testid="text-home-subtitle">
            Full Body Beginner Program
          </p>
        </div>

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
