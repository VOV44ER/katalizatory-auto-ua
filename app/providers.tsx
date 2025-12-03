"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/hooks/use-language";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={ queryClient }>
            <TooltipProvider>
                <LanguageProvider>
                    <Toaster />
                    <Sonner />
                    { children }
                </LanguageProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
}


