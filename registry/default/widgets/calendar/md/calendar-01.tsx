import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import { Badge } from "@/registry/default/ui/badge";

export default function WidgetDemo() {
  const now = new Date();

  const dayName = now.toLocaleDateString("en-US", { weekday: "short" });
  const monthName = now.toLocaleDateString("en-US", { month: "short" });
  const date = now.getDate();
  const paddedDate = date.toString().padStart(2, "0");

  const year = now.getFullYear();
  const month = now.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarDays = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <Widget size="md">
      <WidgetContent className="items-center justify-between gap-4">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center gap-2">
            <Label className="text-destructive text-2xl">{dayName}</Label>
            <Label className="text-2xl">{monthName}</Label>
          </div>
          <Label className="text-8xl">{paddedDate}</Label>
        </div>

        <div className="grid size-full grid-cols-7 gap-1 text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-xs">
              {d}
            </div>
          ))}

          {calendarDays.map((d, i) => (
            <div key={i} className="text-muted-foreground text-xs">
              {d === date ? (
                <Badge className="flex size-4 items-center justify-center p-2">
                  {d}
                </Badge>
              ) : (
                (d ?? <>&nbsp;</>)
              )}
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}
