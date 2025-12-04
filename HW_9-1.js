let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

for(let item of coursesArray){
    let card = document.createElement("div");
    card.classList.add("card");
    let cardHeading = document.createElement("div");
    cardHeading.classList.add("card__heading");
    let headingH2 = document.createElement("h2");
    headingH2.innerText = item.title
    let headingPMonth = document.createElement("p");
    headingPMonth.innerText = `Months: ${item.monthDuration}`;
    let headingPHour = document.createElement("p");
    headingPHour.innerText = `Hours: ${item.hourDuration}`;
    let cardBody = document.createElement("div");
    card.classList.add("card__body");
    let cardList = document.createElement("ul");
    for (let module of item.modules) {
        let li = document.createElement("li");
        li.innerText = module;
        cardList.appendChild(li);
    }
    cardBody.appendChild(cardList);
    cardHeading.append(headingH2, headingPMonth, headingPHour);
    card.append(cardHeading, cardBody);
    containerDiv.append(card);
}
