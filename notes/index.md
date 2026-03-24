---
layout: page
title: "Research Notes & Resources"
permalink: /notes/
---

<div class="notes-intro">
    <p class="lead">
        This collection features technical notes, research summaries, and learning resources spanning particle physics, machine learning, applied mathematics, and computational methods.
    </p>
</div>

<div class="notes-list">
    {% assign sorted_notes = site.notes | sort: 'date' | reverse %}
    {% for note in sorted_notes %}
    <article class="note-summary">
        <header class="note-header">
            <h2 class="note-title">
                <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
            </h2>
            <div class="note-meta">
                <time datetime="{{ note.date | date_to_xmlschema }}">
                    {{ note.date | date: "%B %d, %Y" }}
                </time>
                {% if note.categories %}
                <span class="note-category">
                    {{ note.categories | first }}
                </span>
                {% endif %}
            </div>
        </header>

        <div class="note-excerpt">
            {% if note.description %}
            {{ note.description }}
            {% elsif note.content contains '<!-- excerpt -->' %}
            {{ note.content | split: '<!-- excerpt -->' | first | markdownify | strip_html | truncatewords: 50 }}
            {% else %}
            {{ note.content | markdownify | strip_html | truncatewords: 80 }}
            {% endif %}
        </div>

        <footer class="note-footer">
            <a href="{{ note.url | relative_url }}" class="read-more">Read full note →</a>
        </footer>
    </article>
    {% endfor %}
</div>

<div class="notes-disclaimer">
    <p>
        <em>These notes are for personal reference and may contain errors. Please consult official documentation and peer-reviewed literature for authoritative information. Some content is curated from public sources (Zhihu, blogs, textbooks). If you identify any copyright infringement, please contact me for immediate removal. If you notice an error or have suggestions for improvement, please <a href="mailto:jackzhang.phys@gmail.com">contact me</a>.</em>
    </p>
</div>

<style>
.notes-intro .lead {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    text-align: justify;
    font-style: italic;
    color: #2c3e50;
    border-left: 4px solid #3498db;
    padding-left: 1.5rem;
}

.notes-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 3rem 0;
}

.note-summary {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 2.5rem;
}

.note-summary:last-child {
    border-bottom: none;
}

.note-header {
    margin-bottom: 1rem;
}

.note-title {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.note-title a {
    color: inherit;
    text-decoration: none;
}

.note-title a:hover {
    color: #3498db;
}

.note-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: #7f8c8d;
    align-items: center;
}

.note-category {
    background-color: #e8f4fc;
    color: #2980b9;
    padding: 0.2rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.note-excerpt {
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: #7f8c8d;
    font-size: 1.05rem;
}

.note-footer {
    text-align: right;
}

.read-more {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;
}

.read-more:hover {
    background-color: #2980b9;
}

.notes-disclaimer {
    margin-top: 3rem;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-left: 4px solid #3498db;
}

.notes-disclaimer p {
    line-height: 1.6;
    color: #7f8c8d;
    margin-bottom: 1rem;
}

.notes-disclaimer a {
    color: #3498db;
    text-decoration: none;
}

.notes-disclaimer a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .note-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}
</style>
