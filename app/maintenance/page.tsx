"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "./CountdownTimer";
import { MeshBackground } from "./MeshBackground";

export default function MaintenancePage() {
  // Set the target date for when maintenance will be complete
  const targetDate = new Date("2025-10-28T15:26:33");
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden">
      <MeshBackground />
      <div className="relative z-10 flex w-full flex-col items-center justify-center p-4 text-center">
        <div className="mx-auto w-full max-w-md space-y-6 rounded-2xl bg-background/80 p-6 backdrop-blur-sm sm:p-8 md:max-w-lg md:p-10">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-5">🚧 Under Maintenance</h1>
            <p className="text-muted-foreground space-y-5">
              We're currently performing scheduled maintenance. We'll be back online shortly.
              Thank you for your patience.
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="flex justify-center pt-4">
            <Button asChild>
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
