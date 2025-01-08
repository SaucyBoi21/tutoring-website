import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="route" href="/">
          home
        </Link>
        <Link className="route" href="/about">
          about
        </Link>
        <Link className="route" href="/rates">
          rates
        </Link>
        <Link className="route" href="/testimonials">
          testimonials
        </Link>
      </div>
    </>
  );
}
