import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

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
    marginTop: ms(20),
    padding: s(20),
    borderRadius: ms(14),
  },
  limitCardTitle: {
    fontSize: ms(16),
    fontWeight: "500",
    lineHeight: ms(24),
    letterSpacing: -0.31,
  },
  limitRowContainer: {
    gap: s(10),
    paddingBottom: s(20),
  },
  limitRow: {},
  limitRowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: s(15),
  },
  limitRowLabel: {
    color: "#0A0A0A",
    fontSize: ms(14),
    fontWeight: "500",
  },
  limitRowValue: {
    color: "#717182",
    fontSize: ms(14),
  },
  limitProgressTrack: {
    width: "100%",
    height: vs(8),
    backgroundColor: "#ECECF0",
    borderRadius: ms(999),
    marginTop: s(3),
  },
  limitProgressFill: {
    height: vs(8),
    backgroundColor: "#030213",
    borderRadius: ms(999),
  },
  limitRequestBtn: {
    borderWidth: ms(1),
    borderColor: "#0000001A",
    borderRadius: ms(8),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: ms(10),
  },
  limitRequestBtnLabel: {
    fontSize: ms(14),
    lineHeight: ms(20),
    fontWeight: "500",
  },
});
