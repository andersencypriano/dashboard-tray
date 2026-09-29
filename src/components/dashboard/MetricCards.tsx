import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MetricCards({
  metrics,
}: {
  metrics: {
    title: string;
    value: string;
    variation: string;
    description: string;
  }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>

            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-emerald-600">
                {metric.variation}
              </span>{" "}
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
