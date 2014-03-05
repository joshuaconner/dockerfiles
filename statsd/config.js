{
  debug: true,
  graphitePort: process.env.GRAPHITE_PORT_2003_TCP_PORT,
  graphiteHost: process.env.GRAPHITE_PORT_2003_TCP_ADDR,
  port: process.env.PORT || 8125,
  backends: ["./backends/graphite"]
}
