export const formatTime = (timestamp) => {
  if (!timestamp) return "";

  const now = Date.now();
  const diffInSeconds = Math.floor((now - timestamp) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) {
    const mins = Math.floor(diffInSeconds / 60);
    return `${mins} min${mins > 1 ? "s" : ""} ago`;
  }
  if (diffInSeconds < 86400) {
    const hrs = Math.floor(diffInSeconds / 3600);
    return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
  }
  const days = Math.floor(diffInSeconds / 86400);
  return `${days} day${days > 1 ? "s" : ""} ago`;
};
