/* MAINQUEST - CENTRALIZED APPLICATION ENGINE */

/* ============ CONSTANTS & DATA ============ */
const GOALS = ["AI/ML Engineer", "Software Engineer", "Data Scientist", "Web Developer", "Cybersecurity Analyst", "Product Manager"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const INTERESTS = ["Python", "JavaScript", "AI & Machine Learning", "Data Structures", "Cloud Infrastructure", "Cybersecurity"];
const TIME_SLOTS = ["15 minutes", "30 minutes", "1 hour", "2+ hours"];

const ASSESSMENT_QS = [
  { q: "Which Python data structure is mutable?", opts: ["Tuple", "String", "List", "Integer"], ans: 2 },
  { q: "What does supervised machine learning require?", opts: ["Labeled training data", "Only raw images", "Random samples", "No prior data"], ans: 0 },
  { q: "Why is train/test split essential in ML?", opts: ["Increases execution speed", "Evaluates model generalization on unseen data", "Deletes outliers", "Generates web UI"], ans: 1 },
  { q: "Which library is primary for numerical array operations in Python?", opts: ["NumPy", "Pandas", "Requests", "Flask"], ans: 0 },
  { q: "What characterizes overfitting in a machine learning model?", opts: ["High accuracy on training, poor performance on test data", "Poor performance on training data", "Model runs infinitely", "Dataset is empty"], ans: 0 }
];

const ACTIVITIES = [
  {
    id: 1,
    title: "Python Functions — Intermediate",
    skill: "Python",
    type: "Coding",
    time: 12,
    xp: 10,
    skillGain: 5,
    reason: "Recommended because it closes your current Python skill gap.",
    questions: [
      { q: "What does this Python function return?\n\ndef add(a, b=5):\n    return a + b\n\nResult of add(3)?", opts: ["3", "5", "8", "SyntaxError"], ans: 2 },
      { q: "Which keyword defines an anonymous inline function in Python?", opts: ["def", "lambda", "inline", "func"], ans: 1 },
      { q: "What is the output of list(map(lambda x: x*2, [1, 2, 3]))?", opts: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "6"], ans: 1 }
    ]
  },
  {
    id: 2,
    title: "Python Data Handling — Intermediate",
    skill: "Python",
    type: "Coding",
    time: 15,
    xp: 15,
    skillGain: 5,
    reason: "Deepens your data manipulation capabilities for Machine Learning workflows.",
    questions: [
      { q: "In pandas, which indexer method selects rows by integer position?", opts: ["df.loc[]", "df.iloc[]", "df.select()", "df.get()"], ans: 1 },
      { q: "Which pandas method drops rows with missing values?", opts: ["df.dropna()", "df.remove_null()", "df.clean()", "df.drop_missing()"], ans: 0 },
      { q: "What does df.groupby('category').mean() do?", opts: ["Groups by category column and computes mean per group", "Deletes category column", "Filters mean values", "Sorts dataframe"], ans: 0 }
    ]
  },
  {
    id: 3,
    title: "Statistics & Probability Fundamentals",
    skill: "Statistics",
    type: "Lesson",
    time: 15,
    xp: 10,
    skillGain: 10,
    reason: "Establishes baseline probability and statistics for model evaluation.",
    questions: [
      { q: "What measure of central tendency is least sensitive to extreme outliers?", opts: ["Mean", "Median", "Standard Deviation", "Variance"], ans: 1 },
      { q: "In a normal distribution, approximately what percentage of data lies within 1 standard deviation?", opts: ["50%", "68%", "95%", "99.7%"], ans: 1 },
      { q: "What does a p-value evaluate in hypothesis testing?", opts: ["Probability of observing test results under null hypothesis", "Percentage of accurate predictions", "Model complexity", "Sample size"], ans: 0 }
    ]
  },
  {
    id: 4,
    title: "Supervised ML Model Training",
    skill: "Machine Learning",
    type: "Project",
    time: 20,
    xp: 20,
    skillGain: 15,
    reason: "Tackles your highest priority skill gap in Machine Learning.",
    questions: [
      { q: "Which metric is best for evaluating highly imbalanced binary classification?", opts: ["Accuracy", "F1-Score / PR-AUC", "Mean Squared Error", "R-Squared"], ans: 1 },
      { q: "Which technique prevents overfitting by adding a penalty for model complexity?", opts: ["Regularization (L1/L2)", "Feature Scaling", "Data Augmentation", "One-Hot Encoding"], ans: 0 },
      { q: "What is the main purpose of K-Fold Cross Validation?", opts: ["Estimating model generalization performance on unseen data", "Increasing speed", "Deleting correlated features", "Formatting CSV"], ans: 0 }
    ]
  },
  {
    id: 5,
    title: "Neural Network Architecture 101",
    skill: "Deep Learning",
    type: "Lesson",
    time: 25,
    xp: 25,
    skillGain: 15,
    reason: "Prepares you for advanced AI model deployment.",
    questions: [
      { q: "Which activation function is most widely used in hidden layers of deep neural networks?", opts: ["Sigmoid", "ReLU", "Step function", "Linear"], ans: 1 },
      { q: "What algorithm updates neural network weights based on output error gradients?", opts: ["Backpropagation", "K-Means", "Dijkstra", "Grid Search"], ans: 0 },
      { q: "What is dropout in neural network training?", opts: ["Randomly disabling neurons during training to prevent co-adaptation", "Deleting dataset rows", "Stopping training early", "Reducing learning rate"], ans: 0 }
    ]
  }
];

