import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Home from "@/pages/home";
import Week from "@/pages/week";
import Workout from "@/pages/workout";
import Progress from "@/pages/progress";
import ExerciseDetail from "@/pages/exercise-detail";
import Login from "@/pages/login";
import Register from "@/pages/register";
import NotFound from "@/pages/not-found";

function ProtectedRoute({ component: Component, ...rest }: { component: () => JSX.Element; path?: string }) {
  const { user, loading } = useAuth();
  const [location] = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Component />;
}

function AuthRoute({ component: Component }: { component: () => JSX.Element; path?: string }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={() => <AuthRoute component={Login} />} />
      <Route path="/register" component={() => <AuthRoute component={Register} />} />
      <Route path="/" component={() => <ProtectedRoute component={Home} />} />
      <Route path="/progress" component={() => <ProtectedRoute component={Progress} />} />
      <Route path="/progress/:exerciseName" component={() => <ProtectedRoute component={ExerciseDetail} />} />
      <Route path="/week/:week" component={() => <ProtectedRoute component={Week} />} />
      <Route path="/week/:week/day/:day" component={() => <ProtectedRoute component={Workout} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
