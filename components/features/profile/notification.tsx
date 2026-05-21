import NotificationCard from "@/components/shared/notification-card";

const notificationSettings = [
  {
    id: "push",
    label: "Push notifications",
    description: "Get notified about transactions",
    initialValue: true,
  },
  {
    id: "email",
    label: "Email notifications",
    description: "Receive email updates",
    initialValue: true,
  },
  {
    id: "sms",
    label: "SMS notifications",
    description: "Text message alerts",
    initialValue: false,
  },
  {
    id: "marketing",
    label: "Marketing emails",
    description: "Product updates and offers",
    initialValue: false,
  },
];

export default function Notifications() {
  return (
    <NotificationCard
      headerTitle="Notifications"
      headerIcon="notifications-outline"
      data={notificationSettings}
    />
  );
}
