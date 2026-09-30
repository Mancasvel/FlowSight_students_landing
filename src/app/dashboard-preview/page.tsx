import type { Metadata } from "next";
import OrganizationDashboard, { exampleDashboardData } from "@/components/organization-dashboard";

export const metadata: Metadata = {
  title: "Organization overview concept — FlowSight Students",
  description: "Illustrative preview of the aggregate organization overview.",
  robots: { index: false, follow: false },
};

export default function OrganizationDashboardPreview() {
  return <OrganizationDashboard data={exampleDashboardData} preview />;
}
