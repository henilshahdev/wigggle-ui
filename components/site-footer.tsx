import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 flex justify-center gap-2 p-6 max-sm:flex-col max-sm:text-center">
      <span className="text-muted-foreground text-sm">
        Built by{" "}
        <a
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground font-medium transition-colors duration-300"
        >
          Henil Shah
        </a>{" "}
        . The source code is available on{" "}
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground font-medium transition-colors duration-300"
        >
          GitHub
        </a>
        .
      </span>
    </footer>
  );
}
