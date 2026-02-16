// Main script extracted from index.html. Assumes window.gitCommands is available (from data/gitCommands.js)

let currentLang = "en";
let currentCategory = "all";
let expandedCards = new Set();

function render() {
  const data = window.gitCommands[currentLang];

  // Update header
  document.getElementById("mainTitle").textContent = data.title;
  document.getElementById("subtitle").textContent = data.subtitle;
  document.getElementById("searchInput").placeholder = data.searchPlaceholder;
  document.getElementById("langText").textContent = data.langButton;
  document.getElementById("expandAll").innerHTML = data.expandAll;
  document.getElementById("collapseAll").innerHTML = data.collapseAll;

  // Update category buttons
  const categoryNav = document.getElementById("categoryNav");
  categoryNav.innerHTML = "";
  Object.entries(data.categories).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = `category-btn ${currentCategory === key ? "active" : ""}`;
    btn.textContent = label;
    btn.dataset.category = key;
    categoryNav.appendChild(btn);
  });

  // Render sections
  renderCommands();
}

function renderCommands(searchQuery = "") {
  const data = window.gitCommands[currentLang];
  const container = document.getElementById("commandsContainer");
  container.innerHTML = "";

  let filteredSections = data.sections;
  if (currentCategory !== "all") {
    filteredSections = data.sections.filter((s) => s.id === currentCategory);
  }

  if (searchQuery) {
    filteredSections = filteredSections
      .map((section) => ({
        ...section,
        commands: section.commands.filter(
          (cmd) =>
            cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cmd.example.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((section) => section.commands.length > 0);
  }

  if (filteredSections.length === 0) {
    container.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No commands found</h3>
                <p>Try a different search term or category</p>
            </div>
        `;
    return;
  }

  filteredSections.forEach((section, sectionIndex) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "command-section";
    sectionEl.style.animationDelay = `${sectionIndex * 0.1}s`;

    const exampleLabel =
      currentLang === "en" ? "Real-World Example" : "વાસ્તવિક દુનિયાનું ઉદાહરણ";

    sectionEl.innerHTML = `
            <div class="section-header">
                <div class="section-number">${section.number}</div>
                <h2>${section.title}</h2>
            </div>
            <p class="section-description">${section.description}</p>
            <div class="command-grid">
                ${section.commands
                  .map(
                    (cmd, cmdIndex) => `
                    <div class="command-card ${
                      expandedCards.has(cmd.command) ? "expanded" : ""
                    }" data-command="${cmd.command}">
                        <div class="command-header">
                            <code class="command-code">${cmd.command}</code>
                            <button class="copy-btn" data-command="${
                              cmd.command
                            }" title="Copy command">
                                📋
                            </button>
                        </div>
                        <p class="command-description">${cmd.description}</p>
                        <button class="expand-icon" style="background: none; border: none; cursor: pointer; color: var(--text-muted); margin-top: 0.5rem;">
                            ▼
                        </button>
                        <div class="command-example">
                            <div class="example-label">${exampleLabel}</div>
                            <div class="example-text">${cmd.example}</div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    container.appendChild(sectionEl);
  });

  // Add event listeners
  addEventListeners();
}

function addEventListeners() {
  // Copy buttons
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const command = btn.dataset.command;
      navigator.clipboard.writeText(command).then(() => {
        showToast();
        btn.textContent = "✓";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "📋";
          btn.classList.remove("copied");
        }, 2000);
      });
    });
  });

  // Expand cards
  document.querySelectorAll(".command-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("copy-btn")) return;
      const command = card.dataset.command;
      if (expandedCards.has(command)) {
        expandedCards.delete(command);
      } else {
        expandedCards.add(command);
      }
      card.classList.toggle("expanded");
    });
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Event listeners
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "gu" : "en";
  render();
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  renderCommands(e.target.value);
});

document.getElementById("categoryNav").addEventListener("click", (e) => {
  if (e.target.classList.contains("category-btn")) {
    currentCategory = e.target.dataset.category;
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    renderCommands(document.getElementById("searchInput").value);
  }
});

document.getElementById("expandAll").addEventListener("click", () => {
  const cards = document.querySelectorAll(".command-card");
  cards.forEach((card) => {
    const command = card.dataset.command;
    expandedCards.add(command);
    card.classList.add("expanded");
  });
});

document.getElementById("collapseAll").addEventListener("click", () => {
  const cards = document.querySelectorAll(".command-card");
  cards.forEach((card) => {
    card.classList.remove("expanded");
  });
  expandedCards.clear();
});

// Initial render
render();
