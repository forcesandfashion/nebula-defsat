"use client"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-8 bg-card/50 border-t border-border">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Secure Your Assets?</h2>
          <p className="text-lg text-muted-foreground">
            Deploy NebulaDefSat's sentinel network and gain unstoppable defense capabilities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          {/* <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
            Schedule Demo
          </button>
          <button className="border border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent/10 transition">
            Documentation
          </button> */}
        </div>
      </div>
    </section>
  )
}
