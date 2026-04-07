---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 2
description: research projects and technical studies
horizontal: false
---

<div class="projects">
{% assign sorted_research = site.research_items | sort: "importance" %}
<div class="row row-cols-1 row-cols-md-2">
  {% for item in sorted_research %}
    {% include projects.liquid item=item %}
  {% endfor %}
</div>
</div>
