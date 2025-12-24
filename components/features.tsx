"use client"

export default function Features() {
  const features = [
    {
      icon: "◈",
      title: "Real-Time Monitoring",
      description: "Continuous satellite surveillance with sub-millisecond response times.",
    },
    {
      icon: "⬡",
      title: "Threat Detection",
      description: "AI-powered anomaly detection across multiple spectral bands.",
    },
    {
      icon: "▲",
      title: "Autonomous Response",
      description: "Automated countermeasure deployment with human oversight.",
    },
    {
      icon: "⬢",
      title: "Global Coverage",
      description: "Integrated constellation architecture covering 99.97% uptime.",
    },
    {
      icon: "◆",
      title: "Signal Intelligence",
      description: "Advanced SIGINT and COMINT collection and analysis.",
    },
    {
      icon: "⬠",
      title: "Quantum Encryption",
      description: "Military-grade quantum-resistant cryptographic protocols.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent text-sm font-mono tracking-widest">CORE CAPABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-bold">Advanced Defense Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge satellite systems designed for maximum security and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-accent/50 transition bg-background/50 hover:bg-card/50"
            >
              <div className="text-3xl mb-3 text-accent group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
