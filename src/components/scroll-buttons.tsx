"use client";

import ButtonTop from "./button-top";
import ButtonBottom from "./button-bottom";
import { ScrollButtonsProvider } from "@/utils/scroll-buttons/context";

export default function ScrollButtons() {
  return (
    <ScrollButtonsProvider>
      <ButtonTop />
      <ButtonBottom />
    </ScrollButtonsProvider>
  );
}
