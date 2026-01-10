---
layout: page
title: Contact
permalink: /contact/
order: 3
---
<!-- bien fermer les var sinon ça crash -->

<div class="container-contact">
    <div class="head-contact">
        <h1 class="titre-contact"><span class="text-impact">Contactez-</span>moi</h1>
        <p class="description-contact">
        Je recherche actuellement une <strong>alternance</strong>.<br>
        Vous pouvez m'en suivre sur les réseaux, ou m'envoyez un message via le formulaire !
        </p>

        <div class="btn-reseaux-contact">
            <!-- variable % -->
            {% if site.github_username %}
            <a href="https://github.com/{{ site.github_username }}" target="_blank" class="btn-reseaux">
                Mon Github
            </a>
            {% endif %}
            {% if site.linkedin_username %}
            <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank" class="btn-reseaux">
                Mon LinkedIn
            </a>
            {% endif %}

            <!-- MAIL -->
            <a href="mailto:{{ site.email }}" class="btn-reseaux">Envoyez-moi un Email</a>

            <p id="accroche-mail">Directement via mon email : <strong>{{ site.email }}</strong></p>
    </div>
</div>

    <div class="section-formulaire">
        <h2 class="sous-titre-formulaire">M'envoyer un message</h2>
        <form class="form-bloc">
            <!-- NOM -->
            <div class="form">
                <label for="name">Nom</label>
                <input name="name" type="text" id="name" placeholder="Votre nom" required>
            </div>
            <!-- EMAIL -->
            <div class="form">
                <label for="email">Votre email</label>
                <input name="email" type="email" id="email" placeholder="Votre email" required>
            </div>            
            <!-- MESSAGE -->
            <div class="form">
            <label for="message">Message</label>
            <textarea name="message" rows="5" id="message" placeholder="Votre message" required></textarea>
            </div>
            <!-- SUBMIT -->
            <button type="submit" id="btn-submit">Envoyer</button>
        </form>
    </div>
</div>