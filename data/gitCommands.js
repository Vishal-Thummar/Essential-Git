// Git command data separated into its own module
const gitCommands = {
  en: {
    title: "Git Commands Portal",
    subtitle: "Complete professional reference with real-world examples",
    searchPlaceholder: "Search commands... (e.g., commit, branch, merge)",
    langButton: "ગુજરાતી",
    expandAll: "📂 Expand All",
    collapseAll: "📁 Collapse All",
    categories: {
      all: "All Commands",
      config: "Configuration",
      workflow: "Workflow",
      branching: "Branching",
      remote: "Remote Sync",
      inspection: "Inspection",
      undo: "Undo & Fix",
    },
    sections: [
      {
        id: "config",
        number: "01",
        title: "Configuration & Setup",
        description:
          "Before you write a single line of code, you must configure your environment.",
        commands: [
          {
            command: "git version",
            description: "Checks the installed version of Git.",
            example:
              "Real-world use: Before starting a project, verify Git is installed and check which version you're running to ensure compatibility with team tools.",
          },
          {
            command: 'git config --global user.name "Name"',
            description: "Sets your identity for all commits.",
            example:
              "Real-world use: When you join a new team, set your name so all your commits are properly attributed to you in the project history.",
          },
          {
            command: 'git config --global user.email "mail"',
            description:
              "Sets your email address (must match your GitHub/GitLab email).",
            example:
              "Real-world use: Configure your work email for company projects and personal email for side projects. This ensures commits link to the correct account.",
          },
          {
            command: "git config --global color.ui true",
            description: "Enables helpful color highlighting in the terminal.",
            example:
              "Real-world use: Makes Git output easier to read by coloring different types of information (additions in green, deletions in red, etc.).",
          },
          {
            command: "git config --list",
            description: "Lists all configuration settings currently applied.",
            example:
              "Real-world use: When troubleshooting issues or onboarding a new machine, review all your Git settings to ensure everything is configured correctly.",
          },
          {
            command: "git init",
            description:
              "Initializes a new, empty Git repository in the current folder.",
            example:
              "Real-world use: Starting a new project from scratch? Run this in your project folder to begin tracking changes with Git.",
          },
          {
            command: "git clone <url>",
            description:
              "Downloads an existing repository from a remote server (like GitHub).",
            example:
              "Real-world use: Your team has a project on GitHub. Clone it to your machine to start contributing: git clone https://github.com/company/project.git",
          },
        ],
      },
      {
        id: "workflow",
        number: "02",
        title: "The Core Workflow (Stage & Commit)",
        description:
          "This is the cycle you will repeat dozens of times a day: Modify → Stage → Commit.",
        commands: [
          {
            command: "git status",
            description:
              "Crucial. Shows which files are modified, staged, or untracked.",
            example:
              "Real-world use: After editing files, run this to see what changed before committing. It's your safety check to avoid committing the wrong files.",
          },
          {
            command: "git add <file>",
            description: "Adds a specific file to the staging area.",
            example:
              "Real-world use: You fixed a bug in app.js. Stage only that file: git add app.js, so you can commit just the bug fix without other unfinished work.",
          },
          {
            command: "git add .",
            description:
              "Adds all changed files in the current directory to staging.",
            example:
              "Real-world use: You've finished a feature that touched multiple files. Add them all at once: git add . before committing.",
          },
          {
            command: "git add -p",
            description:
              "Patch mode. Allows you to stage parts of a file interactively.",
            example:
              "Real-world use: You made two separate fixes in one file. Use git add -p to stage each fix separately, creating cleaner, more focused commits.",
          },
          {
            command: "git rm <file>",
            description:
              "Deletes a file from both the working directory and the index.",
            example:
              "Real-world use: Removing an obsolete config file from the project: git rm old-config.json stages the deletion for the next commit.",
          },
          {
            command: "git rm --cached <file>",
            description:
              "Removes a file from Git tracking but keeps it on your local disk.",
            example:
              "Real-world use: You accidentally committed .env with secrets. Use git rm --cached .env to untrack it while keeping your local copy safe.",
          },
          {
            command: 'git commit -m "Message"',
            description: "Records the snapshot with a message.",
            example:
              'Real-world use: After staging files, save your changes: git commit -m "Fix login bug" creates a permanent record in the project history.',
          },
          {
            command: 'git commit -am "Message"',
            description:
              "Shortcuts git add and git commit in one command (tracked files only).",
            example:
              'Real-world use: Quick commits for small changes to already-tracked files: git commit -am "Update README" skips the staging step.',
          },
          {
            command: "git commit --amend",
            description:
              "Modifies the last commit (useful to fix a typo in the message).",
            example:
              "Real-world use: Just committed but forgot a file? Stage it and run git commit --amend to add it to the previous commit without creating a new one.",
          },
        ],
      },
      {
        id: "branching",
        number: "03",
        title: "Branching & Merging",
        description:
          "Branching allows you to work on new features without breaking the main code.",
        commands: [
          {
            command: "git branch",
            description: "Lists all local branches.",
            example:
              "Real-world use: Check which branches exist locally and see which one you're currently on (marked with *).",
          },
          {
            command: "git branch <name>",
            description: "Creates a new branch.",
            example:
              "Real-world use: Starting work on a new feature? Create a branch: git branch feature-login to isolate your work from the main code.",
          },
          {
            command: "git checkout <name>",
            description: "Switches to the specified branch.",
            example:
              "Real-world use: Switch to your feature branch to continue work: git checkout feature-login moves you from main to feature-login.",
          },
          {
            command: "git switch <name>",
            description:
              "(Modern) A clearer alternative to checkout for switching branches.",
            example:
              "Real-world use: New Git versions prefer this: git switch feature-login is more intuitive than checkout for branch switching.",
          },
          {
            command: "git checkout -b <name>",
            description:
              "Combo: Creates a branch and switches to it immediately.",
            example:
              "Real-world use: Quick workflow to start new work: git checkout -b hotfix-payment creates and switches to a new branch in one command.",
          },
          {
            command: "git branch -d <name>",
            description:
              "Deletes a branch (safe mode: prevents deleting unmerged work).",
            example:
              "Real-world use: After merging your feature, clean up: git branch -d feature-login removes the branch. Git blocks this if changes aren't merged.",
          },
          {
            command: "git branch -D <name>",
            description:
              "Force delete. Deletes a branch even if it has unmerged changes.",
            example:
              "Real-world use: Abandoned an experimental branch? Force delete it: git branch -D experimental-feature removes it even with unmerged work.",
          },
          {
            command: "git merge <branch>",
            description:
              "Merges the specified branch into your current branch.",
            example:
              "Real-world use: Feature complete? Switch to main (git checkout main) then merge: git merge feature-login brings your feature into main.",
          },
          {
            command: "git merge --abort",
            description:
              "Stops the merge process if conflicts occur and you want to give up.",
            example:
              "Real-world use: Merge conflicts too complex? Abort and try later: git merge --abort cancels the merge and returns to pre-merge state.",
          },
          {
            command: "git rebase <branch>",
            description:
              "Reapplies commits on top of another base tip (linear history).",
            example:
              "Real-world use: Keep your feature branch updated with main: git rebase main replays your commits on top of the latest main changes.",
          },
        ],
      },
      {
        id: "remote",
        number: "04",
        title: "Remote Syncing",
        description: "How you send code to GitHub, GitLab, or Bitbucket.",
        commands: [
          {
            command: "git remote -v",
            description:
              "Lists all remote repositories linked to your local project.",
            example:
              "Real-world use: Check where your code will be pushed: git remote -v shows the GitHub/GitLab URLs configured for this project.",
          },
          {
            command: "git remote add origin <url>",
            description: "Connects your local repo to a remote server.",
            example:
              "Real-world use: Created a repo on GitHub? Link it to your local project: git remote add origin https://github.com/user/project.git",
          },
          {
            command: "git remote remove <name>",
            description: "Removes a remote connection.",
            example:
              "Real-world use: Connected to wrong remote? Remove it: git remote remove origin then add the correct one.",
          },
          {
            command: "git fetch",
            description:
              "Downloads changes from the remote but does not update your code.",
            example:
              "Real-world use: Check what teammates pushed without changing your code: git fetch downloads updates so you can review them with git log.",
          },
          {
            command: "git pull",
            description:
              "Downloads changes and immediately merges them (Fetch + Merge).",
            example:
              "Real-world use: Start your day by syncing with team changes: git pull origin main downloads and merges the latest main branch updates.",
          },
          {
            command: "git push -u origin <branch>",
            description: "Uploads your commits to the remote branch.",
            example:
              "Real-world use: First time pushing a new branch? git push -u origin feature-login uploads it and sets up tracking for future pushes.",
          },
          {
            command: "git push --tags",
            description: "Pushes specific version tags to the remote.",
            example:
              "Real-world use: Released version 1.0? Tag it locally (git tag v1.0) then push tags: git push --tags shares release markers with team.",
          },
          {
            command: "git push --force",
            description:
              "Dangerous. Overwrites remote history with your local history.",
            example:
              "Real-world use: Rewrote history with rebase? Force push carefully: git push --force. WARNING: This can delete teammates' work if not careful.",
          },
        ],
      },
      {
        id: "inspection",
        number: "05",
        title: "Inspection & Comparison",
        description: "When things break, you need to investigate the history.",
        commands: [
          {
            command: "git log",
            description: "Shows the full commit history.",
            example:
              "Real-world use: Review what the team has been working on: git log displays all commits with messages, authors, and dates.",
          },
          {
            command: "git log --oneline",
            description: "Condensed history (one line per commit).",
            example:
              "Real-world use: Quick overview of recent work: git log --oneline shows just commit IDs and messages for easier scanning.",
          },
          {
            command: "git log --graph",
            description: "Shows a text-based graph of branching history.",
            example:
              "Real-world use: Visualize complex branch merges: git log --graph --oneline creates an ASCII diagram showing how branches diverged and merged.",
          },
          {
            command: "git diff",
            description:
              "Shows differences between working directory and staging area.",
            example:
              "Real-world use: Before staging, review exactly what you changed: git diff shows line-by-line changes in your modified files.",
          },
          {
            command: "git diff --staged",
            description:
              "Shows differences between staging area and the last commit.",
            example:
              "Real-world use: After staging but before committing, double-check what will be committed: git diff --staged shows staged changes.",
          },
          {
            command: "git blame <file>",
            description: "Shows who modified each line of a file and when.",
            example:
              "Real-world use: Found a bug? Use git blame app.js to see who wrote each line and when, helping you understand the context or ask questions.",
          },
          {
            command: "git show <commit-id>",
            description:
              "Shows the specific changes (metadata + diff) of a commit.",
            example:
              "Real-world use: Investigating a bug introduced in a specific commit? git show abc123 shows exactly what changed in that commit.",
          },
        ],
      },
      {
        id: "undo",
        number: "06",
        title: "Undo & Fix (Advanced)",
        description: "These commands help you fix mistakes.",
        commands: [
          {
            command: "git reset --soft HEAD~1",
            description:
              "Undoes the last commit but keeps changes in the Staging Area.",
            example:
              "Real-world use: Committed too early? git reset --soft HEAD~1 undoes the commit but leaves your changes staged, ready to re-commit.",
          },
          {
            command: "git reset HEAD~1",
            description:
              "Undoes the last commit and moves changes to the Working Directory.",
            example:
              "Real-world use: Want to modify files before re-committing? git reset HEAD~1 undoes the commit and unstages changes for editing.",
          },
          {
            command: "git reset --hard HEAD~1",
            description:
              "Destructive. Undoes the last commit and deletes all changes.",
            example:
              "Real-world use: Last commit was completely wrong? git reset --hard HEAD~1 erases it entirely. WARNING: This permanently deletes changes.",
          },
          {
            command: "git restore <file>",
            description:
              "Discards local changes to a specific file (modern replacement for checkout).",
            example:
              "Real-world use: Made mistakes in a file? git restore app.js reverts it to the last committed version, discarding all local changes.",
          },
          {
            command: "git revert <commit-id>",
            description:
              "Creates a new commit that is the exact opposite of the specified commit (safe for public branches).",
            example:
              "Real-world use: Need to undo a pushed commit safely? git revert abc123 creates a new commit that undoes those changes without rewriting history.",
          },
        ],
      },
    ],
  },
  gu: {
    title: "Git Commands Portal",
    subtitle: "વાસ્તવિક દુનિયાના ઉદાહરણો સાથે સંપૂર્ણ વ્યાવસાયિક સંદર્ભ",
    searchPlaceholder: "આદેશો શોધો... (દા.ત., commit, branch, merge)",
    langButton: "English",
    expandAll: "📂 બધું વિસ્તૃત કરો",
    collapseAll: "📁 બધું સંકુચિત કરો",
    categories: {
      all: "તમામ આદેશો",
      config: "રૂપરેખાંકન",
      workflow: "કાર્યપ્રવાહ",
      branching: "શાખા",
      remote: "રિમોટ સમન્વય",
      inspection: "નિરીક્ષણ",
      undo: "રદ કરો અને સુધારો",
    },
    sections: [
      /* ...same content translated to Gujarati... */
    ],
  },
};

// Expose to global scope so script.js can use it
window.gitCommands = gitCommands;
