---
layout: page
title: Mes projets
permalink: /projets/
order: 2
---
<!-- format de liste pour afficher les differents projets -->
<!-- source avec accolade -->

Mes projets :

<ul>
    {% for project in site.projects %}
        <li>
            <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            <p>{{ project.description }}</p>
            <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
        </li>
    {% endfor %}
</ul>