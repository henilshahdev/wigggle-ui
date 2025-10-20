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

  // Get widgets to check count
  const widgets = getWidgetsByNames(category.widgets.map((item) => item.name));

  const isSingleWidget = widgets.length === 1;

  return {
    title: isSingleWidget
      ? `${category.name} widget ~ Wigggle UI`
      : `${category.name} widgets ~ Wigggle UI`,
    description: isSingleWidget
      ? `Ready to use ${category.name} widget for your next web project.`
      : `Ready to use ${category.name} widgets for your next web project.`,
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

  const widgets = getWidgetsByNames(category.widgets.map((item) => item.name));

  const getDescription = () => {
    return widgets.length === 1
      ? `A ${category.name} widget from Wigggle UI.`
      : `A collection of ${category.name} widgets from Wigggle UI.`;
  };

  return (
    <>
      <PageHeader title={category.name}>{getDescription()}</PageHeader>
      <PageGrid>
        {widgets.map((widget) => (
          <WidgetCard key={widget.name} widget={widget}>
            <WidgetLoader widget={widget} />
            <WidgetDetails widget={widget} />
          </WidgetCard>
        ))}
      </PageGrid>
    </>
  );
}
