---
layout: default
title: "Aadil Ali"
---

<section class="hero">
  <img src="{{ '/assets/profile.jpg' | relative_url }}" class="avatar" alt="Aadil">
  <h1>Hi! My name is Aadil.</h1>
  <p class="sublede" data-typer data-text="I build scalable ops through digital transformation, AI integration, and strategy. Scroll to learn more."></p>

  <div class="chips" style="justify-content:center;margin-top:16px;">
    <span class="chip">SAP (S/4HANA, IBP, FICO)</span>
    <span class="chip">Power BI</span>
    <span class="chip">Tableau</span>
    <span class="chip">Python</span>
    <span class="chip">SQL</span>
    <span class="chip">Snowflake</span>
    <span class="chip">Workday HCM</span>
    <span class="chip">AWS CloudWatch</span>
    <span class="chip">Docker</span>
    <span class="chip">Kubernetes</span>
    <span class="chip">Terraform</span>
    <span class="chip">Agile (PSPO I, PSM I)</span>
  </div>

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

<section id="skills" class="reveal">
  <h2 class="h-section">Skills</h2>
  <div class="skills-grid">
    <div class="card">
      <h3>Data & Analytics</h3>
      <p>Power BI, Tableau, DAX, Excel (PivotTables, VBA, Macros), R</p>
      <div class="chips"><span class="chip">Python</span><span class="chip">SQL</span></div>
    </div>
    <div class="card">
      <h3>Systems & Cloud</h3>
      <p>SAP (S/4HANA, IBP, FICO), Workday HCM, Salesforce, Snowflake, AWS CloudWatch</p>
      <p>Datadog, SonarQube, Kong Gateway</p>
    </div>
    <div class="card">
      <h3>Delivery & DevOps</h3>
      <p>Agile/Scrum (PSPO I, PSM I), CI/CD, Docker, Kubernetes, Terraform, Lean Six Sigma</p>
    </div>
    <div class="card">
      <h3>Development</h3>
      <p>Ruby, HTML, CSS, JavaScript, React.js</p>
    </div>
  </div>
</section>


<section id="timeline" class="reveal">
  <h2 class="h-section">Timeline of my growth</h2>
  <div class="timeline">
    {% for item in site.data.experience %}
    <div class="node">
      <div class="title">{{ item.company }} — {{ item.role }}</div>
      <div class="meta">{{ item.dates }} · {{ item.location }}</div>
      <ul>
        {% for b in item.bullets %}
        <li>{{ b }}</li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<section id="portfolio" class="reveal">
  <h2 class="h-section">Projects & Certifications</h2>

  <!-- Mini case-study cards: challenge → action → result (uses your _data/projects.yml) -->
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

  <!-- Hover preview container (JS fills this) -->
  <div class="hover-preview" aria-hidden="true"><img alt=""></div>
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
