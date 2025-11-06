import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Week from "@/pages/week";
import Workout from "@/pages/workout";
import Progress from "@/pages/progress";
import ExerciseDetail from "@/pages/exercise-detail";
import Login from "@/pages/login";

async function fetchUser() {
  const response = await fetch("/api/auth/user");
  if (!response.ok) {
    throw new Error("Not authenticated");
  }
  return response.json();
}

function Router() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">💪</div>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/week/:weekNum" component={Week} />
      <Route path="/workout/:weekNum/:dayNum" component={Workout} />
      <Route path="/progress" component={Progress} />
      <Route path="/exercise/:exerciseName" component={ExerciseDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;