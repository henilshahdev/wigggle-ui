import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { CircularProgress } from "@/registry/default/ui/circular-progress";
import { Separator } from "@/registry/default/ui/separator";

const taskChartInfo = [
  {
    task: "Focus",
    percentage: 62,
    color: "stroke-vercel-yellow",
  },
  {
    task: "Meetings",
    percentage: 22,
    color: "stroke-vercel-purple",
  },
  {
    task: "Breaks",
    percentage: 10,
    color: "stroke-vercel-teal",
  },
  {
    task: "Others",
    percentage: 6,
    color: "stroke-vercel-pink",
  },
];

export default function WidgetDemo() {
  return (
    <Widget size="md">
      <WidgetContent className="flex flex-col items-center justify-center gap-2">
        <div className="grid w-full grid-cols-3 items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-muted-foreground text-sm font-normal">Time</p>
            <p className="text-2xl">6h</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-muted-foreground text-sm font-normal">Tasks</p>
            <p className="text-2xl">55</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-muted-foreground text-sm font-normal">
              Work day
            </p>
            <p className="text-2xl">79%</p>
          </div>
        </div>
        <Separator />
        <div className="mt-1 grid w-full grid-cols-4 items-center gap-6 px-4">
          {taskChartInfo.map((el, i) => (
            <CircularProgress
              key={i}
              percentageComplete={el.percentage}
              taskType={el.task}
              ringColor={el.color}
            />
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}
