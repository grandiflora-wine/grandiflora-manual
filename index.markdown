---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Grandiflora Wine Garden
layout: home
toc: true
---

{% for recipe in site.recipes %}
[{{recipe.title}}]({{recipe.url}})
{% endfor %}


[operations manual]({% post_url 2023-05-11-operations-manual %})

[milestones]({% post_url 2023-08-11-milestones %})
