import { useState, type ReactNode, type FormEvent } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CORRECT_PASSWORD = "Burgerek2137";
const AUTH_KEY = "workout_tracker_auth";

interface PasswordProtectionProps {
  children: ReactNode;
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(AUTH_KEY) === "true";
  });
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      toast({
        title: "Welcome!",
        description: "Access granted",
      });
    } else {
      toast({
        title: "Incorrect password",
        description: "Please try again",
        variant: "destructive",
      });
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">💪</CardTitle>
          <CardTitle>Workout Tracker</CardTitle>
          <CardDescription>Enter password to access</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="input-password"
              autoFocus
            />
            <Button 
              type="submit" 
              className="w-full"
              data-testid="button-submit-password"
            >
              Enter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
