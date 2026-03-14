"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "text-sm px-1 py-1 transition-all duration-300 cursor-pointer border-b-2",
            activeTab === tab
              ? "text-foreground border-accent font-medium"
              : "text-muted border-transparent hover:text-foreground hover:border-foreground/20"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
