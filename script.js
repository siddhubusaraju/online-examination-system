
function startExam() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter name");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("exam").style.display = "block";
    document.getElementById("welcome").innerText = "Welcome " + name;
}

function calculateResult() {
    let score = 0;

    for (let i = 1; i <= 3; i++) {
        let ans = document.querySelector('input[name="q' + i + '"]:checked');
        if (ans) score += Number(ans.value);
    }

    document.getElementById("exam").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = "Score: " + score + "/2";
}
