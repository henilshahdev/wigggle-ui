"use client";

import React from "react";
import { CheckCircle2Icon, CircleIcon, ListIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import { cn } from "@/registry/default/lib/utils";

type TodoType = {
  id: number;
  task: string;
  time: string;
  completed: boolean;
};

const initialTodos = [
  {
    id: 1,
    task: "Daily Scrum Meeting",
    time: "9:00 AM to 9:30 AM",
    completed: true,
  },
  {
    id: 2,
    task: "Review mockup designs",
    time: "9:00 AM to 9:30 AM",
    completed: true,
  },
  {
    id: 3,
    task: "Client report prep",
    time: "9:00 AM to 9:30 AM",
    completed: false,
  },
];

export default function WidgetDemo() {
  const [todos, setTodos] = React.useState<TodoType[]>(initialTodos);
  const tasksDone = todos.filter((todo) => todo.completed).length;

  const handleToggle = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  return (
    <Widget size="md">
      <WidgetContent className="flex items-center justify-center gap-4">
        <div className="flex h-full w-max flex-col items-start justify-between gap-3">
          <WidgetHeader className="w-full">
            <WidgetTitle>
              <ListIcon />
            </WidgetTitle>
          </WidgetHeader>
          <div className="flex flex-col">
            <Label className="text-5xl tracking-wide">{tasksDone}/3</Label>
            <Label className="text-muted-foreground text-lg font-normal">
              tasks done
            </Label>
          </div>
        </div>
        <div className="flex size-full flex-col items-center justify-start">
          {todos.map((todo) => (
            <button
              className="w-full"
              onClick={() => handleToggle(todo.id)}
              key={todo.id}
            >
              <div className="hover:bg-muted group flex size-full items-start justify-start gap-2 rounded-md px-2 py-1.5 text-sm hover:cursor-pointer">
                {todo.completed ? (
                  <CheckCircle2Icon className="text-productive size-4" />
                ) : (
                  <CircleIcon className="text-muted-foreground size-4" />
                )}
                <div className="space-y-2">
                  <Label
                    className={cn(
                      "text-muted-foreground group-hover:cursor-pointer",
                      todo.completed && "text-muted-foreground/70 line-through",
                    )}
                  >
                    {todo.task}
                  </Label>
                  <Label className="text-muted-foreground text-xs font-normal">
                    {todo.time}
                  </Label>
                </div>
              </div>
            </button>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}
