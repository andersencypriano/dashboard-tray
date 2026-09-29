"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { periodOptions, salesDataByPeriod } from "@/data/dashboard";

import { MetricCards } from "@/components/dashboard/MetricCards";

import { SalesChart } from "@/components/dashboard/SalesChart";

export default function Home() {
  const [period, setPeriod] = useState("30d");
  const salesData = salesDataByPeriod[period as keyof typeof salesDataByPeriod];

  return (
    <main className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

          <p className="text-muted-foreground">
            Visão geral da operação da Foto Paulo.
          </p>
        </div>

        <Select
          value={period}
          onValueChange={(value) => {
            if (value) {
              setPeriod(value);
            }
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione o período" />
          </SelectTrigger>

          <SelectContent>
            {periodOptions.map((period) => (
              <SelectItem key={period.value} value={period.value}>
                {period.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <MetricCards />

      <SalesChart data={salesData} />
    </main>
  );
}
