---
layout: page
title: "Home"
permalink: /
---

<div class="hero-image">
    <img src="/assets/images/AbstractParticlePhysicsIllustration.jpg" alt="Abstract Particle Physics Illustration">
</div>

## About me
<section class="about-me">
    <p class="lead">
        PhD in physics, former member of the <a href='https://atlas.cern/'>ATLAS</a> experiment at <a href='https://home.cern/'>CERN</a>
    </p>
</section>

## Education
<div class="education">
    <ul>
        <li><strong>PhD in Particle Physics</strong> - Shanghai Jiao Tong University (2018-2023)</li>
        <li><strong>BSc in Physics</strong> - Wuhan University (2014-2018)</li>
    </ul>
</div>

## Research Focus
<div class="research-focus-grid">
        <div class="research-area">
            <h3>Particle physics</h3>
            <p>Searching for new physics at the LHC and dark matter with quantum sensing.</p>
            <ul>
                <li>BSM searches</li>
                <li>NV-center sensing</li>
            </ul>
        </div>

    <div class="research-area">
        <h3>AI4S</h3>
        <p>Applying DL techniques to high energy physics and quantum sensing, from detector reconstruction to anomaly detection.</p>
        <ul>
            <li>Jet tagging</li>
            <li>Generative models for fast simulation</li>
            <li>Reinforcement Learning for quantum sensing</li>
        </ul>
    </div>
</div>


## Get in Touch

<div class="contact-simple">
    <p>
    I'm always interested in discussing new ideas, collaborations, or applications of AI/ML in physics. Feel free to reach out via <a href="mailto:jackzhang.phys@gmail.com">email</a>.
    </p>
</div>

<style>
.home-intro .lead {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    text-align: justify;
    font-style: italic;
    color: #2c3e50;
    border-left: 4px solid #3498db;
    padding-left: 1rem;
}

.hero-image img {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.research-focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.75rem;
    margin: 0.5rem 0 2rem;
}

.research-area h3 {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.research-area p {
    line-height: 1.5;
    margin-bottom: 0.3rem;
    color: #7f8c8d;
}

.research-area ul {
    padding-left: 0.5rem;
    margin: 0;
}

.research-area li {
    margin-bottom: 0.2rem;
    color: #7f8c8d;
    line-height: 1.4;
}

.selected-publications {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;
}

.publication-card {
    background-color: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 1.5rem;
    transition: border-color 0.2s ease;
}

.publication-card:hover {
    border-color: #3498db;
}

.publication-card h4 {
    font-size: 1.1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
}

.publication-card h4 a {
    color: #2c3e50;
    text-decoration: none;
}

.publication-card h4 a:hover {
    color: #3498db;
    text-decoration: underline;
}

.journal {
    font-style: italic;
    color: #3498db;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
}

.authors {
    color: #7f8c8d;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
}

.abstract {
    color: #7f8c8d;
    line-height: 1.6;
    font-size: 0.95rem;
    border-left: 3px solid #e0e0e0;
    padding-left: 1rem;
}

.view-all-pubs {
    text-align: center;
    margin: 2rem 0 3rem;
}

.recent-notes {
    margin: 3rem 0;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
}

.recent-notes p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #7f8c8d;
}

.notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.note-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 1.5rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.note-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.note-card h3 {
    margin-top: 0;
    font-size: 1.2rem;
}

.note-card h3 a {
    color: #2c3e50;
    text-decoration: none;
}

.note-card h3 a:hover {
    color: #3498db;
}

.note-card p {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.note-meta {
    font-size: 0.9rem;
    color: #95a5a6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.note-meta .category {
    background-color: #e8f4fc;
    color: #2980b9;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
}

.notes-cta {
    text-align: center;
    margin-top: 2rem;
}

.contact-simple {
    text-align: center;
    margin: 2rem 0;
    padding: 0.2rem 0;
}

.contact-simple p {
    line-height: 1.5;
    color: #7f8c8d;
    max-width: none;
    margin: 0;
}

h2 + .contact-simple {
    margin-top: 0;
}

.contact-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

.btn:hover {
    background-color: #2980b9;
    color: white;
}

.btn-secondary {
    background-color: #f8f9fa;
    color: #2c3e50;
    border: 1px solid #e0e0e0;
}

.btn-secondary:hover {
    background-color: #e9ecef;
    color: #2c3e50;
}

.education {
    margin: 1rem 0 1.5rem;
}

.education h3 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0.3rem;
    color: #2c3e50;
}

.education ul {
    padding-left: 0.75rem;
    margin: 0;
}

.education li {
    margin-bottom: 0.5rem;
    color: #7f8c8d;
    line-height: 1.4;
}

.education strong {
    color: #2c3e50;
}

.about-me {
    margin-bottom: 2rem;
}

.about-me h2 {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
}

.about-me .lead {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
}

h2 {
    margin-top: 0.5em;
    margin-bottom: 0.2em;
}

h3 {
    margin-top: 0.4em;
    margin-bottom: 0.3em;
}

ul, ol {
    margin-left: 1.5em;
}

li {
    margin-bottom: 0.4em;
}

p {
    margin-bottom: 0.7em;
}

@media (max-width: 768px) {
    .research-focus,
    .notes-grid {
        grid-template-columns: 1fr;
    }

    .contact-actions {
        flex-direction: column;
        align-items: center;
    }

    .btn,
    .btn-secondary {
        width: 100%;
        text-align: center;
    }
}
</style>