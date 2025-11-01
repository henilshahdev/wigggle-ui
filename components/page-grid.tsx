export default function PageGrid({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="border-border relative z-10 my-6 space-y-8 overflow-hidden rounded-4xl border-2 p-6">
      <h2 className="text-2xl font-semibold text-balance lg:text-3xl">
        {title}
      </h2>
      <div className="-m-px grid grid-cols-12 gap-6 *:px-1 *:py-12 sm:*:px-8 xl:*:px-12">
        {children}
      </div>
    </div>
  );
}
