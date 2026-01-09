---
layout: page
title: Klivio
date: 08/12/2025
description: Site proposant des formations en ligne.
image: /assets/images/klivio-haut.png
techs: [HTML, CSS, Tailwind, Responsive]
# github_link: https://meegy-exe.github.io/
order: 1
---
<!-- cibler la source de la photo avec site.baseurl -->
![Bannière Klvio]({{ site.baseurl }}/assets/images/klivio-haut.png)
<!-- {: width="150px"} -->

## Présentation
Klivio est une plateforme proposant des formations en ligne.<br>

### Technologies utilisées 

<div class="tech-projet">
{%for tech in page.techs %}
<span class="tech">{{ tech }}</span>
{% endfor %}
</div> <br>

### Liens des projets
* [Voir le projet HTML / CSS](https://meegy-exe.github.io/Klivio/html-css/){:target="_blank"}
* [Voir le projet TAILWIND / CSS](https://meegy-exe.github.io/Klivio/tailwind/){:target="_blank"}

---

## Consigne du projet
Il était demandé de faire l'intégration de la page d’accueil statique, en respectant fidèlement la maquette donnée sur Figma.
Le rendu devait être responsive (adapté aux écrans pc, tablette et mobile).
Dans le respect des normes d'accessibilité, et bonnes pratiques SEO (balises meta, titres, structure).
Puis dans un second temps, il fallait refaire une version en utilisant le framework Tailwind / CSS tout en gardant la structure HTML.

## HTML / CSS 
Pour le projet d'intégration en HTML / CSS, j'ai veillé à avoir une structure HTML sémantique propre et organisé. (header, main, footer).

J'ai appliqué le style CSS dans un second temps (alignement avec FLEX, cartes formation...).

J'ai travaillé sur le responsive en parallèle (393px pour le format mobile). Tout en effectuant différents test régulièrement sur écrans/mobiles.

## TAILWIND
Pour la refonte Tailwind / CSS, j'ai commencé par la compréhension et l'utilisation de Tailwind.

J'ai ensuite défini le thème que je voulais aborder (da : thème sombre, rouge et blanc, référence à Strangers Things).

J'ai appliqué le style Tailwind sur le projet HTML de Klivio en gardant la même structure.

J'ai travaillé également en parallèle pour le responsive (défini avec md et lg, grid-col pour le redimensionnement).

J'ai aussi personnalisé des classes, et j'ai appris à me servir de tailwind.config.js (extend en premier puis, tailwind.config.js).

## Organisation
J'ai commencé par étudié le contexte, les consignes, la maquette Figma, et les outils à utiliser.

J'ai mis en place une arborescence organisée, avant de commencer l'intégration de manière progressive : structure HTML puis style CSS et responsive en parallèle.

Je faisais des sauvegardes régulières sur mon repo Github, ainsi qu'en local sur clé USB.

Les fichiers ont été vérifier avec les différents validators (W3C, WAVE et Lighthouse).

Et en second temsp j'ai fait la refonte avec le framework Tailwind CSS sur la même structure HTML.


## Ce que j'ai appris
* Meilleur manière d'organisation, d'optimiser mon temps de travail.
* Structure sémantique propre (header, main, footer, section, article...).
* Reprise d'un design existant (en respectant les exigences de la maquette).
* Adaptation du responsive.
* Prise en main de Tailwind / CSS.

## Axe d'amélioration
Sur ce projet, je souhaite améliorer certains points : 
* Gestion des "breakpoints" lors du redimensionnement sur les cartes de formation.
* Difficultés d'alignement et de centrage sur la partie Tailwind.

## Aperçu des rendus : 
![Screen de la page Klivio]({{ site.baseurl }}/assets/images/klivio.png)
![Screen de la page Tailwind]({{ site.baseurl }}/assets/images/tailwind.png)