process = require
{
  graphitePort: process.env.GRAPHITE_PORT || 2003,
  graphiteHost: process.env.GRAPHITE_HOST || "graphite",
  port: process.env.PORT || 8125,
  backends: ["./backends/graphite"]
}
