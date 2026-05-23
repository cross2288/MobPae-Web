import React from "react";

export default function App() {
  const subject = encodeURIComponent("Mob Pae Enquiry");
  const body = encodeURIComponent(`Hi Mob Pae Team,

I am interested in learning more about Mob Pae for my company.

Company Name:
Number of Employees:
City:
Message:

Thank you.`);

  return (
    <div className="page">
      <nav className="nav">
        <div className="brand">
          <div className="brand-icon">▣</div>
          <span>MobPae</span>
        </div>
      </nav>

      <main className="hero">
        <section className="hero-content">
          <div className="status-pill">COMING SOON</div>

          <h1>
            Helping You Beat the
            <span> Month-End Crunch</span>
          </h1>

          <p>
            Employer-backed salary access designed to give teams financial
            flexibility before payday.
          </p>

          <a
            className="primary-btn"
            href={`mailto:support@mobpae.com?subject=${subject}&body=${body}`}
          >
            Get in Touch
            <span>→</span>
          </a>
        </section>

        <section className="preview-area">
          <div className="mini-card salary-card">
            <div className="mini-label">AVAILABLE NOW</div>
            <div className="mini-amount">₹15,000</div>
            <div className="mini-sub">of ₹50,000 monthly salary</div>
            <div className="progress">
              <div />
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <div className="card-label">THIS MONTH</div>
                <h3>Salary Access Preview</h3>
              </div>
              <span className="growth">+34%</span>
            </div>

            <div className="chart">
              <span style={{ height: "34%" }} />
              <span style={{ height: "46%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "72%" }} />
              <span style={{ height: "88%" }} />
            </div>

            <div className="card-footer">
              <div>
                <small>Requests</small>
                <strong>Fast</strong>
              </div>
              <div>
                <small>Model</small>
                <strong>Employer-backed</strong>
              </div>
            </div>
          </div>

          <div className="approval-card">
            <div className="check">✓</div>
            <div>
              <strong>Request Approved</strong>
              <p>₹8,500 salary access</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>© 2026 MobPae. All rights reserved.</div>

        <div className="footer-love">
          Made with <span>♥</span> by MobPae Team.
        </div>
      </footer>
    </div>
  );
}
