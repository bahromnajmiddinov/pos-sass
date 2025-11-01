import React, { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  positive?: boolean;
  iconBg?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  positive = true,
  iconBg = "from-blue-500/20 to-blue-600/20",
}: StatCardProps) {
  return (
    <div className="stat-card group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          {trend && (
            <p
              className={clsx(
                "text-sm font-semibold mt-2",
                positive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend}
            </p>
          )}
        </div>
        <div className={clsx(
          "h-12 w-12 rounded-xl flex items-center justify-center",
          `bg-gradient-to-br ${iconBg}`,
          "group-hover:scale-110 transition-transform"
        )}>
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}
