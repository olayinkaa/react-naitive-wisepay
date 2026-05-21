import ProfileCard from "@/components/shared/profile-card";
import { Href } from "expo-router";
import React from "react";

interface SecurityItem {
  label: string;
  description: string;
  href: Href; // Enforces strictly valid app router links
}

const SecurityData: SecurityItem[] = [
  {
    label: "Two-factor authentication",
    description: "Add an extra layer of security",
    href: "/(tabs)/balances",
  },
  {
    label: "Trusted devices",
    description: "Manage your devices",
    href: "/(tabs)/balances",
  },
  {
    label: "Login history",
    description: "View recent activity",
    href: "/(tabs)/cards",
  },
];

export default function Security() {
  return (
    <ProfileCard
      data={SecurityData}
      headerTitle="Security"
      headerIcon="shield-outline"
    />
  );
}
