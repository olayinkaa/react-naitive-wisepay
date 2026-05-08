// import { Redirect } from "expo-router";

// export default function Index() {
//   return <Redirect href="/(auth)/sign-in" />;
// }

import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // This runs after the mount is complete
    router.replace("/(auth)/sign-in");
  }, [router]);

  return null;
}
