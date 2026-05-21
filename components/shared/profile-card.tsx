import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ms, s } from "react-native-size-matters";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

interface IProfileCard {
  data: {
    label: string;
    description: string;
    href: Href;
  }[];
  headerTitle: string;
  headerIcon: IoniconsName;
}

export default function ProfileCard({
  data,
  headerTitle,
  headerIcon,
}: IProfileCard) {
  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeader}>
        <Ionicons
          name={headerIcon}
          size={ms(15)}
          style={styles.sectionHeaderIcon}
        />
        <Text style={styles.sectionHeaderTitle}>{headerTitle}</Text>
      </View>
      <View style={styles.sectionContent}>
        {data.map((item) => (
          <Link key={item.label} href={item.href} asChild>
            <TouchableOpacity style={styles.sectionItem}>
              <View style={styles.sectionItemHeader}>
                {/* FIX: Changed style from sectionHeaderTitle to sectionItemTitle */}
                <Text style={styles.sectionItemTitle}>{item.label}</Text>
                {/* FIX: Changed item.label to item.description */}
                <Text style={styles.sectionItemHeaderDesc}>
                  {item.description}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                style={styles.sectionItemHeaderIcon}
                size={ms(20)}
              />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionCard: {
    borderWidth: 1,
    borderColor: "#0000001A",
    marginTop: s(20),
    padding: s(20),
    borderRadius: ms(14),
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(4),
  },
  sectionHeaderIcon: {},
  sectionHeaderTitle: {
    color: "#0A0A0A",
    fontSize: ms(16),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    lineHeight: ms(24),
    letterSpacing: -0.31,
  },
  sectionContent: {
    paddingVertical: s(10),
    gap: s(15),
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionItemHeader: {},
  // ADDED: Dedicated style for item labels to prevent giant text layout bugs
  sectionItemTitle: {
    color: "#0A0A0A",
    fontSize: ms(14),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    lineHeight: ms(20),
  },
  sectionItemHeaderDesc: {
    color: "#717182",
    fontSize: ms(12),
    lineHeight: ms(16),
  },
  sectionItemHeaderIcon: {
    color: "#717182",
  },
});
