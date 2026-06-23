// Sparse placeholder landing for pyrite.rent. Intentionally minimal for now —
// just enough to explain the product and host the deep-link / app-association
// routes (/tools/:cardKeyHash, /tag/:uid). Flesh out later.

export default function Landing() {
  return (
    <main id="top">
      <section className="hero">
        <p className="eyebrow">// peer-to-peer tool rental</p>
        <h1>
          Pyrite Rent.<br />
          <span className="accent">rent tools from your neighbours.</span>
        </h1>
        <p className="lede">
          Borrow the gear you need for a weekend project, and lend out the tools
          gathering dust in your garage. Tap a tool's tag with the app to rent it
          and return it — no paperwork, no deposit desk.
        </p>
        <div className="hero-cta">
          <a href="toolrental://" className="btn btn-primary">open in the app →</a>
        </div>
        <div className="store-badges">
          <a href="#" className="store-badge" aria-disabled="true">Get it on Google Play</a>
          <a href="#" className="store-badge" aria-disabled="true">Download on the App Store</a>
        </div>
        <p className="section-footnote">More coming soon.</p>
      </section>
    </main>
  )
}
