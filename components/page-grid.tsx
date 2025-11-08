export default function PageGrid({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="md:border-border relative z-10 my-6 space-y-8 overflow-hidden rounded-4xl p-3 sm:border-2">
      <h2 className="bg-secondary mx-auto max-w-xs rounded-full px-0 py-2 text-2xl font-semibold text-balance sm:w-full sm:max-w-full sm:bg-transparent sm:px-6 sm:py-4 lg:text-3xl">
        {title}
      </h2>
      <div className="-m-px grid grid-cols-12 gap-6 *:px-1 *:py-12 sm:*:px-8 xl:*:px-12">
        {children}
      </div>
    </div>
  );
}
