export default function Experience() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="tag rv">02 · Experience</div>
        <h2 className="h2 rv">Where I&apos;ve worked.</h2>
        <p className="sub rv">
          Shipping production frontends and full-stack features across SaaS, Web3, and research.
        </p>
        <div className="timeline">
          <div className="job rv">
            <div className="jwhen">
              <span className="jnum">01</span>Jun 2025 to Present
              <span className="place">Canberra, AU</span>
            </div>
            <div>
              <h3>Software Engineer (Frontend)</h3>
              <div className="co">Empreus IT Support</div>
              <ul>
                <li>
                  Built &amp; shipped a live <b>multi-tenant SaaS platform</b> for hardware leasing
                  with Next.js (App Router), TypeScript, Supabase &amp; Prisma, covering the quote
                  builder, contract management, asset register, automated invoicing, in production on
                  Vercel.
                </li>
                <li>
                  Rebuilt several client websites from WordPress onto Next.js &amp; Vercel with SSR
                  and tuned data fetching for faster loads and stronger SEO.
                </li>
                <li>
                  Converted a <b>25-page</b> corporate site to Next.js, wiring SendGrid contact
                  forms, structured SEO metadata, and JSON-LD schema.
                </li>
                <li>
                  Integrated REST APIs for live data and built a reusable component library that kept
                  the UI consistent across projects.
                </li>
              </ul>
            </div>
          </div>
          <div className="job rv">
            <div className="jwhen">
              <span className="jnum">02</span>May 2023 to Jun 2024
              <span className="place">Remote</span>
            </div>
            <div>
              <h3>Product Development Engineer</h3>
              <div className="co">BlockConvey</div>
              <ul>
                <li>
                  Redesigned the company website, lifting user engagement by around <b>50%</b> through
                  improved UI &amp; UX.
                </li>
                <li>
                  Built responsive interfaces and user flows for Web3 platform features, simplifying
                  navigation and interaction.
                </li>
                <li>
                  Integrated APIs across Azure and Google Cloud to support backend functionality and
                  scaling.
                </li>
              </ul>
            </div>
          </div>
          <div className="job rv">
            <div className="jwhen">
              <span className="jnum">03</span>May 2023 to Sep 2023
              <span className="place">Sydney, AU</span>
            </div>
            <div>
              <h3>Research &amp; Development Intern</h3>
              <div className="co">University of New South Wales</div>
              <ul>
                <li>
                  Built a full-stack <b>Human Mobility QA platform</b> with React, Node.js &amp;
                  MongoDB for querying and visualizing mobility data.
                </li>
                <li>
                  Designed responsive UI components, improving usability and app performance by around{" "}
                  <b>30%</b>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
