import React from "react";
import { Navbar } from "@/components/ui/landing/navbar";

const layout = ({ children }: any) => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {children}
    </main>
  );
};

export default layout;
