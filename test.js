function calculatePercentage() {
    let score = parseInt(document.getElementById("score").value);
    let totalScore = parseInt(document.getElementById("total-score").value);

    let percentage = (score / totalScore) * 100;

    document.getElementById("percentage").textContent =  percentage + "%";
}