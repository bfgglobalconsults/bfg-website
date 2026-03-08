import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Image
        src="/bfg-logo.png"
        alt="BFG Consults"
        width={150}
        height={50}
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
};
