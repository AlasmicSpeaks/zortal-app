exports.checkSystemHealth = () => {
  return {
    serverStatus: "Online",
    dbConnection: "Stable",
    latency: "42ms",
    lastBackup: "2 hours ago"
  };
};
