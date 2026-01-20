"use client";

import TimeAgo from "react-timeago";

export default function ClientTimeAgo({ date }: { date: Date }) {
  return <TimeAgo date={date} />;
}
