import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { categories, getCategory } from "@/config/widgets";
import { getWidgetsByNames } from "@/lib/utils";

import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import WidgetCard from "@/components/widget-card";
import WidgetLoader from "@/components/widget-loader-client";
import WidgetDetails from "@/components/widget-details";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const category = getCategory((await params).category);

  if (!category) return {};

  return {
    title: `${category.name} widgets ~ Wigggle UI`,
    description: `Ready to use ${category.name} widgets for your next web project.`,
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const category = getCategory((await params).category);

  if (!category) {
    notFound();
  }

  const smWidgets = getWidgetsByNames(
    category.widgets.sm.map((item) => item.name),
  );
  const mdWidgets = getWidgetsByNames(
    category.widgets.md?.map((item) => item.name) ?? [],
  );
  const lgWidgets = getWidgetsByNames(
    category.widgets.lg?.map((item) => item.name) ?? [],
  );

  const getDescription = () => {
    return `A collection of ${category.name} widgets from Wigggle UI.`;
  };

  return (
    <>
      <PageHeader title={category.name}>{getDescription()}</PageHeader>
      <PageGrid title="sm">
        {smWidgets.map((widget) => (
          <WidgetCard key={widget.name} widget={widget}>
            <WidgetLoader widget={widget} />
            <WidgetDetails widget={widget} />
          </WidgetCard>
        ))}
      </PageGrid>
      {category.widgets.md && category.widgets.md?.length > 1 && (
        <PageGrid title="md">
          {mdWidgets.map((widget) => (
            <WidgetCard key={widget.name} widget={widget}>
              <WidgetLoader widget={widget} />
              <WidgetDetails widget={widget} />
            </WidgetCard>
          ))}
        </PageGrid>
      )}
      {category.widgets.lg && category.widgets.lg?.length > 1 && (
        <PageGrid title="lg">
          {lgWidgets.map((widget) => (
            <WidgetCard key={widget.name} widget={widget}>
              <WidgetLoader widget={widget} />
              <WidgetDetails widget={widget} />
            </WidgetCard>
          ))}
        </PageGrid>
      )}
    </>
  );
}
