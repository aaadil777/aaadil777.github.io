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
    I’m a product-driven strategist working at the intersection of data, supply chain, and AI, transforming complex operations into scalable, measurable systems. My experience spans SAP/Workday implementations, API reliability, and cloud analytics, with a track record of delivering outcomes like cost savings, stronger forecast accuracy, and faster cycle times. I specialize in aligning business strategy with technical execution, building solutions that drive efficiency and long-term impact.
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

<!-- AI Spotlight & Projects -->
<section id="ai-spotlight" class="reveal">
  <h2 class="h-section">💡 AI Spotlight & Projects</h2>

  <!-- B2B AI Suite -->
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

  <!-- Nurse Next AI -->
  <div style="margin-top:40px;">
    <h3 class="h-sub">Nurse Next AI</h3>
    <div class="gallery">
      <img src="{{ '/assets/proj-nurse-next-ai.jpg' | relative_url }}" alt="Nurse Next AI Preview">
    </div>

    <p style="margin:14px 0 18px; display:flex; gap:10px; flex-wrap:wrap;">
      <a class="btn-cta" href="https://nurse-next-ai-assistant.streamlit.app/" target="_blank" rel="noopener">🚀 Launch Live App</a>
      <a class="btn-ghost" href="https://github.com/aaadil777/Nurse-Next-AI" target="_blank" rel="noopener">🤖 GitHub Repo</a>
    </p>

    <div class="card" style="margin-top:8px;">
      <h3 style="margin:0 0 6px;">Why it matters</h3>
      <ul>
        <li><strong>Purpose:</strong> AI assistant for triage, lookups, and routine workflows.</li>
        <li><strong>Passion:</strong> Deliver actionable guidance for complex health inquiries.</li>
        <li><strong>Business Need:</strong> Reduce context-switching; scale for internal ops and education.</li>
      </ul>
    </div>

    <div class="card" style="margin-top:12px;">
      <h3>What’s inside</h3>
      <ul>
        <li><strong>Guardrailed chat flows</strong> with modular prompts.</li>
        <li><strong>Session state</strong>, file I/O, exportable outputs.</li>
        <li><strong>Ready to integrate</strong> with monitoring & CI/CD pipelines.</li>
      </ul>
      <p><strong>Tech:</strong> Streamlit · Python · Groq · OpenAI · FastAPI</p>
    </div>
  </div>
</section>

<!-- Portfolio Cards -->
<section id="portfolio" class="reveal">
  <h2 class="h-section">Other Projects & Certifications</h2>
  <div class="proj-grid">
    {% for p in site.data.projects %}
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

<!-- Tech -->
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
  </div>
</section>

<!-- Gallery -->
<section id="gallery" class="reveal">
  <h2 class="h-section">Presentation Moments</h2>
  <div class="gallery">
    <figure class="tile">
      <div class="overflow-container">
        <img
          src="{{ '/assets/present-cat.jpg' | relative_url }}"
          alt="Caterpillar Report Out Presentation for Procurement"
          loading="lazy" decoding="async" width="1600" height="1200">
      </div>
    </figure>
    <figure class="tile">
      <div class="overflow-container">
        <img
          src="{{ '/assets/present-gilead.jpg' | relative_url }}"
          alt="Gilead CFO Presentation Day"
          loading="lazy" decoding="async" width="1600" height="1200">
      </div>
    </figure>
    <figure class="tile">
      <div class="overflow-container">
        <img
          src="{{ '/assets/present-8451.jpg' | relative_url }}"
          alt="84.51° Last Day"
          loading="lazy" decoding="async" width="1600" height="1200">
      </div>
    </figure>
    <figure class="tile">
      <div class="overflow-container">
        <img 
        class="fit-contain" 
        src="{{ '/assets/present-8451-team.png' | relative_url }}"
        alt="84.51° API Enablement Team Presentation Day" loading="lazy" decoding="async">
        loading="lazy" 
        decoding="async" 
        width="1600" 
        height="1200">
      </div>
    </figure> 
    <!-- Feature photo (wide) -->
    <figure class="tile tile--wide">
      <div class="overflow-container">
        <img
          src="{{ '/assets/present-diversity.jpg' | relative_url }}"
          alt="YSU DEI Outcomes Research with Program Manager"
          loading="lazy" decoding="async" width="2000" height="1125">
      </div>
    </figure>
  </div>
</section>

<!-- Contact -->
<section id="contact" class="reveal">
  <h2 class="h-section">Get in Touch</h2>
  <div class="cta-grid">
    <a class="cta-tile" href="mailto:{{ site.email }}">
      <div class="cta-title">✉️ Email</div>
      <div class="cta-sub">Reach me directly</div>
    </a>
    <a class="cta-tile" href="{{ site.linkedin }}" target="_blank" rel="noopener">
      <div class="cta-title">🔗 LinkedIn</div>
      <div class="cta-sub">Connect professionally</div>
    </a>
    <a class="cta-tile" href="{{ site.github }}" target="_blank" rel="noopener">
      <div class="cta-title">🐙 GitHub</div>
      <div class="cta-sub">See my work</div>
    </a>
    <a class="cta-tile" href="{{ site.resume_url }}" target="_blank" rel="noopener">
      <div class="cta-title">📄 Resume</div>
      <div class="cta-sub">Download PDF</div>
    </a>
  </div>
</section>
