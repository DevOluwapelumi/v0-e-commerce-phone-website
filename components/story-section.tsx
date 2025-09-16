export function StorySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                PhoneHub was born from a simple idea: everyone deserves access to the latest mobile technology without
                the complexity and confusion that often comes with it.
              </p>
              <p className="text-pretty">
                Founded in 2014 by a team of former tech industry professionals, we started as a small online retailer
                with a big vision. We wanted to create a place where customers could discover, compare, and purchase
                smartphones with confidence.
              </p>
              <p className="text-pretty">
                Today, we're proud to be one of the leading smartphone retailers, serving customers worldwide with an
                extensive selection of devices from all major brands. Our commitment to quality, customer service, and
                innovation remains as strong as ever.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/company-story-smartphone-evolution.jpg"
              alt="Evolution of smartphones"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
