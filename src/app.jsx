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
      <div className="backgroundGlow"></div>

      <main className="simple-container">
        <div className="coming">COMING SOON</div>

        <h1>
          Financial flexibility,
          <br />
          <span>Powered by your workplace.</span>
        </h1>

        <p>
          Employer-backed salary access to help teams reduce month-end crunch.
        </p>

        <a
          className="primary-btn"
          href={`mailto:support@mobpae.com?subject=${subject}&body=${body}`}
        >
          Get in Touch
        </a>

        <footer>© 2026 Mob Pae. All rights reserved.</footer>
      </main>
    </div>
  );
}
