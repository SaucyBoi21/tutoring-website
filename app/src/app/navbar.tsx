import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="route" href="/">
          home
        </Link>
        <Link className="route" href="../pages/about">
          about
        </Link>
        <Link className="route" href="../pages/rates">
          rates
        </Link>
        <Link className="route" href="../pages/testimonials">
          testimonials
        </Link>
      </div>
    </>
  );
}
