import React from "react";
import Rate from "./rate";

export default function Rates() {
  return (
    <>
      <h1>Rates</h1>
      <Rate className="K-8 Math" classRate="$45 per hour" />
      <Rate className="High School Math" classRate="$55 per hour" />
      <Rate className="SAT" classRate="$65 per hour" />
    </>
  );
}
