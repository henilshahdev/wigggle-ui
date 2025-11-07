import Link from "next/link";
import { MoveDownIcon, MoveUpIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table";

const visitors = [
  {
    day: "Today",
    count: 54,
    hasGrown: true,
  },
  {
    day: "7 days",
    count: 374,
    hasGrown: false,
  },
  {
    day: "30 days",
    count: 1498,
    hasGrown: true,
  },
  {
    day: "90 days",
    count: 1498,
    hasGrown: true,
  },
];

export default function WidgetDemo() {
  return (
    <Widget className="gap-3" design="mumbai">
      <WidgetHeader>
        <Link className="mx-auto" href="#">
          <WidgetTitle className="w-full text-blue-500 underline-offset-2 hover:underline">
            website.com
          </WidgetTitle>
        </Link>
      </WidgetHeader>
      <WidgetContent>
        <Table className="w-full">
          <TableBody>
            {visitors.map((visitor) => (
              <TableRow key={visitor.day}>
                <TableCell className="py-1.5 font-medium">
                  {visitor.day}
                </TableCell>
                <TableCell className="flex items-center justify-end gap-1.5 py-1.5 text-right">
                  {visitor.count}
                  {visitor.hasGrown ? (
                    <MoveUpIcon
                      className="stroke-productive size-4"
                      strokeWidth={3}
                    />
                  ) : (
                    <MoveDownIcon
                      className="stroke-destructive size-4"
                      strokeWidth={3}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </WidgetContent>
    </Widget>
  );
}
