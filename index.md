---
layout: default
title: "Aadil Ali"
---

<section class="hero">
  <img src="{{ '/assets/profile.jpg' | relative_url }}" class="avatar" alt="Aadil">
  <h1>Hi! My name is Aadil.</h1>
<p class="sublede"
     data-typer
     data-text="I am passionate about digital transformation, AI integration, and strategy. Navigate below to learn more about who I am.">
  </p>

  <div class="chips" style="justify-content:center;margin-top:16px;">
    <span class="chip">SAP (S/4HANA, IBP, FICO)</span>
    <span class="chip">Power BI • Tableau • Excel</span>
    <span class="chip">Python</span>
    <span class="chip">SQL</span>
    <span class="chip">Snowflake</span>
    <span class="chip">Workday HCM</span>
    <span class="chip">AWS CloudWatch</span>
    <span class="chip">Docker • Kubernetes • Terraform</span>
    <span class="chip">Agile (PSPO I, PSM I)</span>
    <span class="chip">Lean Six Sigma</span>
  </div>
</section>

<section id="about" class="reveal">
  <h2 class="h-section">Who I am & how I work</h2>
  <p>
    I bring a multidisciplinary background in public health, supply chain, and technology—diagnosing operational inefficiencies, architecting data-driven solutions, and leading cross-functional teams to deliver scalable, sustainable change across manufacturing, pharma, retail, and the public sector.
  </p>
</section>

<section id="skills" class="reveal">
  <h2 class="h-section">Systems, data, and delivery methods</h2>

  <div class="skills-grid">
    <div class="card">
      <h3>Systems & Platforms</h3>
      <p>SAP (S/4HANA, IBP, FICO), Salesforce, Workday HCM, Snowflake, Datadog, SonarQube, Kong Gateway, ArcGIS</p>
    </div>
    <div class="card">
      <h3>Data & Tools</h3>
      <p>Power BI, Tableau, DAX, Excel (PivotTables, VBA, Macros)</p>
    </div>
    <div class="card">
      <h3>Languages</h3>
      <div class="chips">
        <span class="chip">Python</span><span class="chip">SQL</span><span class="chip">R</span>
      </div>
    </div>
    <div class="card">
      <h3>Cloud & DevOps</h3>
      <p>AWS CloudWatch, Docker, Kubernetes, Terraform, PowerShell, CI/CD</p>
    </div>
    <div class="card">
      <h3>Methods & Certifications</h3>
      <p>Agile / Scrum (PSPO I, PSM I), Lean Six Sigma</p>
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
  <h2 class="h-section">Projects &amp; Certifications</h2>

  <div class="preview-grid">
    {% for p in site.data.projects %}
      <a class="proj-card preview"
         href="{{ p.url }}"
         data-img="{{ p.img | relative_url }}"
         aria-label="{{ p.title }}">
        <div class="p-body">
          <div class="proj-icon" aria-hidden="true">{{ p.icon }}</div>
          <div class="p-title">{{ p.title }}</div>
          <p class="p-desc">{{ p.desc }}</p>
        </div>
      </a>
    {% endfor %}
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
    <a class="chip" href="mailto:{{ site.email }}">Email</a>
    <a class="chip" href="{{ site.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="chip" href="{{ site.github }}" target="_blank" rel="noopener">GitHub</a>
    <a class="chip" href="{{ site.calendar }}" target="_blank" rel="noopener">Book time</a>
    <a class="chip" href="{{ site.resume_url }}" target="_blank" rel="noopener">Resume (PDF)</a>
  </div>
</section>
