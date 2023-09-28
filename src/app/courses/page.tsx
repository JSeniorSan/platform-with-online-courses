import "../../../styles/main.scss";
import React from "react";
import Link from "next/link";
function Courses() {
  return (
    <div>
      Hi
      <Link href="/">back</Link>
      <Link href="/courses/photoshop">Photoshop</Link>
    </div>
  );
}

export default Courses;