const QUEST_MAP_NODES = [
  { title: "Python Fundamentals", status: "complete", pct: 100 },
  { title: "Statistics & Data", status: "complete", pct: 100 },
  { title: "Machine Learning Basics", status: "current", pct: 25 },
  { title: "Deep Learning & AI", status: "locked", pct: 0 },
  { title: "Production Projects", status: "locked", pct: 0 },
  { title: "Deployment & MLOps", status: "locked", pct: 0 },
  { title: "Interview Ready", status: "locked", pct: 0 }
];

const DEMO_USER = {
  name: "Alex Chen",
  email: "alex@mainquest.ai",
  goal: "AI/ML Engineer",
  level: 12,
  xp: 820,
  streak: 7,
  progress: 68,
  skills: { Python: 80, Statistics: 45, "Machine Learning": 25, "Deep Learning": 10, DSA: 55, Projects: 60 },
  history: [
    { title: "Python Data Science Foundations", xp: 15, date: "Yesterday" },
    { title: "Git Workflow Mastery", xp: 10, date: "2 days ago" }
  ],
  completedCount: 42
};

/* ============ STATE ENGINE ============ */
const STATE = {
  user: null,
  screen: "landing",
  appView: "home",
  onboarding: { step: 0, goal: "AI/ML Engineer", level: "Intermediate", interests: [], time: "30 minutes" },
  assessment: { q: 0, score: 0, answers: [] },
  quest: { actId: null, act: null, q: 0, score: 0, answers: [], isComplete: false },
  activityIndex: 0,
  theme: localStorage.getItem("mainquest-theme") || "dark",
  toastTimer: null,
  coachBannerNotice: null
};

/* ============ NAVIGATION & SCREEN MANAGEMENT ============ */
function navigateTo(screenId) {
  STATE.screen = screenId;
  document.querySelectorAll(".screen").forEach(s => s.hidden = true);
  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.hidden = false;
    window.scrollTo(0, 0);
  }
}

function setAppView(viewId) {
  STATE.appView = viewId;
  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.nav === viewId);
  });
  renderAppView();
}

/* ============ THEME SYSTEM ============ */
function setTheme(t) {
  STATE.theme = t;
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("mainquest-theme", t);
  document.querySelectorAll(".btn-theme-toggle, #sidebar-theme-toggle .theme-icon").forEach(el => {
    el.textContent = t === "dark" ? "☀️" : "🌙";
  });
}

function toggleTheme() {
  setTheme(STATE.theme === "dark" ? "light" : "dark");
}

/* ============ AUTH & USER STORAGE ============ */
function saveUserToStorage() {
  localStorage.setItem("mainquest-user", JSON.stringify(STATE.user));
}

function loadUserFromStorage() {
  const u = localStorage.getItem("mainquest-user");
  return u ? JSON.parse(u) : null;
}

function demoLogin() {
  STATE.user = JSON.parse(JSON.stringify(DEMO_USER));
  STATE.activityIndex = 0;
  saveUserToStorage();
  showToast("Logged in as Demo User: Alex Chen");
  navigateTo("app");
  renderApp();
}

function handleSignupSubmit() {
  const nameInput = document.getElementById("signup-name");
  const name = nameInput && nameInput.value ? nameInput.value : "Alex Chen";
  STATE.user = { 
    name, 
    email: "alex@mainquest.ai", 
    goal: "AI/ML Engineer", 
    level: 1, 
    xp: 0, 
    streak: 1, 
    progress: 10, 
    skills: { Python: 40, Statistics: 20, "Machine Learning": 10, "Deep Learning": 5, DSA: 30, Projects: 15 }, 
    history: [], 
    completedCount: 0 
  };
  saveUserToStorage();
  navigateTo("onboarding");
  renderOnboarding();
}

