import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PasswordProtection } from "@/components/PasswordProtection";
import { ThemeProvider } from "@/lib/theme";
import Home from "@/pages/home";
import Week from "@/pages/week";
import Workout from "@/pages/workout";
import Progress from "@/pages/progress";
import ExerciseDetail from "@/pages/exercise-detail";
import Settings from "@/pages/settings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/progress" component={Progress} />
      <Route path="/progress/:exerciseName" component={ExerciseDetail} />
      <Route path="/week/:week" component={Week} />
      <Route path="/week/:week/day/:day" component={Workout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <PasswordProtection>
            <Router />
          </PasswordProtection>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
