import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Palette, Check, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useTheme, allThemes } from "@/lib/theme";
import { useFont, allFonts } from "@/lib/fonts";

export default function Settings() {
  const [, setLocation] = useLocation();
  const { themeId, setTheme } = useTheme();
  const { fontId, setFont } = useFont();

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

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {/* Theme Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Theme</h2>
          </div>

          <div className="grid gap-4">
            {allThemes.map((theme) => {
              const isActive = themeId === theme.id;

              return (
                <Card
                  key={theme.id}
                  className={`p-6 hover-elevate active-elevate-2 cursor-pointer transition-all border-2 ${
                    isActive ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setTheme(theme.id)}
                  data-testid={`button-theme-${theme.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Theme preview colors */}
                      <div className="flex gap-1">
                        <div
                          className="w-8 h-8 rounded-md border"
                          style={{
                            background: `hsl(${theme.cssVars.primary})`,
                          }}
                        />
                        <div
                          className="w-8 h-8 rounded-md border"
                          style={{
                            background: `hsl(${theme.cssVars.background})`,
                          }}
                        />
                        {theme.id === 'push' && (
                          <div
                            className="w-8 h-8 rounded-md border"
                            style={{
                              background: `hsl(${theme.cssVars.accent})`,
                            }}
                          />
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">{theme.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {theme.description}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Font Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Type className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Font</h2>
          </div>

          <div className="grid gap-3">
            {allFonts.map((font) => {
              const isActive = fontId === font.id;

              return (
                <Card
                  key={font.id}
                  className={`p-5 hover-elevate active-elevate-2 cursor-pointer transition-all border-2 ${
                    isActive ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setFont(font.id)}
                  data-testid={`button-font-${font.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Font preview */}
                      <div
                        className="text-2xl font-semibold"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        Aa
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-lg font-semibold"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          {font.name}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {font.description}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Data Management Section */}
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
