"use client";

import { useRef, useEffect } from "react";

export default function MarkerUnderline() {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);

  useEffect(() => {
    [path1Ref, path2Ref].forEach((ref) => {
      const path = ref.current;
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
  }, []);

  return (
    <svg
      className="absolute -bottom-1 left-0 w-full h-[24px]"
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={path1Ref}
        d="M 2 14 Q 100 10, 200 8 Q 300 6, 398 3"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
        className="marker-line marker-line-1"
      />
      <path
        ref={path2Ref}
        d="M 50 22 Q 150 17, 250 14 Q 320 11, 380 9"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        className="marker-line marker-line-2"
      />
    </svg>
  );
}
