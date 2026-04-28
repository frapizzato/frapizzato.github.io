document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Populate Content from data.js ---

    // Personal Info
    document.getElementById('profile-img').src = portfolioData.personal.photoUrl;
    document.getElementById('profile-name').innerHTML = portfolioData.personal.name;
    document.getElementById('profile-title').innerHTML = portfolioData.personal.title + " &mdash; " + portfolioData.personal.affiliation;
    
    document.getElementById('profile-email-link').href = "mailto:" + portfolioData.personal.email;
    document.getElementById('link-scholar').href = portfolioData.personal.links.scholar;
    document.getElementById('link-github').href = portfolioData.personal.links.github;
    document.getElementById('link-linkedin').href = portfolioData.personal.links.linkedin;
    document.getElementById('link-cv').href = portfolioData.personal.links.cv;
    if (document.getElementById('link-poster') && portfolioData.personal.links.poster) {
        document.getElementById('link-poster').href = portfolioData.personal.links.poster;
    }

    // About
    const aboutContainer = document.getElementById('about-container');
    portfolioData.about.forEach(paragraph => {
        const p = document.createElement('p');
        p.innerHTML = paragraph;
        aboutContainer.appendChild(p);
    });

    // Keywords Inline
    const kwInline = document.getElementById('keywords-inline');
    if (kwInline && portfolioData.researchKeywords) {
        kwInline.textContent = portfolioData.researchKeywords.map(k => k.word).join(', ');
    }

    // Projects
    const projContainer = document.getElementById('projects-container');
    const projectModal = document.createElement('div');
    projectModal.className = 'project-modal';
    projectModal.hidden = true;
    projectModal.innerHTML = `
        <div class="project-modal-backdrop" data-close-project-modal></div>
        <article class="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button class="project-modal-close" type="button" aria-label="Close project details" data-close-project-modal>
                <i class="fas fa-xmark" aria-hidden="true"></i>
            </button>
            <div id="project-modal-content"></div>
        </article>
    `;
    document.body.appendChild(projectModal);

    const projectModalContent = document.getElementById('project-modal-content');
    const closeProjectModal = () => {
        projectModal.hidden = true;
        document.body.classList.remove('modal-open');
        projectModalContent.innerHTML = '';
    };
    const renderList = (items, className) => {
        if (!items || items.length === 0) return '';
        return `<ul class="${className}">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    };
    const renderReferences = (references) => {
        if (!references || references.length === 0) return '';
        return `
            <section class="modal-section">
                <h3>References</h3>
                <ul class="modal-references">
                    ${references.map(ref => {
                        if (ref.url && ref.url !== '#') {
                            return `<li><a href="${ref.url}" target="_blank">${ref.text}</a></li>`;
                        }
                        return `<li>${ref.text}</li>`;
                    }).join('')}
                </ul>
            </section>
        `;
    };
    const renderImages = (images, title) => {
        if (!images || images.length === 0) return '';
        return `
            <section class="modal-section">
                <h3>${title}</h3>
                <div class="modal-image-grid">
                    ${images.map(image => `
                        <figure>
                            <img src="${image.src}" alt="${image.alt}">
                            <figcaption>${image.caption}</figcaption>
                        </figure>
                    `).join('')}
                </div>
            </section>
        `;
    };
    const renderApproach = (approach) => {
        if (!approach) return '';
        return `
            <section class="modal-section">
                <h3>Approach</h3>
                ${approach.text ? `<p class="modal-section-copy">${approach.text}</p>` : ''}
                ${approach.images ? `
                    <div class="modal-image-grid">
                        ${approach.images.map(image => `
                            <figure>
                                <img src="${image.src}" alt="${image.alt}">
                                <figcaption>${image.caption}</figcaption>
                            </figure>
                        `).join('')}
                    </div>
                ` : ''}
            </section>
        `;
    };
    const buildYoutubeEmbedUrl = (youtubeId) => {
        const params = new URLSearchParams({
            autoplay: '1',
            rel: '0',
            playsinline: '1'
        });

        if (window.location.origin && window.location.origin !== 'null') {
            params.set('origin', window.location.origin);
        }

        return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
    };
    const renderVideos = (videos) => {
        if (!videos || videos.length === 0) return '';
        return `
            <section class="modal-section">
                <h3>Demo Video</h3>
                <div class="modal-video-grid">
                    ${videos.map(video => `
                        <figure>
                            <button class="video-card" type="button" data-youtube-id="${video.youtubeId}" data-video-title="${video.title}" aria-label="Play ${video.title}">
                                <img src="${video.thumbnail}" alt="">
                                <span class="video-play"><i class="fab fa-youtube" aria-hidden="true"></i></span>
                            </button>
                            <figcaption>${video.title} <a href="${video.url}" target="_blank">Open on YouTube</a></figcaption>
                        </figure>
                    `).join('')}
                </div>
            </section>
        `;
    };
    const openProjectModal = (proj) => {
        projectModalContent.innerHTML = `
            <header class="project-modal-header">
                <p class="modal-kicker">Project Details</p>
                <h2 id="project-modal-title">${proj.title}</h2>
                <p>${proj.description}</p>
            </header>
            <section class="modal-section">
                <h3>Problem and Solution</h3>
                <div class="problem-solution-grid">
                    <div>
                        <h4>Problem</h4>
                        <p>${proj.problem || proj.description}</p>
                    </div>
                    <div>
                        <h4>Solution</h4>
                        <p>${proj.solution || proj.description}</p>
                    </div>
                </div>
            </section>
            ${proj.objective ? `
                <section class="modal-section">
                    <div class="modal-goal-box">
                        <h3>Goal / Objective</h3>
                        <p>${proj.objective}</p>
                    </div>
                </section>
            ` : ''}
            ${renderApproach(proj.approach)}
            <section class="modal-section">
                <h3>Impact</h3>
                ${renderList(proj.impact, 'modal-impact-list')}
            </section>
            ${renderImages(proj.impactImages, 'Results and Contributions')}
            ${renderVideos(proj.videos)}
            ${renderReferences(proj.references)}
        `;
        projectModal.hidden = false;
        document.body.classList.add('modal-open');
        projectModal.querySelector('.project-modal-close').focus();
    };

    projectModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-close-project-modal]')) {
            closeProjectModal();
            return;
        }

        const videoButton = event.target.closest('.video-card');
        if (videoButton) {
            videoButton.outerHTML = `
                <div class="video-frame">
                    <iframe src="${buildYoutubeEmbedUrl(videoButton.dataset.youtubeId)}" title="${videoButton.dataset.videoTitle}" referrerpolicy="origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            `;
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !projectModal.hidden) {
            closeProjectModal();
        }
    });

    portfolioData.projects.forEach((proj, index) => {
        const row = document.createElement('div');
        row.className = 'item-row project-row';
        
        let linksHtml = '';
        if (proj.links) {
            linksHtml = '<div class="item-links">' + 
                proj.links.map(link => {
                    if (link.placeholder) {
                        return `<span class="github-btn github-btn-disabled"><i class="${link.icon || 'fab fa-github'}"></i> ${link.text}</span>`;
                    }
                    return `<a href="${link.url}" target="_blank" class="github-btn"><i class="${link.icon || 'fab fa-github'}"></i> ${link.text}</a>`;
                }).join('') +
            '</div>';
        }

        row.innerHTML = `
            <div class="item-content">
                <div class="item-title">${proj.title}</div>
                <button class="project-summary" type="button" aria-haspopup="dialog">
                    <span>${proj.description}</span>
                    <i class="fas fa-up-right-from-square" aria-hidden="true"></i>
                </button>
                ${linksHtml}
            </div>
        `;
        projContainer.appendChild(row);

        const summaryButton = row.querySelector('.project-summary');
        if (summaryButton) {
            summaryButton.addEventListener('click', () => openProjectModal(proj));
        }
    });

    // Publications
    const pubContainer = document.getElementById('publications-container');
    
    // Use the exact order defined in data.js
    const sortedPubs = portfolioData.publications;

    let currentYear = 0;
    let currentYearContainer = null;
    
    if (pubContainer) {
        sortedPubs.forEach(pub => {
            if (pub.year !== currentYear) {
                currentYear = pub.year;
                
                // Create a container for the new year group
                currentYearContainer = document.createElement('div');
                currentYearContainer.className = 'timeline-year';
                
                const yearHeader = document.createElement('div');
                yearHeader.className = 'timeline-year-header';
                yearHeader.textContent = currentYear;
                
                currentYearContainer.appendChild(yearHeader);
                pubContainer.appendChild(currentYearContainer);
            }

            const pubDiv = document.createElement('div');
            pubDiv.className = 'timeline-item';
            
            let topicsHtml = '';
            if (pub.topics && pub.topics.length > 0) {
                topicsHtml = '<div style="margin-top: 0.3rem;">' + 
                    pub.topics.map(t => `<span class="pub-topic-tag">${t}</span>`).join('') +
                '</div>';
            }
            
            let presHtml = pub.presentation ? `<a href="${pub.presentation}" target="_blank" class="bracket-link">[<span>Slides</span>]</a>` : '';
            
            pubDiv.innerHTML = `
                <div class="pub-title">${pub.title}</div>
                <div class="pub-authors">${pub.authors}</div>
                <div class="pub-venue">${pub.venue}</div>
                ${topicsHtml}
                <div class="pub-abstract">${pub.abstract}</div>
                <div class="item-links">
                    <a href="${pub.url}" target="_blank" class="bracket-link">[<span>Paper</span>]</a>
                    ${presHtml}
                </div>
            `;
            currentYearContainer.appendChild(pubDiv);
        });
    }

    // Experience
    const expContainer = document.getElementById('experience-container');
    if (expContainer) {
        portfolioData.experience.forEach(exp => {
            const row = document.createElement('div');
            row.className = 'item-row';
            row.innerHTML = `
                <div class="item-date">${exp.date}</div>
                <div class="item-content">
                    <div class="item-title">${exp.title} <span class="org">| ${exp.organization}</span></div>
                    <div class="item-desc">${exp.description}</div>
                </div>
            `;
            expContainer.appendChild(row);
        });
    }

    // Education
    const eduContainer = document.getElementById('education-container');
    if (eduContainer && portfolioData.education) {
        portfolioData.education.forEach(edu => {
            const row = document.createElement('div');
            row.className = 'item-row';
            let descHtml = edu.description ? `<div class="item-desc">${edu.description}</div>` : '';
            row.innerHTML = `
                <div class="item-date">${edu.date}</div>
                <div class="item-content">
                    <div class="item-title">${edu.title} <span class="org">| ${edu.organization}</span></div>
                    ${descHtml}
                </div>
            `;
            eduContainer.appendChild(row);
        });
    }

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && portfolioData.skills) {
        portfolioData.skills.forEach(skillSet => {
            const block = document.createElement('div');
            block.className = 'skill-block';
            block.innerHTML = `
                <h4>${skillSet.category}</h4>
                <div class="skill-list-compact">${skillSet.items.join(' &middot; ')}</div>
            `;
            skillsContainer.appendChild(block);
        });
    }

    // Footer
    document.getElementById('footer-text').innerHTML = `&copy; ${new Date().getFullYear()} ${portfolioData.personal.name}. Minimalist Academic Design.`;

    // Smooth Scrolling
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
