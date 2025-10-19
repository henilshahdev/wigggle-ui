import Link from "next/link";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";

export default function NotFound() {
  return (
    <>
      <PageHeader title="404" className="mb-6">
        Oops! How did you land here?
      </PageHeader>
      <div className="text-center">
        <Button asChild size="sm">
          <Link href="/">Take me back</Link>
        </Button>
      </div>
    </>
  );
}
