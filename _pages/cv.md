---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 5
description: curriculum vitae
_styles: |
  .cv-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .cv-icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 3.25rem;
    color: #4e97c4 !important;
    text-decoration: none !important;
  }

  .cv-icon-link:hover {
    color: var(--global-hover-color) !important;
  }

  .cv-frame-wrap {
    width: 100%;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    overflow: hidden;
    background: #2b2b2b;
  }

  .cv-frame {
    width: 100%;
    height: 78vh;
    min-height: 56rem;
    border: 0;
    display: block;
    background: #2b2b2b;
  }

  @media (max-width: 768px) {
    .cv-page-header {
      align-items: flex-start;
    }

    .cv-icon-link {
      font-size: 2.5rem;
    }

    .cv-frame {
      height: 70vh;
      min-height: 38rem;
    }
  }
---

<div class="cv-page-header">
  <div></div>
  <a class="cv-icon-link" href="{{ '/assets/pdf/aakash-yadav-cv.pdf' | relative_url }}" target="_blank" title="Open PDF">
    <i class="fa-solid fa-file-pdf"></i>
  </a>
</div>

<div class="cv-frame-wrap">
  <iframe class="cv-frame" src="{{ '/assets/pdf/aakash-yadav-cv.pdf' | relative_url }}"></iframe>
</div>
