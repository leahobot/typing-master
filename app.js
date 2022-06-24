const settingsBtn = document.querySelector(".setting-btn");
const settingsForm = document.querySelector(".settings");
const select = document.getElementById("select-difficulty");
const word = document.querySelector(".word");
const textInput = document.querySelector(".text");
const gameTime = document.querySelector(".game-time");
const gameScore = document.querySelector(".game-score");
const endGame = document.querySelector(".end-game");
const startBtn = document.querySelector(".start-btn");

const wordsGenerator = [
	"indifferent",
	"essay",
	"gratify",
	"overlook",
	"rue",
	"assail",
	"oversee",
	"mortify",
	"conscientious",
	"endorse",
	"trivial",
	"impudent",
	"repeal",
	"inter",
	"sagacity",
	"rave",
	"taunt",
	"incumbent",
	"epithet",
	"colossal",
	"supplicate",
	"chastise",
	"sordid",
	"clinch",
	"prodigal",
	"nave",
	"indulgent",
	"peremptory",
	"rend",
	"foreclose",
	"ostensible",
	"seemly",
	"implacable",
	"pique",
	"inscrutable",
	"irrevocable",
	"burlesque",
	"requite",
	"voluptuous",
	"dilapidated",
	"elegy",
	"propitiate",
	"clemency",
	"convoke",
	"invective",
	"espionage",
	"taut",
	"cull",
	"enunciate",
	"transcendental",
	"idyll",
	"scurvy",
	"clout",
	"brat",
	"obdurate",
	"machination",
	"epicure",
	"ingratiate",
	"obeisance",
	"gambol",
	"sinewy",
	"distraught",
	"vitiate",
	"egregious",
	"torrid",
	"coterie",
	"incriminate",
	"recumbent",
	"improvident",
	"mull",
	"inveigh",
	"overreach",
	"impasse",
	"egress",
	"dilettante",
	"inveigle",
	"protuberance",
	"fecundity",
	"conscionable",
	"paradigm",
	"prudish",
	"disabuse",
	"prosody",
	"macabre",
	"prurient",
	"turpitude",
	"iconoclastic",
	"senility",
	"tripartite",
	"contumacious",
	"amortize",
	"philistine",
	"fallibility",
	"bibulous",
	"tumid",
	"uxorious",
	"tendentious",
];

let randomWord;

let score = 0;

let time = 16;

let difficultyLevel =
	localStorage.getItem("Level of Difficulty") !== null
		? localStorage.getItem("Level of Difficulty")
		: "easy";

select.value =
	localStorage.getItem("Level of Difficulty") !== null
		? localStorage.getItem("Level of Difficulty")
		: "easy";

document.addEventListener("DOMContentLoaded", newWord);
textInput.addEventListener("keyup", typedWord);
settingsBtn.addEventListener("click", toggleHeader);
settingsForm.addEventListener("change", selectType);

textInput.focus();

function toggleHeader(event) {
	settingsForm.classList.toggle("hide");
	console.log(event);
}

function selectType(event) {
	difficultyLevel = event.target.value;
	textInput.focus();
	localStorage.setItem("Level of Difficulty", difficultyLevel);
}

function generateWord() {
	return wordsGenerator[
		Math.floor(Math.random() * wordsGenerator.length)
	].toLowerCase();
}

function addWord() {
	randomWord = generateWord();
	return (word.innerHTML = randomWord);
}

function updateScore() {
	score += 1;
	gameScore.innerText = score;
	localStorage.setItem("score", score);
}

const timeInterval = setInterval(updatetime, 1000);
function updatetime() {
	time -= 1;
	gameTime.innerText = time;
	if (time === 0) {
		clearInterval(timeInterval);
		gameOver();
	}
}

function newWord(event) {
	addWord();
	updatetime();
}

function gameOver() {
	if (localStorage.getItem("score") !== null) {
		endGame.innerHTML = `<h1>Time Out !!.. 😭😭</h1>
            <p>Your score is <strong>${score}</strong></p>
            <button onClick="location.reload()">Play Again</button>`;
		endGame.style.display = "flex";
	}
}

function typedWord(event) {
	wordtyped = event.target.value.toLowerCase();
	if (wordtyped === randomWord) {
		addWord();
		updateScore();
		event.target.value = "";
		if (difficultyLevel === "easy") {
			time = 16;
		} else if (difficultyLevel == "medium") {
			time = 11;
		} else {
			time = 7;
		}
		updatetime();
	}
}
