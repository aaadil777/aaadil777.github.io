---
layout: default
title: "Aadil Ali"
---

<section class="hero">
  <img src="{{ '/assets/profile.jpg' | relative_url }}" class="avatar" alt="Aadil">
  <h1>Hi! My name is Aadil.</h1>
  <p class="sublede" data-typer data-text="I build scalable ops through digital transformation, AI integration, and strategy. Scroll to learn more."></p>

  <div class="cta-row" style="margin-top:18px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
    <a class="btn-cta" href="{{ site.linkedin }}" target="_blank" rel="noopener">Connect on LinkedIn</a>
    <a class="btn-ghost" href="{{ site.resume_url }}" target="_blank" rel="noopener">Download Resume</a>
  </div>
</section>

<section id="about" class="reveal">
  <h2 class="h-section">About</h2>
  <p>
    I’m a product-driven technologist at the intersection of data, supply chain, and AI. I turn complex operations into
    scalable, measurable systems—spanning SAP/Workday implementations, API reliability, and cloud analytics. Recognized for
    shipping outcomes (cost savings, higher forecast accuracy, shorter cycle times) by aligning business strategy with
    technical execution.
  </p>
</section>

<section id="timeline" class="reveal">
  <h2 class="h-section">Experience</h2>
  <div class="timeline">
    {% for item in site.data.experience %}
    <div class="node">
      <div class="title">{{ item.company }} — {{ item.role }}</div>
      <div class="meta">{{ item.dates }} · {{ item.location }}</div>

      <ul class="typed-bullets">
        {% for b in item.bullets %}
          {%- assign parts = b | split: ':' -%}
          {%- assign label = parts[0] -%}
          {%- assign rest = parts | slice: 1, 99 | join: ':' -%}
          <li class="bullet">
            <span class="bullet-label" data-type="{{ label | strip }}">{{ label | strip }}:</span>
            <span class="bullet-rest">{{ rest | strip }}</span>
          </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<!-- Project Spotlight right after Experience -->
<section id="b2b-ai-suite" class="reveal">
  <h2 class="h-section">Project Spotlight — B2B AI Suite (Streamlit)</h2>

  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-bottom:16px;">
    <iframe
      src="https://www.youtube-nocookie.com/embed/d2lkvZj_UXg"
      title="B2B AI Suite — Live Demo"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>

  <div class="chips" style="gap:8px;margin-bottom:10px;">
    <a class="chip" href="https://aadil-ali-b2b-ai-suite.streamlit.app" target="_blank" rel="noopener">🚀 Launch Live App</a>
    <a class="chip" href="https://github.com/aaadil777/b2b_ai_streamlit_suite" target="_blank" rel="noopener">🐙 GitHub Repo</a>
  </div>

  <div class="card" style="margin-top:8px;">
    <h3>Why it matters</h3>
    <ul>
      <li><strong>Purpose:</strong> Fast, self-serve analytics for supplier health, demand baselines, and inventory <em>what-ifs</em>.</li>
      <li><strong>Passion:</strong> Turning messy ops data into clear, actionable decisions.</li>
      <li><strong>Business Need:</strong> Score OTD/PPM/cost/risk, build an explainable baseline, and quantify lead-time/service/MOQ trade-offs.</li>
    </ul>
  </div>

  <div class="card" style="margin-top:12px;">
    <h3>What’s inside</h3>
    <ul>
      <li><strong>Supplier Scorecard:</strong> KPI-weighted ranking with Bubble & Pareto visuals.</li>
      <li><strong>Demand Forecast:</strong> Moving-average baseline + weekday/weekly profiles, CSV export.</li>
      <li><strong>What-If Inventory:</strong> Dual-axis chart, inventory position, backlog distribution, fill-rate KPI.</li>
    </ul>
    <p><strong>Tech:</strong> Streamlit · Python · Pandas · NumPy · Matplotlib · Plotly</p>
  </div>
</section>

<section id="portfolio" class="reveal">
  <h2 class="h-section">Projects & Certifications</h2>
  <div class="proj-grid">
    {% for p in site.data.projects %}
      <a class="proj-card" href="{{ p.url }}" target="_blank" rel="noopener" data-img="{{ p.image | relative_url }}">
        <span class="proj-icon" aria-hidden="true">{{ p.emoji }}</span>
        <div class="proj-meta">
          <div class="proj-title">{{ p.title }}</div>
          <p class="proj-desc">{{ p.desc }}</p>
        </div>
      </a>
    {% endfor %}
  </div>
  <div class="hover-preview" aria-hidden="true"><img alt=""></div>
</section>

