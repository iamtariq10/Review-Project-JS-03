let reviews = [
    {
        id:1,
        person:"John",
        title:"UI Designer",
        img:'./images/img 2.jpg',
        info:"He is a UI Designer with 1 year of experience Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java "
    },
    {
        id:2,
        person:"Alexender",
        title:"Cloud Expert",
        img:'./images/img 3.jpg',
        info:"He is a Cloud Expert  with 1 year of experience Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"
    },
    {
        id:3,
        person:"Milton",
        title:"Adobe Expert",
        img:'./images/img 4.jpg',
        info:"He is a Adobe Expert  with 1 year of experience Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"
    },
    {
        id:4,
        person:"Phillips",
        title:"Network Engineer",
        img:'./images/img 5.jpg',
        info:"He is a Network Engineer with 1 year of experience Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"
    },
    {
        id:5,
        person:"Phillips",
        title:"Network Engineer",
        img:'./images/img 1.jpg',
        info:"He is a Network Engineer with 1 year of experience Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"
    },
]


let currentItem=0;



let img = document.getElementById('img');
let personName = document.getElementById('personName');
let personTitle = document.getElementById('personTitle');
let personPara = document.getElementById('personPara');



let nextButton = document.getElementById('nextButton')
let preButton = document.getElementById('preButton')

nextButton.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0
    }
    showPerson(currentItem)
    console.log("nextButton")
})

preButton.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    
    showPerson(currentItem)
    console.log("preButton")
})

function showPerson(person){
    let item = reviews[person];
    img.src=item.img;
    personName.textContent=item.person;
    personTitle.textContent=item.title;
    personPara.textContent=item.info;
}


randomButton.addEventListener('click',function(){
    let randomNumber= Math.floor(Math.random() * 5);
    console.log(randomNumber);
    showPerson(randomNumber);
})