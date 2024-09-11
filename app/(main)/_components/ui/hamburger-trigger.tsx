"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";

export default function HamburgerTrigger() {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={setOpen} />;
}