<section id="tech" class="reveal">
  <h2 class="h-section">Technical Expertise & Certifications</h2>
  <div class="tech-grid">
    <div class="tech-card">
      <h3>Analytics & Data</h3>
      <div class="pill-wrap">
        <span class="pill">Python</span><span class="pill">R</span><span class="pill">SQL</span>
        <span class="pill">Power BI</span><span class="pill">Tableau</span><span class="pill">Excel (Pivot/VBA)</span>
        <span class="pill">Streamlit</span><span class="pill">ArcGIS</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Platforms & Cloud</h3>
      <div class="pill-wrap">
        <span class="pill">SAP (S/4HANA, IBP, FICO)</span><span class="pill">Workday HCM</span>
        <span class="pill">Salesforce</span><span class="pill">Snowflake</span>
        <span class="pill">AWS CloudWatch</span><span class="pill">GitHub</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Reliability & DevOps</h3>
      <div class="pill-wrap">
        <span class="pill">Datadog</span><span class="pill">SonarQube</span><span class="pill">Kong Gateway</span>
        <span class="pill">Docker</span><span class="pill">Kubernetes</span><span class="pill">Terraform</span>
        <span class="pill">CI/CD</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Web & Product</h3>
      <div class="pill-wrap">
        <span class="pill">Ruby</span><span class="pill">JavaScript</span><span class="pill">React.js</span>
        <span class="pill">HTML/CSS</span><span class="pill">Jekyll</span><span class="pill">Productboard</span>
        <span class="pill">Mural</span><span class="pill">Cursor</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Certifications & Methods</h3>
      <div class="pill-wrap">
        <span class="pill">PSPO I</span><span class="pill">PSM I</span><span class="pill">Lean Six Sigma</span>
        <span class="pill">YSU: Molecular Biology & Biotechnology</span>
      </div>
    </div>
  </div>
</section>

<section id="gallery" class="reveal">
  <h2 class="h-section">Presentation moments</h2>
  <div class="gallery">
    <img src="{{ '/assets/present-cat.jpg' | relative_url }}" alt="Caterpillar presentation">
    <img src="{{ '/assets/present-gilead.jpg' | relative_url }}" alt="Gilead CFO presentation day">
    <img src="{{ '/assets/present-8451.jpg' | relative_url }}" alt="84.51° office showcase">
  </div>
</section>

<section id="contact" class="reveal">
  <h2 class="h-section">Get in touch</h2>
  <div class="chips">
    <a class="chip" href="mailto:{{ site.email }}" aria-label="Email">✉️ Email</a>
    <a class="chip" href="{{ site.linkedin }}" target="_blank" rel="noopener" aria-label="LinkedIn">🔗 LinkedIn</a>
    <a class="chip" href="{{ site.github }}" target="_blank" rel="noopener" aria-label="GitHub">🐙 GitHub</a>
    <a class="chip" href="{{ site.calendar }}" target="_blank" rel="noopener" aria-label="Book time">📅 Book time</a>
    <a class="chip" href="{{ site.resume_url }}" target="_blank" rel="noopener" aria-label="Resume PDF">📄 Resume</a>
  </div>
</section>

<style>
.typed-bullets .bullet { position: relative; margin: .5rem 0; line-height: 1.5; }
.bullet-label { font-weight: 700; border-right: 2px solid var(--accent, #7dd3fc); white-space: nowrap; overflow: hidden; display: inline-block; }
.bullet-rest { opacity: 0; transition: opacity .35s ease-in .05s; margin-left: .25rem; }
@keyframes caret { 0%,100% { border-color: transparent } 50% { border-color: var(--accent, #7dd3fc) } }
.bullet-label.typing { animation: caret 1s steps(1) infinite; }

.tech-grid { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.tech-card { background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.06); border-radius: 12px; padding: 16px; }
.tech-card h3 { margin: 0 0 8px 0; font-size: 1rem; letter-spacing: .2px; }
.pill-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
.pill { padding: 6px 10px; border-radius: 999px; background: rgba(125,211,252,.12); border: 1px solid rgba(125,211,252,.25); font-size: .88rem; }
#portfolio { margin-top: 18px; }
</style>

<script>
(function () {
  const SPEED = 18;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const bullet = entry.target;
      const labelEl = bullet.querySelector('.bullet-label');
      const restEl  = bullet.querySelector('.bullet-rest');
      const full = (labelEl.dataset.type || labelEl.textContent).replace(/:$/, '');
      labelEl.textContent = '';
      labelEl.classList.add('typing');
      let i = 0;
      const tick = () => {
        if (i <= full.length) {
          labelEl.textContent = full.slice(0, i) + ':';
          i++; setTimeout(tick, SPEED);
        } else {
          labelEl.classList.remove('typing');
          restEl.style.opacity = 1;
          observer.unobserve(bullet);
        }
      };
      tick();
    });
  }, { threshold: 0.35 });
  document.querySelectorAll('.typed-bullets .bullet').forEach(b => observer.observe(b));
})();
</script>
