export default function HandDrawnBadge({ children, color = "#22c55e" }) {
  return (
    <span className="relative inline-flex items-center justify-center px-4 py-1">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 130 46"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={[
            "M 65 5",
            "C 42 2, 18 3, 8 12",
            "C -2 21, -3 32, 8 38",
            "C 22 44, 52 45, 68 44",
            "C 90 43, 114 37, 123 28",
            "C 131 20, 129 11, 118 7",
            "C 106 3, 82 2, 65 5",
            "C 44 3, 16 5, 7 14",
            "C -1 23, 1 34, 9 39",
            "C 20 46, 50 47, 72 45",
            "C 96 43, 118 35, 126 26",
            "C 132 18, 131 8, 119 5",
            "C 106 1, 78 1, 60 3",
            "C 40 5, 20 9, 11 17",
            "C 2 25, 3 35, 12 40",
            "C 24 46, 52 44, 68 43",
            "C 90 42, 112 36, 121 27",
            "C 129 19, 127 10, 116 6",
            "C 103 3, 78 3, 65 5",
          ].join(" ")}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        className="relative font-secondary text-[12px] font-medium"
        style={{ color }}
      >
        {children}
      </span>
    </span>
  );
}
