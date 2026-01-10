---
layout: page
title: Mes projets
permalink: /projets/
order: 2
---
<!-- format de liste pour afficher les differents projets -->
<!-- source avec accolade -->


Mes projets :

<div class="sommaire-projet">
        {% for project in site.projects %}
            <div class="carte-projet">
                <h3>
                    <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                </h3>
                <p>{{ project.description }}</p>
                <a href="{{ project.url | relative_url }}"><img src="{{ project.image | relative_url }}" alt="{{ project.title }}"></a>
        {% endfor %}
</div>