function logout() {
  STATE.user = null;
  localStorage.removeItem("mainquest-user");
  showToast("Logged out successfully");
  navigateTo("landing");
}

/* ============ TOAST & MODAL SYSTEM ============ */
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(STATE.toastTimer);
  STATE.toastTimer = setTimeout(() => { t.hidden = true; }, 3000);
}

function openModal(htmlContent) {
  const m = document.getElementById("modal");
  document.getElementById("modal-content").innerHTML = htmlContent;
  m.hidden = false;
}

function closeModal() {
  const m = document.getElementById("modal");
  if (m) m.hidden = true;
}

function showWhyThisModal(actId) {
  const act = ACTIVITIES.find(a => a.id === actId) || ACTIVITIES[0];
  openModal(`
    <h3>Why this quest?</h3>
    <p style="margin:12px 0;color:var(--text-muted);">${act.reason}</p>
    <div class="action-preview-box">
      <span>Target Skill: <b>${act.skill}</b></span><br>
      <span>Reward: <b>+${act.xp} XP</b></span>
    </div>
    <button class="btn primary full" style="margin-top:16px;" id="modal-start-quest-btn" data-act-id="${act.id}">Start Quest Now →</button>
  `);
}

function showSkillModal(skillName) {
  const pct = (STATE.user && STATE.user.skills && STATE.user.skills[skillName]) || 50;
  openModal(`
    <h3>${skillName} Details</h3>
    <p style="margin:8px 0;color:var(--text-muted);">Current Proficiency: <b>${pct}%</b></p>
    <p>Reinforcing ${skillName} increases your overall target career match score for ${STATE.user ? STATE.user.goal : 'AI/ML Engineer'}.</p>
    <button class="btn primary full" style="margin-top:16px;" onclick="closeModal();">Got it</button>
  `);
}

function showNodeModal(nodeIdx) {
  const node = QUEST_MAP_NODES[nodeIdx];
  openModal(`
    <h3>${node.title}</h3>
    <p style="margin:8px 0;color:var(--text-muted);">Status: <b>${node.status.toUpperCase()}</b></p>
    <button class="btn primary full" style="margin-top:16px;" onclick="closeModal();">Close</button>
  `);
}

/* ============ ONBOARDING ENGINE ============ */
function renderOnboarding() {
  const container = document.getElementById("onboarding-container");
  const step = STATE.onboarding.step;
  document.getElementById("onboarding-progress-fill").style.width = `${((step + 1) / 4) * 100}%`;
  document.getElementById("onboarding-step-counter").textContent = `Step ${step + 1} of 4`;

  const stepsData = [
    { title: "What is your main career quest?", options: GOALS, key: "goal" },
    { title: "What is your current skill level?", options: LEVELS, key: "level" },
    { title: "Select primary interests", options: INTERESTS, key: "interests", multi: true },
    { title: "Daily time commitment?", options: TIME_SLOTS, key: "time" }
  ];

  const current = stepsData[step];
  let html = `<h2 class="step-title">${current.title}</h2><div class="options-grid">`;

  current.options.forEach(opt => {
    const isSelected = current.multi ? (STATE.onboarding.interests.includes(opt)) : (STATE.onboarding[current.key] === opt);
    html += `<div class="option-card ${isSelected ? 'selected' : ''}" data-onb-val="${opt}">${opt} ${isSelected ? '✓' : ''}</div>`;
  });

  html += `</div><div style="display:flex;gap:12px;margin-top:20px;">`;
  if (step > 0) html += `<button class="btn secondary" id="onb-prev-btn">← Back</button>`;
  html += `<button class="btn primary full" id="onb-next-btn">${step === 3 ? 'Finish & Assess →' : 'Continue →'}</button></div>`;

  container.innerHTML = html;
}

