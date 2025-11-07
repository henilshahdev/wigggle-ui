import { categories } from "@/config/widgets";

import CategoryCard from "@/components/category-card";

export default function Home() {
  return (
    <div className="relative" data-home>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
          Widgets
        </h2>
        <p className="text-muted-foreground text-lg">
          Widgets are divided based on categories. Take your pick!
        </p>
      </div>

      <div className="relative my-16">
        <div className="mx-auto grid w-max gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => {
            const totalWidgets =
              category.widgets.sm.length +
              (category.widgets.md?.length ?? 0) +
              (category.widgets.lg?.length ?? 0);
            return (
              <CategoryCard
                key={category.slug}
                slug={category.slug}
                name={category.name}
                widgetCount={totalWidgets}
                isNew={category.isNew}
                icon={category.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
