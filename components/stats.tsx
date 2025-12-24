"use client"

export default function Stats() {
  const stats = [
    { number: "47", label: "Satellites Deployed" },
    { number: "160ms", label: "Response Time" },
    { number: "99.97%", label: "System Uptime" },
    { number: "184+", label: "Nations Protected" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</p>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
