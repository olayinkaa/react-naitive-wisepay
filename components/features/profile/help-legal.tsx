import ProfileCard from "@/components/shared/profile-card";
import { Href } from "expo-router";
import React from "react";

interface Item {
  label: string;
  description: string;
  href: Href; // Enforces strictly valid app router links
}

const data: Item[] = [
  {
    label: "Help center",
    description: "Get support and find answers",
    href: "/(tabs)/balances",
  },
  {
    label: "Contact us",
    description: "Chat or call our support team",
    href: "/(tabs)/balances",
  },
  {
    label: "Terms & conditions",
    description: "Legal agreements",
    href: "/(tabs)/cards",
  },
  {
    label: "Privacy policy",
    description: "How we handle your data",
    href: "/(tabs)/cards",
  },
];

export default function HelpAndLegal() {
  return (
    <ProfileCard
      data={data}
      headerTitle="Help & Legal"
      headerIcon="help-buoy-outline"
    />
  );
}
