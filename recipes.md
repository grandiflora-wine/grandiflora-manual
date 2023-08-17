---
title: Recipes
layout: post
---

{% for recipe in site.recipes %}
[{{recipe.title}}]({{recipe.url}})
{% endfor %}