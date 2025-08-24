---
layout: default
title: "Aadil Ali"
---

<section class="hero">
  <img src="{{ '/assets/profile.jpg' | relative_url }}" class="avatar" alt="Aadil">
  <h1>Hi! My name is Aadil.</h1>
  <p class="sublede" data-typer data-text="I build scalable ops through digital transformation, AI integration, and strategy. Scroll to learn more."></p>

  <div class="cta-row" style="margin-top:18px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
    <a class="btn-cta" href="mailto:{{ site.email }}" target="_blank" rel="noopener">✉️ Email Me</a>
    <a class="btn-cta" href="{{ site.calendar }}" target="_blank" rel="noopener">📅 Book a Meeting</a>
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
  <h2 class="h-section">💡 Project Spotlight — B2B AI Suite</h2>

  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-bottom:16px;">
    <iframe
      src="https://www.youtube-nocookie.com/embed/d2lkvZj_UXg"
      title="B2B AI Suite — Live Demo"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>

  <p style="margin:14px 0 18px; display:flex; gap:10px; flex-wrap:wrap;">
    <a class="btn-cta" href="https://aadil-ali-b2b-ai-suite.streamlit.app/" target="_blank" rel="noopener">🚀 Launch Live App</a>
    <a class="btn-ghost" href="https://github.com/aaadil777/b2b-ai-streamlit-suite" target="_blank" rel="noopener">🤖 GitHub Repo</a>
  </p>

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

<!-- FEATURED: Nurse-Next AI (Streamlit) -->
<section id="nursenext" class="reveal">
  <h2 class="h-section">💡 Project Spotlight — Nurse Next AI</h2>
  <div class="gallery">
    <img src="{{ '/assets/proj-nurse-next-ai.jpg' | relative_url }}">
  </div>

  <p style="margin:14px 0 18px; display:flex; gap:10px; flex-wrap:wrap;">
    <a class="btn-cta" href="https://nurse-next-ai-assistant.streamlit.app/" target="_blank" rel="noopener">🚀 Launch Live App</a>
    <a class="btn-ghost" href="https://github.com/aaadil777/Nurse-Next-AI" target="_blank" rel="noopener">🤖 GitHub Repo</a>
  </p>

  <!-- small summary card to match project style -->
  <div class="card" style="margin-top:8px;">
    <h3 style="margin:0 0 6px;">Nurse Next AI</h3>
    <p style="margin:0;">Streamlit micro-assistant to speed triage, lookups, and routine workflows.</p>
  </div>

  <div>
    <h3 class="card" style="margin-top:12px;">Why it matters</h3>
    <ul>
      <li><strong>Purpose:</strong> Self-serve AI assistant for triage, info lookups, and routine workflows.</li>
      <li><strong>Passion:</strong> Deliver actionable, effective guidance for complex health-related inquries.</li>
      <li><strong>Business Need:</strong> Reduces context-switching; scalable for internal B2B use for education and practical ops for health applications.</li>
    </ul>
  </div>

  <div>
    <h3 class="card">What’s inside</h3>
    <ul>
      <li><strong>Guardrailed chat flows</strong> with modular prompts.</li>
      <li><strong>Session state</strong>, file I/O, exportable outputs.</li>
      <li><strong>Ready to integrate</strong> with monitoring & CI/CD pipelines.</li>
    </ul>
    <p><strong>Tech:</strong> Streamlit · Python · Groq · OpenAI · FastAPI</p>
  </div>
  
</section>

<!-- Projects & Certifications -->
<section id="portfolio" class="reveal">
  <h2 class="h-section">Projects & Certifications</h2>

  <div class="proj-grid">
    {% for p in site.data.projects %}
      <!-- Card itself = primary click-through -->
      <a class="proj-card"
         href="{{ p.url }}"
         target="_blank"
         rel="noopener"
         data-img="{{ p.image | relative_url }}">
        <span class="proj-icon" aria-hidden="true">{{ p.emoji }}</span>
        <div class="proj-meta">
          <div class="proj-title">{{ p.title }}</div>
          <p class="proj-desc">{{ p.desc }}</p>
        </div>
      </a>
    {% endfor %}
  </div>
</section>

<!-- Education -->
<section id="education" class="reveal">
  <h2 class="h-section">Education</h2>
  <div class="timeline">
    {% for edu in site.data.education %}
    <div class="node">
      <div class="title">{{ edu.school }} — {{ edu.degree }}</div>
      <div class="meta">{{ edu.dates }} · {{ edu.location }}</div>
      {% if edu.notes %}
      <ul>
        {% for n in edu.notes %}
          <li>{{ n }}</li>
        {% endfor %}
      </ul>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<section id="tech" class="reveal">
  <h2 class="h-section">Technical Expertise & Certifications</h2>
  <div class="tech-grid">

    <div class="tech-card">
      <h3>Platforms & Cloud</h3>
      <div class="pill-wrap">
        <span class="pill">SAP (S/4HANA, IBP, FICO)</span>
        <span class="pill">Workday HCM</span>
        <span class="pill">Salesforce</span>
        <span class="pill">Snowflake</span>
        <span class="pill">AWS CloudWatch</span>
        <span class="pill">GitHub</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Reliability & DevOps</h3>
      <div class="pill-wrap">
        <span class="pill">Datadog</span>
        <span class="pill">SonarQube</span>
        <span class="pill">Kong Gateway</span>
        <span class="pill">Docker</span>
        <span class="pill">Kubernetes</span>
        <span class="pill">Terraform</span>
        <span class="pill">CI/CD</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Web & Product</h3>
      <div class="pill-wrap">
        <span class="pill">Ruby</span>
        <span class="pill">JavaScript</span>
        <span class="pill">React.js</span>
        <span class="pill">HTML/CSS</span>
        <span class="pill">Jekyll</span>
        <span class="pill">Productboard</span>
        <span class="pill">Mural</span>
        <span class="pill">Cursor</span>
      </div>
    </div>

    <div class="tech-card">
      <h3>Certifications & Methods</h3>
      <div class="pill-wrap">
        <span class="pill">PSPO I</span>
        <span class="pill">PSM I</span>
        <span class="pill">Lean Six Sigma</span>
        <span class="pill">YSU: Molecular Biology & Biotechnology</span>
      </div>
    </div>

  </div> <!-- ✅ CLOSE .tech-grid -->
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
/* Typed bullets – label + rest stay on one line, caret appears only while typing */
.typed-bullets .bullet { margin:.5rem 0; line-height:1.5; }
.bullet-label { font-weight:700; white-space:nowrap; overflow:hidden; display:inline; border-right:0; }
.bullet-label.typing { border-right:2px solid var(--accent, #7dd3fc); animation: caret 1s steps(1,end) infinite; }
.bullet-rest { display:inline; opacity:0; transition:opacity .35s ease .05s; margin-left:.25rem; }
@keyframes caret { 0%,100% { border-right-color: transparent } 50% { border-right-color: var(--accent, #7dd3fc) } }

/* Tech grid pills (unchanged) */
.tech-grid { display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.tech-card { background: rgba(255,255,255,.035); border:1px solid rgba(255,255,255,.06); border-radius:12px; padding:16px; }
.tech-card h3 { margin:0 0 8px 0; font-size:1rem; letter-spacing:.2px; }
.pill-wrap { display:flex; flex-wrap:wrap; gap:8px; }
.pill { padding:6px 10px; border-radius:999px; background:rgba(125,211,252,.12); border:1px solid rgba(125,211,252,.25); font-size:.88rem; }

/* small spacing tweak */
#portfolio { margin-top:18px; }
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
