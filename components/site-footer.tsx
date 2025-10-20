export default function SiteFooter() {
  return (
    <footer className="flex justify-between gap-2 p-6 max-sm:flex-col max-sm:text-center">
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Wigggle UI
      </p>
    </footer>
  );
}
