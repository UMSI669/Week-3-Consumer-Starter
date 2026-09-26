import { usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Tab } from "week-3-inclass";
import HeartRateIcon from "../../assets/heart-rate.svg";
import HydrationIcon from "../../assets/hydration.svg";
import SleepIcon from "../../assets/sleep.svg";

const items = [
  {
    label: "Heart Rate",
    href: "/heart-rate",
    icon: HeartRateIcon,
  },
  {
    label: "Sleep",
    href: "/sleep",
    icon: SleepIcon,
  },
  {
    label: "Hydration",
    href: "/hydration",
    icon: HydrationIcon,
  },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.navigation}>
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        const foregroundColor = active ? "#FFFFFF" : "#2B2B2B";

        return (
          <Tab
            key={item.href}
            onPress={() => router.replace(item.href)}
            variant={active ? "primary" : "secondary"}
            style={styles.item}
          >
            <View style={styles.tabContent}>
              <Icon color={foregroundColor} height={22} width={22} />
              <Text style={[styles.label, { color: foregroundColor }]}>
                {item.label}
              </Text>
            </View>
          </Tab>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    alignItems: "center",
    borderTopColor: "#C3C3C3",
    borderTopWidth: 2,
    flexDirection: "row",
    height: 88,
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  item: {
    height: 56,
    width: 88,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
});
