import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeader}>
        <Ionicons
          name="shield-outline"
          size={15}
          style={styles.sectionHeaderIcon}
        />
        <Text style={styles.sectionHeaderTitle}>security</Text>
      </View>
      <View style={styles.sectionContent}>
        {SecurityData.map((item) => {
          return (
            <Link key={item.label} href={item.href} asChild>
              <TouchableOpacity style={styles.sectionItem}>
                <View style={styles.sectionItemHeader}>
                  <Text style={styles.sectionHeaderTitle}>{item.label}</Text>
                  <Text style={styles.sectionItemHeaderDesc}>{item.label}</Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  style={styles.sectionItemHeaderIcon}
                  size={20}
                />
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionCard: {
    borderWidth: 1,
    borderColor: "#0000001A",
    marginTop: 20,
    padding: 10,
    borderRadius: 14,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  sectionHeaderIcon: {},
  sectionHeaderTitle: {
    color: "#0A0A0A",
    fontSize: 16,
    fontFamily: "Inter-Medium",
    fontWeight: "medium",
    lineHeight: 24,
    letterSpacing: -0.31,
  },
  sectionContent: {
    paddingVertical: 10,
    gap: 15,
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionItemHeader: {},
  sectionItemHeaderDesc: {
    color: "#717182",
    fontSize: 14,
    lineHeight: 20,
  },
  sectionItemHeaderIcon: {},
});
