// script.js
document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "自治体と組みたいとおもったら、まず何をする？",
            options: ["自治体に電話しまくる", "窓口へ行く", "官民連携事業研究所に頼る"],
            scores: [1, 2, 3]
        },
        {
            question: "あなたの商材は誰のため？",
            options: ["子育てパパ・ママ", "高齢者", "自治体職員"],
            scores: [3, 2, 1]
        },
        {
            question: "自治体に何を求めますか？",
            options: ["予算・お金", "法律・条例改正", "地域とのつながり"],
            scores: [2, 1, 3]
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-button");
    const resultContainer = document.getElementById("result-container");
    const resultTitle = document.getElementById("result-title");
    const resultDescription = document.getElementById("result-description");

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => {
                score += currentQuestion.scores[index];
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            });
            questionContainer.appendChild(button);
        });
    }

    function showResult() {
        questionContainer.style.display = "none";
        nextButton.style.display = "none";
        resultContainer.style.display = "block";

        if (score <= 4) {
            resultTitle.textContent = "あなたのタイプは「ひよこ」！";
            resultDescription.textContent = "まだまだわかっていません、精進しましょう。";
        } else if (score <= 6) {
            resultTitle.textContent = "あなたのタイプは「にわとり」！";
            resultDescription.textContent = "だいぶ理解があります、もっとやれます！";
        } else {
            resultTitle.textContent = "あなたのタイプは闘鶏！";
            resultDescription.textContent = "さすがです、共創しましょう！";
        }
    }

    showQuestion();
});
