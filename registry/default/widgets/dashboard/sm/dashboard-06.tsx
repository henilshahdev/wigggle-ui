import {
  Widget,
  WidgetContent,
  WidgetFooter,
} from "@/registry/default/ui/widget";
import { Textarea } from "@/registry/default/ui/textarea";
import { Button } from "@/registry/default/ui/button";

export default function WidgetDemo() {
  return (
    <Widget className="gap-3" design="mumbai">
      <WidgetContent className="w-full flex-col items-start justify-start gap-2">
        <Textarea
          className="h-full max-h-28"
          placeholder="Type your message here."
        />
      </WidgetContent>
      <WidgetFooter>
        <Button className="w-full" size="sm">
          Send Feedback
        </Button>
      </WidgetFooter>
    </Widget>
  );
}
