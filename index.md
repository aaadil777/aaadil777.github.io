---
layout: default
title: "Aadil Ali"
---

<section class="hero">
  <img src="{{ '/assets/profile.jpg' | relative_url }}" class="avatar" alt="Aadil">
  <h1>Hi! My name is Aadil.</h1>
  <p class="sublede">I am passionate about digital transformation, AI integration, and strategy.</p>
</section>

<section id="about" class="reveal">
  <h2 class="h-section">Who I am & how I work</h2>
  <p>I diagnose operational inefficiencies and deliver data-driven change across manufacturing, pharma, retail, and public sector.</p>
</section>

<section id="skills" class="reveal">
  <h2 class="h-section">Skills</h2>
  <p>SAP (S/4HANA, IBP, FICO) · Power BI · Snowflake · Workday HCM · Python · SQL · AWS CloudWatch · Agile (PSPO I, PSM I)</p>
</section>

<section id="timeline" class="reveal">
  <h2 class="h-section">Timeline</h2>
  <div class="timeline">
    {% for item in site.data.experience %}
    <div class="node">
      <div class="title">{{ item.company }} — {{ item.role }}</div>
      <div class="meta">{{ item.dates }} · {{ item.location }}</div>
      <ul>
        {% for b in item.bullets %}<li>{{ b }}</li>{% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<section id="portfolio" class="reveal">
  <h2 class="h-section">Projects & Certifications</h2>
  <div class="preview-grid">
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
