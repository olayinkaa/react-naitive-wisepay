import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const limitsData = [
  {
    id: "1",
    label: "Daily send limit",
    value: "$150 / $5,000 USD",
    percentage: "33%",
  },
  {
    id: "2",
    label: "Monthly send limit",
    value: "$3,200 / $50,000 USD",
    percentage: "16.4%",
  },
  {
    id: "3",
    label: "Annual send limit",
    value: "$25,000 / $500,000 USD",
    percentage: "5%",
  },
];

export default function AccountLimit() {
  return (
    <View style={styles.limitCard}>
      <Text style={styles.limitCardTitle}>Account Limits</Text>
      <View style={styles.limitRowContainer}>
        {limitsData.map((item) => {
          return (
            <View key={item.id} style={styles.limitRow}>
              <View style={styles.limitRowHeader}>
                <Text style={styles.limitRowLabel}>{item.label}</Text>
                <Text style={styles.limitRowValue}>{item.value}</Text>
              </View>
              <View style={styles.limitProgressTrack}>
                <View
                  style={[
                    styles.limitProgressFill,
                    { width: item.percentage as any },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.limitRequestBtn}>
        <Text style={styles.limitRequestBtnLabel}>Request Limit Increase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  limitCard: {
    borderWidth: 1,
    borderColor: "#0000001A",
    marginTop: 20,
    padding: 10,
    borderRadius: 14,
  },
  limitCardTitle: {
    fontSize: 16,
    fontWeight: "medium",
    lineHeight: 24,
    letterSpacing: -0.31,
  },
  limitRowContainer: {
    gap: 10,
    paddingBottom: 20,
  },
  limitRow: {},
  limitRowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  limitRowLabel: {
    color: "#0A0A0A",
    fontSize: 14,
    fontWeight: "medium",
  },
  limitRowValue: {
    color: "#717182",
  },
  limitProgressTrack: {
    width: "100%",
    height: 8,
    backgroundColor: "#ECECF0",
    borderRadius: 999,
    marginTop: 3,
  },
  limitProgressFill: {
    height: 8,
    backgroundColor: "#030213",
    borderRadius: 999,
  },
  limitRequestBtn: {
    borderWidth: 1,
    borderColor: "#0000001A",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  limitRequestBtnLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "medium",
  },
});