/* ============ ASSESSMENT ENGINE ============ */
function renderAssessment() {
  const container = document.getElementById("assessment-container");
  const qIdx = STATE.assessment.q;

  if (qIdx >= ASSESSMENT_QS.length) {
    const score = STATE.assessment.score;
    const evaluatedLevel = score >= 4 ? "Advanced" : score >= 3 ? "Intermediate" : "Beginner";
    container.innerHTML = `
      <div style="text-align:center;padding:20px;">
        <div style="font-size:3rem;margin-bottom:12px;">🎯</div>
        <h2>Assessment Completed!</h2>
        <p style="color:var(--text-muted);margin:10px 0 20px;">Your score: <b>${score}/${ASSESSMENT_QS.length}</b>. Evaluated Level: <b>${evaluatedLevel}</b>.</p>
        <button class="btn primary lg" id="btn-finish-assessment">Generate My Quest Roadmap →</button>
      </div>`;
    return;
  }

  const q = ASSESSMENT_QS[qIdx];
  document.getElementById("assessment-bar-fill").style.width = `${((qIdx + 1) / ASSESSMENT_QS.length) * 100}%`;

  let html = `
    <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);">QUESTION ${qIdx + 1} OF ${ASSESSMENT_QS.length}</span>
    <h3 style="margin:12px 0 20px;font-size:1.1rem;">${q.q}</h3>
    <div class="options-grid">`;

  q.opts.forEach((opt, idx) => {
    html += `<div class="option-card" data-assess-ans="${idx}">${opt}</div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

/* ============ QUEST EXECUTION ENGINE ============ */
function startQuest(actId) {
  const act = ACTIVITIES.find(a => a.id === actId) || ACTIVITIES[STATE.activityIndex] || ACTIVITIES[0];
  STATE.quest = { actId: act.id, act: act, q: 0, score: 0, answers: [], isComplete: false };
  navigateTo("quest");
  renderQuest();
}

function markActivityComplete(actId) {
  const act = ACTIVITIES.find(a => a.id === actId) || ACTIVITIES[STATE.activityIndex];
  STATE.user.xp += act.xp;
  STATE.user.completedCount += 1;
  STATE.user.history.unshift({ title: act.title, xp: act.xp, date: "Just now" });
  STATE.activityIndex = (STATE.activityIndex + 1) % ACTIVITIES.length;
  STATE.coachBannerNotice = `✓ Marked "${act.title}" complete! +${act.xp} XP gained.`;
  saveUserToStorage();
  renderAppView();
}

function skipActivity(actId) {
  STATE.activityIndex = (STATE.activityIndex + 1) % ACTIVITIES.length;
  STATE.coachBannerNotice = "Skipped task. Recommendation queue updated.";
  renderAppView();
}

function renderQuest() {
  const container = document.getElementById("quest-container");
  const q = STATE.quest.act.questions[STATE.quest.q];

  if (STATE.quest.q >= STATE.quest.act.questions.length) {
    const score = STATE.quest.score;
    const act = STATE.quest.act;
    const xpGained = act.xp;
    
    STATE.user.xp += xpGained;
    if (STATE.user.xp >= 1000) {
      STATE.user.level += 1;
      STATE.user.xp -= 1000;
    }
    
    STATE.user.completedCount += 1;
    STATE.user.progress = Math.min(100, STATE.user.progress + 4);
    STATE.user.skills[act.skill] = Math.min(100, (STATE.user.skills[act.skill] || 50) + act.skillGain);
    STATE.user.history.unshift({ title: act.title, xp: xpGained, date: "Just now" });
    
    STATE.activityIndex = (STATE.activityIndex + 1) % ACTIVITIES.length;
    STATE.coachBannerNotice = "✨ Your Quest Coach adapted your next step based on your performance.";
    saveUserToStorage();

    const nextAct = ACTIVITIES[STATE.activityIndex];

    container.innerHTML = `
      <div style="text-align:center;">
        <div style="font-size:3.5rem;margin-bottom:12px;">🎉</div>
        <h2 style="font-size:1.6rem;">QUEST COMPLETE!</h2>
        <p style="color:var(--text-muted);margin-top:4px;">${act.title}</p>
        
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0;">
          <div style="background:var(--bg-main);padding:16px;border-radius:var(--radius-md);border:1px solid var(--border-color);">
            <span style="font-size:0.75rem;color:var(--text-muted);display:block;">SCORE</span>
            <b style="font-size:1.4rem;color:var(--accent-primary);">${score} / ${act.questions.length}</b>
          </div>
          <div style="background:var(--bg-main);padding:16px;border-radius:var(--radius-md);border:1px solid var(--border-color);">
            <span style="font-size:0.75rem;color:var(--text-muted);display:block;">XP REWARD</span>
            <b style="font-size:1.4rem;color:var(--success);">+${xpGained} XP</b>
          </div>
        </div>

        <div style="background:var(--bg-card);border:1px solid var(--border-highlight);padding:16px;border-radius:var(--radius-md);margin-bottom:24px;text-align:left;">
          <span style="font-size:0.7rem;font-weight:800;color:var(--accent-primary);display:block;margin-bottom:4px;">🎯 NEXT QUEST UNLOCKED</span>
          <h4 style="margin-bottom:4px;">${nextAct.title}</h4>
          <p style="font-size:0.8rem;color:var(--text-muted);">${nextAct.reason}</p>
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn secondary full" id="btn-quest-to-dashboard">Go to Dashboard</button>
          <button class="btn primary full" id="btn-quest-continue" data-next-act="${nextAct.id}">Continue Next Quest →</button>
        </div>
      </div>`;
    return;
  }

  let html = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
      <span class="widget-tag">${STATE.quest.act.type}</span>
      <span style="font-size:0.8rem;color:var(--text-muted);">Question ${STATE.quest.q + 1} of ${STATE.quest.act.questions.length}</span>
    </div>
    <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${((STATE.quest.q + 1) / STATE.quest.act.questions.length) * 100}%"></div></div>
    <h3 style="margin:20px 0;font-size:1.15rem;white-space:pre-line;">${q.q}</h3>
    <div class="options-grid">`;

  q.opts.forEach((opt, idx) => {
    html += `<div class="option-card" data-quest-ans="${idx}">${opt}</div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

/* ============ DASHBOARD & APP RENDER ENGINE ============ */
function renderApp() {
  if (!STATE.user) return;
  document.getElementById("nav-user-name").textContent = STATE.user.name;
  document.getElementById("nav-user-goal").textContent = STATE.user.goal;
  document.getElementById("nav-user-avatar").textContent = STATE.user.name.charAt(0).toUpperCase();
  renderAppView();
}

function renderAppView() {
  const container = document.getElementById("view");
  if (!container || !STATE.user) return;
  const view = STATE.appView;

  switch (view) {
    case "home": container.innerHTML = renderHomeView(); break;
    case "main": container.innerHTML = renderMainQuestView(); break;
    case "map": container.innerHTML = renderQuestMapView(); break;
    case "side": container.innerHTML = renderSideQuestsView(); break;
    case "progress": container.innerHTML = renderProgressView(); break;
    case "challenges": container.innerHTML = renderChallengesView(); break;
    case "portfolio": container.innerHTML = renderPortfolioView(); break;
    case "career": container.innerHTML = renderCareerReadinessView(); break;
    case "coach": container.innerHTML = renderCoachView(); break;
    case "profile": container.innerHTML = renderProfileView(); break;
    default: container.innerHTML = renderHomeView();
  }
}

function renderHomeView() {
  const recAct = ACTIVITIES[STATE.activityIndex] || ACTIVITIES[0];

  return `
    <div class="dashboard-hero">
      <div class="dash-top-bar">
        <div>
          <h1 class="greeting-title">GOOD EVENING, ${STATE.user.name.toUpperCase()} 👋</h1>
          <p class="greeting-sub">Your next move is clear. Stay consistent to reach your goal.</p>
        </div>
        <div class="user-level-badge">
          <div class="level-num">Level ${STATE.user.level}</div>
          <div class="level-xp">${STATE.user.xp} / 1000 XP</div>
        </div>
      </div>

      <div class="dash-stats-row">
        <div class="stat-pill">
          <div class="stat-val gradient-text">${STATE.user.goal}</div>
          <div class="stat-label">MAIN QUEST TARGET</div>
        </div>
        <div class="stat-pill">
          <div class="stat-val">${STATE.user.progress}%</div>
          <div class="stat-label">CAREER READINESS</div>
        </div>
        <div class="stat-pill">
          <div class="stat-val">🔥 ${STATE.user.streak} Days</div>
          <div class="stat-label">CURRENT STREAK</div>
        </div>
        <div class="stat-pill">
          <div class="stat-val">🏆 ${STATE.user.completedCount}</div>
          <div class="stat-label">QUESTS COMPLETED</div>
        </div>
      </div>
    </div>

    ${STATE.coachBannerNotice ? `<div class="coach-notice-banner">${STATE.coachBannerNotice}</div>` : ''}

    <div class="next-move-card">
      <div class="next-move-header">
        <span class="next-tag">NEXT MOVE</span>
        <div class="meta-info">
          <span>⏱ ${recAct.time} min</span>
          <span style="color:var(--success);">+${recAct.xp} XP</span>
          <span>⚡ ${recAct.type}</span>
        </div>
      </div>

      <h2 class="next-move-title">${recAct.title}</h2>
      <p class="recommendation-reason">"${recAct.reason}"</p>

      <div class="next-move-actions">
        <button class="btn primary lg" id="dash-btn-start-quest" data-act-id="${recAct.id}">START QUEST →</button>
        <button class="btn secondary" id="dash-btn-why-this" data-act-id="${recAct.id}">Why this?</button>
        <button class="btn secondary" id="dash-btn-complete-act" data-act-id="${recAct.id}">Mark Complete</button>
        <button class="btn ghost" id="dash-btn-skip-act" data-act-id="${recAct.id}">Skip</button>
      </div>
    </div>

    <div class="quest-path-section">
      <h3>Quest Path Milestone Journey</h3>
      <div class="path-nodes-row">
        ${QUEST_MAP_NODES.map((node, i) => `
          <div class="path-node-item ${node.status}" data-node-idx="${i}">
            <div class="path-node-bubble">${node.status === 'complete' ? '✓' : node.status === 'current' ? '⚡' : '🔒'}</div>
            <span class="path-node-title">${node.title}</span>
          </div>
          ${i < QUEST_MAP_NODES.length - 1 ? `<div class="path-connector-line ${node.status === 'complete' ? 'active' : ''}"></div>` : ''}
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom:32px;">
      <h3>Target Skill Proficiency</h3>
      <div class="skills-grid">
        ${Object.entries(STATE.user.skills).map(([skill, pct]) => {
          const status = pct >= 75 ? 'strong' : pct >= 40 ? 'practice' : 'gap';
          const label = pct >= 75 ? 'Strong' : pct >= 40 ? 'Needs Practice' : 'Priority Gap';
          return `
            <div class="skill-card" data-skill-name="${skill}">
              <div class="skill-card-top">
                <span class="skill-name">${skill}</span>
                <span class="skill-status-tag ${status}">${label}</span>
              </div>
              <div class="skill-progress-bar"><div class="skill-progress-fill" style="width:${pct}%"></div></div>
              <span class="skill-pct">${pct}% Proficiency</span>
            </div>`;
        }).join('')}
      </div>
    </div>

    <div>
      <h3>Recent Activity History</h3>
      <div class="activity-history-list">
        ${STATE.user.history.map(item => `
          <div class="history-item">
            <span class="history-title">✓ ${item.title}</span>
            <span class="history-xp">+${item.xp} XP</span>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function renderMainQuestView() {
  return `
    <h2>Main Quest Deck</h2>
    <p style="color:var(--text-muted);margin-bottom:24px;">All curated learning modules for ${STATE.user.goal}.</p>
    <div style="display:grid;gap:16px;">
      ${ACTIVITIES.map((act, i) => `
        <div class="next-move-card" style="margin-bottom:0;">
          <div class="next-move-header">
            <span class="widget-tag">MODULE 0${i + 1}</span>
            <span style="color:var(--success);font-weight:700;">+${act.xp} XP</span>
          </div>
          <h3>${act.title}</h3>
          <p style="font-size:0.85rem;color:var(--text-muted);margin:8px 0;">Skill: <b>${act.skill}</b> \vert{} Estimated time:${act.time}m</p>
          <button class="btn primary sm" id="dash-btn-start-quest" data-act-id="${act.id}">Start Module →</button>
        </div>
      `).join('')}
    </div>`;
}

function renderQuestMapView() {
  return `
    <h2>Career Roadmap Graph</h2>
    <p style="color:var(--text-muted);margin-bottom:24px;">Click any node to view detailed skill breakdown.</p>
    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      ${QUEST_MAP_NODES.map((node, i) => `
        <div class="option-card ${node.status}" style="width:100\%;max-width:480px;justify-content:space-between;" data-node-idx="${i}">
          <span><b>${i + 1}.${node.title}</b></span>
          <span class="skill-status-tag ${node.status === 'complete' ? 'strong' : node.status === 'current' ? 'gap' : ''}">
            ${node.status.toUpperCase()}
          </span>
        </div>
        ${i < QUEST_MAP_NODES.length - 1 ? `<div style="width:2px;height:20px;background:var(--border-color);"></div>` : ''}
      `).join('')}
    </div>`;
}

function renderSideQuestsView() {
  return `
    <h2>Side Quests & Practical Challenges</h2>
    <p style="color:var(--text-muted);margin-bottom:24px;">Bonus XP to accelerate career readiness.</p>
    <div class="skills-grid">
      <div class="skill-card">
        <h3>Git Workflow Mastery</h3>
        <p style="font-size:0.8rem;color:var(--text-muted);margin:8px 0;">Learn rebase, squash, and cherry-pick workflow.</p>
        <button class="btn secondary sm" onclick="showToast('Side quest accepted!')">Accept Quest (+25 XP)</button>
      </div>
      <div class="skill-card">
        <h3>SQL Query Optimization</h3>
        <p style="font-size:0.8rem;color:var(--text-muted);margin:8px 0;">Optimize complex join queries for large tables.</p>
        <button class="btn secondary sm" onclick="showToast('Side quest accepted!')">Accept Quest (+30 XP)</button>
      </div>
    </div>`;
}

function renderProgressView() {
  return `
    <h2>Progress Analytics</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:20px;">
      <div class="stat-pill"><div class="stat-val">${STATE.user.xp}</div><div class="stat-label">TOTAL XP EARNED</div></div>
      <div class="stat-pill"><div class="stat-val">${STATE.user.completedCount}</div><div class="stat-label">QUESTS COMPLETED</div></div>
      <div class="stat-pill"><div class="stat-val">${STATE.user.streak} Days</div><div class="stat-label">STREAK RECORD</div></div>
    </div>`;
}

function renderChallengesView() {
  return `
    <h2>Live Weekly Coding Challenges</h2>
    <div class="next-move-card" style="margin-top:20px;">
      <span class="next-tag">LIVE CHALLENGE</span>
      <h3 style="margin-top:8px;">Matrix Operations without NumPy</h3>
      <p style="font-size:0.85rem;color:var(--text-muted);margin:12px 0;">Write pure Python matrix transpose and multiplication functions.</p>
      <button class="btn primary sm" onclick="showToast('Joined Weekly Challenge!')">Enter Challenge →</button>
    </div>`;
}

function renderPortfolioView() {
  return `
    <h2>Proof of Work Portfolio</h2>
    <p style="color:var(--text-muted);margin-bottom:20px;">Verified projects ready for recruiters.</p>
    <div class="skill-card">
      <h3>Customer Churn Prediction Model</h3>
      <p style="font-size:0.8rem;color:var(--text-muted);margin:8px 0;">Status: Verified ✓ | Accuracy: 88.4%</p>
      <button class="btn ghost sm" onclick="showToast('Exporting portfolio...')">Export Proof Certificate</button>
    </div>`;
}

function renderCareerReadinessView() {
  return `
    <h2>Career Readiness Index</h2>
    <div class="dashboard-hero" style="margin-top:20px;">
      <h3 class="gradient-text">${STATE.user.goal} Target Match: 68%</h3>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:8px;">Close Machine Learning gap to reach 80% market readiness threshold.</p>
    </div>`;
}

function renderCoachView() {
  return `
    <h2>AI Quest Coach Companion</h2>
    <div class="next-move-card" style="margin-top:20px;">
      <div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;">
        <span style="font-size:2rem;">🤖</span>
        <div>
          <h4>Quest Coach Advice</h4>
          <p style="font-size:0.8rem;color:var(--text-muted);">Real-time career gap analysis</p>
        </div>
      </div>
      <p style="font-size:0.9rem;line-height:1.6;">"Hello ${STATE.user.name}! Based on your target goal <b>${STATE.user.goal}</b>, your highest priority skill gap is <b>Machine Learning (${STATE.user.skills["Machine Learning"] || 25}%)</b>. I recommend completing <i>Supervised ML Model Training</i> next."</p>
    </div>`;
}

function renderProfileView() {
  return `
    <h2>User Profile</h2>
    <div class="auth-card" style="max-width:100%;margin-top:20px;">
      <h3>${STATE.user.name}</h3>
      <p style="color:var(--text-muted);margin-bottom:16px;">${STATE.user.email} | Goal: ${STATE.user.goal}</p>
      <button class="btn secondary" id="profile-logout-btn">Logout</button>
    </div>`;
}

/* ============ CENTRALIZED EVENT DELEGATION SYSTEM ============ */
document.addEventListener("click", e => {
  const target = e.target.closest("button, a, [data-action], [data-nav], [data-act-id], [data-onb-val], [data-assess-ans], [data-quest-ans], [data-skill-name], [data-node-idx], .link-btn, .back-link");
  
  if (e.target.id === "modal" && e.target === e.target) {
    closeModal();
    return;
  }

  if (!target) return;

  const id = target.id;
  const ds = target.dataset;
  const action = ds.action;

  // LANDING / BACK ACTIONS
  if (action === "go-landing" || id === "signup-back-btn" || id === "login-back-btn") {
    navigateTo("landing");
    return;
  }
  if (id === "nav-btn-login" || id === "link-to-login") {
    navigateTo("login");
    return;
  }
  if (id === "nav-btn-signup" || id === "hero-btn-start" || id === "footer-btn-start" || id === "link-to-signup") {
    navigateTo("signup");
    return;
  }
  if (id === "hero-btn-demo" || id === "btn-login-demo") {
    demoLogin();
    return;
  }

  // THEME TOGGLES
  if (id === "landing-theme-toggle" || id === "signup-theme-toggle" || id === "login-theme-toggle" || id === "sidebar-theme-toggle" || target.classList.contains("btn-theme-toggle")) {
    toggleTheme();
    return;
  }

  // AUTH SUBMITS
  if (id === "btn-submit-signup") {
    e.preventDefault();
    handleSignupSubmit();
    return;
  }
  if (id === "btn-submit-login") {
    e.preventDefault();
    demoLogin();
    return;
  }

  // ONBOARDING
  if (ds.onbVal !== undefined) {
    const step = STATE.onboarding.step;
    const keys = ["goal", "level", "interests", "time"];
    const key = keys[step];
    if (key === "interests") {
      const idx = STATE.onboarding.interests.indexOf(ds.onbVal);
      if (idx > -1) STATE.onboarding.interests.splice(idx, 1);
      else STATE.onboarding.interests.push(ds.onbVal);
    } else {
      STATE.onboarding[key] = ds.onbVal;
    }
    renderOnboarding();
    return;
  }
  if (id === "onb-prev-btn") {
    STATE.onboarding.step = Math.max(0, STATE.onboarding.step - 1);
    renderOnboarding();
    return;
  }
  if (id === "onb-next-btn") {
    if (STATE.onboarding.step < 3) {
      STATE.onboarding.step += 1;
      renderOnboarding();
    } else {
      navigateTo("assessment");
      renderAssessment();
    }
    return;
  }

  // ASSESSMENT
  if (ds.assessAns !== undefined) {
    const qIdx = STATE.assessment.q;
    if (+ds.assessAns === ASSESSMENT_QS[qIdx].ans) STATE.assessment.score += 1;
    STATE.assessment.q += 1;
    renderAssessment();
    return;
  }
  if (id === "btn-finish-assessment") {
    saveUserToStorage();
    navigateTo("app");
    renderApp();
    return;
  }

  // APP NAVIGATION
  if (ds.nav !== undefined) {
    setAppView(ds.nav);
    return;
  }

  // DASHBOARD QUEST ACTIONS
  if (ds.actId !== undefined) {
    if (id === "dash-btn-start-quest" || id === "modal-start-quest-btn") {
      closeModal();
      startQuest(+ds.actId);
      return;
    }
    if (id === "dash-btn-why-this") {
      showWhyThisModal(+ds.actId);
      return;
    }
    if (id === "dash-btn-complete-act") {
      markActivityComplete(+ds.actId);
      return;
    }
    if (id === "dash-btn-skip-act") {
      skipActivity(+ds.actId);
      return;
    }
  }

  // QUEST EXECUTIONS & COMPLETIONS
  if (ds.questAns !== undefined) {
    const q = STATE.quest.act.questions[STATE.quest.q];
    if (+ds.questAns === q.ans) STATE.quest.score += 1;
    STATE.quest.q += 1;
    renderQuest();
    return;
  }
  if (id === "btn-quest-to-dashboard") {
    navigateTo("app");
    renderApp();
    return;
  }
  if (id === "btn-quest-continue" && ds.nextAct !== undefined) {
    startQuest(+ds.nextAct);
    return;
  }

  // MODAL & INTERACTIVE CARDS
  if (id === "modal-close") {
    closeModal();
    return;
  }
  if (ds.skillName !== undefined) {
    showSkillModal(ds.skillName);
    return;
  }
  if (ds.nodeIdx !== undefined) {
    showNodeModal(+ds.nodeIdx);
    return;
  }

  // LOGOUT
  if (id === "sidebar-logout" || id === "profile-logout-btn") {
    logout();
    return;
  }
});

// FORM LISTENERS FOR ENTER KEY PRESSES
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", e => {
      e.preventDefault();
      handleSignupSubmit();
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      demoLogin();
    });
  }
});

/* ============ INITIALIZATION ============ */
function init() {
  setTheme(STATE.theme);
  const saved = loadUserFromStorage();

  if (saved) {
    STATE.user = saved;
    navigateTo("app");
    renderApp();
  } else {
    navigateTo("landing");
  }
}

init();