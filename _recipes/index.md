---
title: Recipes
layout: single
classes: wide
---
{% for recipe in site.recipes %}{% unless recipe.name == "index.md" %}
[{{recipe.title}}]({{recipe.url}}) 
{%endunless%}{% endfor %}