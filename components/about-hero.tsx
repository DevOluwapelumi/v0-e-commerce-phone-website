export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Connecting You to the Future of Mobile Technology
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              At PhoneHub, we're passionate about bringing you the latest smartphones with cutting-edge technology,
              premium design, and exceptional value.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Phone Models</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-left">
            <img
              src="/about-hero-smartphone-technology.jpg"
              alt="Modern smartphone technology"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
