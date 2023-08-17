---
title: Manuals
layout: single
classes: wide
---
{% for manual in site.manuals %}{% unless manual.name == "index.md" %}
[{{manual.title}}]({{manual.url}}) 
{%endunless%}{% endfor %}