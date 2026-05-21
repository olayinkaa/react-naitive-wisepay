import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { ms, s } from "react-native-size-matters";

// 1. Extract the specific "name" string literals type constraint from the Ionicons component
type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

interface INotificationItem {
  id: string;
  label: string;
  description: string;
  initialValue: boolean;
}

interface INotificationCard {
  headerTitle: string;
  headerIcon: IoniconsName;
  data: INotificationItem[];
}

export default function NotificationCard({
  headerTitle,
  headerIcon,
  data,
}: INotificationCard) {
  // 2. Track toggle states for all items dynamically using their unique id keys
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>(
    () =>
      data.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.initialValue }),
        {},
      ),
  );

  //   console.log(toggleStates, data)

  const handleToggle = (id: string, value: boolean) => {
    setToggleStates((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <View style={styles.sectionCard}>
      {/* Card Header Section */}
      <View style={styles.sectionHeader}>
        <Ionicons
          name={headerIcon}
          size={ms(20)} // Match your typography scales
          color="#0A0A0A"
        />
        <Text style={styles.sectionHeaderTitle}>{headerTitle}</Text>
      </View>
      {/* Interactive Toggle List Section */}
      <View style={styles.sectionContent}>
        {data.map((item) => {
          return (
            <View key={item.id} style={styles.sectionItem}>
              <View style={styles.sectionItemHeader}>
                <Text style={styles.sectionItemTitle}>{item.label}</Text>
                <Text style={styles.sectionItemHeaderDesc}>
                  {item.description}
                </Text>
              </View>

              {/* 3. Replaced navigation chevrons with high-fidelity native toggle switches */}
              <Switch
                value={toggleStates[item.id]}
                onValueChange={(newValue) => handleToggle(item.id, newValue)}
                trackColor={{ false: "#E4E4E7", true: "#0A0A0A" }} // Dark active styling matching image
                thumbColor="#FFFFFF"
                ios_backgroundColor="#E4E4E7"
                style={styles.compactSwitch}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: ms(1),
    borderColor: "#0000001A",
    marginTop: s(20),
    padding: s(20), // Expanded padding match image canvas specs
    borderRadius: ms(16),
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(8),
    marginBottom: s(12),
  },
  sectionHeaderTitle: {
    color: "#0A0A0A",
    fontSize: ms(16),
    fontFamily: "medium",
    fontWeight: "600",
    lineHeight: ms(28),
  },
  sectionContent: {
    gap: s(15), // Visual row gaps matching design spacing
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionItemHeader: {
    flex: 1,
    paddingRight: s(16),
  },
  sectionItemTitle: {
    color: "#0A0A0A",
    fontSize: ms(14),
    fontWeight: "500",
    lineHeight: ms(20),
    marginBottom: s(4),
  },
  sectionItemHeaderDesc: {
    color: "#717182",
    fontSize: ms(12),
    fontFamily: "regular",
    lineHeight: ms(22),
  },
  compactSwitch: {
    transform: Platform.select({
      ios: [{ scaleX: ms(0.75) }, { scaleY: ms(0.75) }], // iOS scales down cleanly at 0.75
      android: [{ scaleX: ms(0.85) }, { scaleY: ms(0.85) }], // Android looks best slightly larger at 0.85
    }),
    // Optional: If scaling creates small empty margins around the outer hit target box
    marginRight: Platform.OS === "ios" ? ms(-4) : 0,
  },
});
