"use client";

import { useEffect, useState } from "react";

export function WaitlistCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/waitlist-count?t=${Date.now()}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setCount(typeof data.count === "number" ? data.count : null))
      .catch(() => setCount(null));
  }, []);

  return (
    <span className="text-navy-800">
      · 현재 대기 {count !== null ? `${count}명` : "—명"}
    </span>
  );
}
