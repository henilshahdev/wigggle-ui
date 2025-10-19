import { cn } from "@/lib/utils";
import Link from "next/link";

type HeaderLinkProps = {
  text: string;
  href: string;
  external?: boolean;
  className?: string;
  isNew?: boolean;
};

export default function HeaderLink({
  text,
  href,
  external,
  className,
  isNew,
}: HeaderLinkProps) {
  return (
    <div className="flex items-start gap-1.5">
      {external ? (
        <a
          className={cn("inline-flex gap-0.5 text-sm hover:underline")}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <>
          <Link
            href={href}
            className={cn("inline-flex gap-0.5 text-sm hover:underline")}
          >
            {text}
          </Link>
          {isNew && (
            <span className="text-muted-foreground/80 text-xs text-[10px] font-medium uppercase">
              New
            </span>
          )}{" "}
        </>
      )}
    </div>
  );
}
