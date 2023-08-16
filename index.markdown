---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Index
layout: post
toc: true
---
{% toc %}
### guidance
[operations manual]({% post_url 2023-05-11-operations-manual %})

[milestones]({% post_url 2023-08-11-milestones %})



### recipes
{% for recipe in site.recipes %}
 [{{recipe.title}}]({{recipe.url}})
 {{recipe.prep}}
{% endfor %}

