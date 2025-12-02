import { Card } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Settings() {
  const [, setLocation] = useLocation();

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
          <h1 className="text-2xl font-bold" data-testid="text-settings-title">
            Settings
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Data Management</h2>

          <Card
            className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
            onClick={() => {
              // Placeholder for import/export functionality
              console.log("Import/Export clicked");
            }}
            data-testid="button-import-export"
          >
            <div className="flex items-center gap-3">
              <Download className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Import / Export</h3>
                <p className="text-sm text-muted-foreground">
                  Backup or restore your workout data
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
