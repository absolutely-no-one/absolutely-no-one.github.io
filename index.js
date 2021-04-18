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

$.getJSON("questions.json", function(json) {
    let questions = json;
    for (i=0; i<questions.length; i++) {
        // initialize variables to create elements
        if (questions[i].type == 'hopscotch') {
            var element = document.getElementById('hopscotch-questions');
        } else if (questions[i].type == 'coding') {
            var element = document.getElementById('coding-questions');
        } else {
            var element = document.getElementById('other-questions');
        }
        var question = document.createElement('p');
        var answer = document.createElement('p');
        var asker = document.createElement('p');
        var lineBreak = document.createElement('hr');
        // add classes and ids to the elements, important for styling
        question.setAttribute('id', 'question' + i);
        question.setAttribute('class', 'question mui-panel deep-blue title is-2 has-text-white');
        asker.setAttribute('class', 'asker text has-text-white');
        answer.setAttribute('class', 'answer text has-text-white');
        // add text to the elements
        question.appendChild(document.createTextNode(questions[i].question));
        asker.appendChild(document.createTextNode('Asked by ' + questions[i].askedBy));
        answer.appendChild(document.createTextNode(questions[i].answer));
        // appends the children to the html page
        element.appendChild(question);
        document.getElementById('question' + i).appendChild(asker);
        document.getElementById('question' + i).appendChild(lineBreak);
        document.getElementById('question' + i).appendChild(answer);
    }
});

$.getJSON('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://c.gethopscotch.com/api/v2/users/3944888/published_projects?api_token=4f7769439adf7ef8e482d2daef77375cd6d0158b65fcdca543b74b5c0c92&user%5Bauth_token%5D=qKok4lCx8YB9Wgp%2Bo862AA%3D%3D&user%5Bid%5D=4753230'), function(json) {
    let user = json;
    let projectUUIDS = []
    for (i=0; i<10; i++) {
        projectUUIDS.push(user.projects[i].uuid);
        var element = document.getElementById('recent-projects');
        var project = document.createElement('div');
        var title = document.createElement('div');
        var thumbnail = document.createElement('div');
        var stats = document.createElement('p');

        project.setAttribute('id', 'project' + i);
        project.setAttribute('class', 'project-title mui-panel has-text-centered');

        title.setAttribute('class', 'title is-3');
        title.appendChild(document.createTextNode(user.projects[i].title));

        thumbnail.setAttribute('id', 'thumbnail' + i);
        thumbnail.setAttribute('class', 'thumbnail');

        stats.setAttribute('class', 'text is-2');
        stats.appendChild(document.createTextNode(user.projects[i]['number_of_stars'] + ' likes, ' + user.projects[i].plants + ' plants'));

        element.appendChild(project);
        project.appendChild(title)
        project.appendChild(stats)
        document.getElementById('project' + i).appendChild(thumbnail);
        
        thumbnail.style.backgroundImage = 'url(' + user.projects[i]['screenshot_url'] + ')';
        document.getElementById('thumbnail' + i).addEventListener('click', function(e) { 
            var selectedChild = [].slice.call(document.getElementById('recent-projects').querySelectorAll('.thumbnail'), 0);
            var n = selectedChild.indexOf(e.target);
            redirectTo(user.projects[n].uuid); 
        });
    }
})
