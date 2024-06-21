import React from "react";
import "./styles.css";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>

      <hr className="divider" />

      <div className="content">{children}</div>
    </div>
  );
};
