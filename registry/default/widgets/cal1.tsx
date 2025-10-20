import { Widget, WidgetContent } from "@/components/ui/widget";
import { Badge } from "@/components/ui/badge";

export default function Calendar01() {
  const today = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Widget>
      <WidgetContent className="flex flex-col gap-2">
        <p className="text-muted-foreground">{dayNames[today.getDay()]}</p>
        <h2 className="text-5xl font-bold">{today.getDate()}</h2>
        <p className="text-muted-foreground">{monthNames[today.getMonth()]}</p>
        <Badge variant="outline">{today.getFullYear()}</Badge>
      </WidgetContent>
    </Widget>
  );
}
