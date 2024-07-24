import { Slot } from "expo-router";
import { SessionProvider } from "./ctx";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}