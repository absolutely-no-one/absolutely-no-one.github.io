function jumpTo(element) {
    Jump(element);
}

function redirectTo(uuid) {
    window.open('https://awesome-e.github.io/hs-tools/play-project/?id=' + uuid); // Via Awesome_E's play project tool
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'f') {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
});
/*
$.getJSON("questions.json", function(json) {
    let questions = json;
    for (i=0; i<questions.length; i++) {
        var element = document.getElementById('questions');
        var question = document.createElement('p');
        var answer = document.createElement('p');
        question.setAttribute('class', 'question');
        question.appendChild(document.createTextNode(questions[i].question));
        answer.appendChild(document.createTextNode(questions[i].answer));
        question.style.textTransform = 'capitalize';
        element.appendChild(question);
        element.appendChild(answer);
    }
});
*/

// above will be fully implemented later