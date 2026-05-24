const completeButton = document.querySelector("#completeTask");
const branchButton = document.querySelector("#changeBranch");
const doneCount = document.querySelector("#doneCount");
const branchName = document.querySelector("#branchName");
const terminalText = document.querySelector("#terminalText");

const branches = ["master", "feature/site", "practice/buttons", "fix/layout"];
let branchIndex = 0;

completeButton.addEventListener("click", () => {
  const currentValue = Number(doneCount.textContent);
  doneCount.textContent = currentValue + 1;
  terminalText.textContent = `git add .
git commit -m "finish task ${currentValue + 1}"
[${branchName.textContent} 8f3a2c1] finish task ${currentValue + 1}`;
});

branchButton.addEventListener("click", () => {
  branchIndex = (branchIndex + 1) % branches.length;
  const nextBranch = branches[branchIndex];

  branchName.textContent = nextBranch;
  terminalText.textContent = `git switch ${nextBranch}
Switched to branch '${nextBranch}'
git status
On branch ${nextBranch}`;
});
