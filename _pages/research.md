---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 2
description: research projects and technical studies in reverse chronological order.
_styles: |
  .research-filter-wrap {
    margin: 2.5rem 0 3rem;
    max-width: 32rem;
  }

  .research-filter-input {
    width: 100%;
    padding: 1rem 1.2rem;
    border-radius: 0.6rem;
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    font-size: 1.9rem;
    line-height: 1.2;
  }

  .research-filter-input::placeholder {
    color: var(--global-text-color-light);
  }

  .research-year-block {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .research-year-label {
    color: var(--global-text-color-light);
    font-size: 3.6rem;
    font-weight: 300;
    line-height: 1;
    text-align: right;
    margin-bottom: 2rem;
  }

  .research-entry {
    margin-bottom: 3rem;
  }

  .research-entry-grid {
    display: grid;
    grid-template-columns: 11.5rem 1fr;
    gap: 2rem;
    align-items: start;
  }

  .research-preview-col {
    width: 100%;
  }

  .research-abbr {
    display: block;
    width: 100%;
    border-radius: 0.45rem;
    background: #4e97c4;
    color: #0d2233;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.02em;
    padding: 0.4rem 0.75rem;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
  }

  .research-preview-col .research-preview {
    width: 100%;
    border-radius: 0.45rem;
    overflow: hidden;
  }

  .research-title {
    font-size: 1.15rem;
    line-height: 1.35;
    margin-bottom: 0.35rem;
  }

  .research-title a {
    color: var(--global-text-color);
  }

  .research-meta,
  .research-venue {
    color: var(--global-text-color-light);
    font-size: 0.95rem;
    line-height: 1.55;
    margin-bottom: 0.2rem;
  }

  .research-venue em {
    color: var(--global-text-color);
    font-style: italic;
  }

  .research-links {
    margin: 1rem 0 1.15rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .research-links a.btn {
    color: var(--global-text-color);
    border: 1px solid var(--global-text-color);
    padding: 0.35rem 1rem;
    font-size: 0.95rem;
  }

  .research-links a.btn:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
  }

  .research-summary {
    margin: 0;
    padding-left: 1.45rem;
  }

  .research-summary li {
    margin-bottom: 0.9rem;
    color: var(--global-text-color);
    line-height: 1.6;
  }

  .research-empty {
    display: none;
    color: var(--global-text-color-light);
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .research-filter-input {
      font-size: 1.2rem;
      padding: 0.85rem 1rem;
    }

    .research-year-label {
      font-size: 2.3rem;
      text-align: left;
      margin-bottom: 1.5rem;
    }

    .research-entry-grid {
      grid-template-columns: 1fr;
      gap: 1.1rem;
    }

    .research-preview-col {
      max-width: 13rem;
    }
  }
---

<div class="research-filter-wrap">
  <input id="research-filter" class="research-filter-input" type="text" placeholder="Type to filter">
</div>

<div class="research-year-block">
  <div class="research-year-label">2024</div>

  <div class="research-entry" data-research-item data-filter-text="amphibious unmanned aerial vehicle uav coaxial rotor tilt rotor solidworks ansys simscale raspberry pi project document">
    <div class="research-entry-grid">
      <div class="research-preview-col">
        <div class="research-abbr">UAV</div>
        <div class="research-preview">
          {% include figure.liquid loading="eager" path="assets/img/projects/uav-thumb.jpg" class="preview z-depth-1 rounded" alt="Amphibious UAV concept model" %}
        </div>
      </div>

      <div class="research-content-col">
        <div class="research-title">
          <a href="https://docs.google.com/document/d/135Z5TY74YDIhVaIr5FEqVyAM0nOg1VQJ/edit?usp=sharing&ouid=105327663954184394090&rtpof=true&sd=true" target="_blank">
            Design and Development of Amphibious Unmanned Aerial Vehicle
          </a>
        </div>

        <div class="research-meta">Aakash R. Yadav</div>
        <div class="research-venue"><em>Independent research project</em>, Mumbai, 2024</div>

        <div class="research-links">
          <a href="https://docs.google.com/document/d/135Z5TY74YDIhVaIr5FEqVyAM0nOg1VQJ/edit?usp=sharing&ouid=105327663954184394090&rtpof=true&sd=true" class="btn btn-sm z-depth-0" role="button" target="_blank">DOC</a>
        </div>

        <ul class="research-summary">
          <li>Designed an <strong>Amphibious UAV (A-UAV)</strong> with a <strong>coaxial rotor system</strong>, reducing power consumption by <strong>15%</strong>, increasing thrust, and incorporating an <strong>innovative tilt rotor mechanism</strong> for seamless air-to-water transitions with a <strong>streamlined upper body</strong> for aerodynamic efficiency.</li>
          <li>Conducted <strong>structural, stability, and aerodynamic analysis</strong> using <strong>SolidWorks</strong>, calculated <strong>airframe radius and coaxial height</strong> from <em>Introduction to Multicopter Design and Control</em> by <strong>Quan Quan</strong> to ensure <strong>Stable Equilibrium</strong>, and used <strong>ANSYS</strong> for static structural analysis and <strong>SimScale</strong> for aerodynamic evaluation.</li>
          <li>Led <strong>material and electronic component selection</strong>, determining UAV properties such as <strong>weight</strong>, <strong>thrust requirements</strong>, <strong>center of mass</strong>, and <strong>center of buoyancy</strong>, ensuring optimal performance.</li>
          <li>Demonstrated integration of <strong>ESCs</strong>, <strong>Brushless DC Motors</strong>, and <strong>Raspberry Pi</strong> for efficient <strong>PWM-based motor control and propulsion</strong>, applying multicopter design principles where <strong>two coaxial propellers generate thrust equivalent to 1.6 single rotors</strong> for enhanced efficiency.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="research-entry" data-research-item data-filter-text="li-br vapor absorption refrigeration system matlab thermodynamic properties ongoing project document">
    <div class="research-entry-grid">
      <div class="research-preview-col">
        <div class="research-abbr">MATLAB</div>
      </div>

      <div class="research-content-col">
        <div class="research-title">
          <a href="https://drive.google.com/file/d/1R_goGvZHzP5H50hJnhyBeBdLgcwLtuNz/view?usp=sharing" target="_blank">
            Calculation of Thermodynamic Properties of Li-Br Vapor Absorption Refrigeration System
          </a>
        </div>

        <div class="research-meta">Aakash R. Yadav</div>
        <div class="research-venue"><em>Ongoing technical study</em>, Mumbai, 2024–Present</div>

        <div class="research-links">
          <a href="https://drive.google.com/file/d/1R_goGvZHzP5H50hJnhyBeBdLgcwLtuNz/view?usp=sharing" class="btn btn-sm z-depth-0" role="button" target="_blank">DOC</a>
        </div>

        <ul class="research-summary">
          <li>Developed <strong>MATLAB</strong> code to analyze and calculate thermodynamic properties of a <strong>Li-Br vapor absorption refrigeration system</strong>, validating results with existing literature and theoretical calculations.</li>
        </ul>
      </div>
    </div>
  </div>

  <p id="research-empty" class="research-empty">No matching research items.</p>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("research-filter");
    const items = Array.from(document.querySelectorAll("[data-research-item]"));
    const empty = document.getElementById("research-empty");
    if (!input || !items.length) return;

    const applyFilter = () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;

      items.forEach((item) => {
        const haystack = (item.dataset.filterText || "").toLowerCase();
        const isVisible = !query || haystack.includes(query);
        item.style.display = isVisible ? "" : "none";
        if (isVisible) visibleCount += 1;
      });

      if (empty) {
        empty.style.display = visibleCount === 0 ? "block" : "none";
      }
    };

    input.addEventListener("input", applyFilter);
  });
</script>
