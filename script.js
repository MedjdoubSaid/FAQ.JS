/* console.log('connecté!');
const questions = document.querySelectorAll('.question');
console.log(questions);

const tableau = ["texte 1","texte 2","texte 3"];
//const element = nomDuTableau[index];

//j'accède à un éiément précis du tableau questions en écrivant
// tableau[index];
const deux = questions[2];
console.log(deux);

// je soumets chaque element du tableau à la méme action
// cette écriture renvois une erreur 
//tableau.addEventListener
questions.addEventlistener('click',function(){
    console.log('tableau cliqué');
    
});
questions.forEach((item)=>{
    console.log('item');
item.addEventlistener('click',function(){
    console.log('item cliqué');
    //je sélectionne et stocke la div suivante de l'item cliqué
    const next = item.nextElementSibling;
    console.loge(next);
    // On rend visible ou invisible la réponse
    next.classList.toggle('visible'); 

        // Je cible et stocke l'icône de item
        icone = item.lastElementChild; 
        console.log(icone); 
        icone.classList.toggle('fa-chevron-up'); 
        


})

}); */
console.log('connecté'); 

const questions = document.querySelectorAll('.question'); 
console.log(questions); 

// Cette écriture renvoie une erreur
// tableau.addEventListener
// questions.addEventListener('click', function(){
//     console.log('tableau cliqué'); 
// }); 

// J'accède à un élément précis du tableau questions en écrivant
// tableau[index]; 
const deux = questions[2]; 
console.log(deux); 

deux.addEventListener('click', function(){
    // console.log('question 3 cliquée'); 
}); 

questions.forEach(item => {
    console.log('item'); 
    // Chaque élément du tableau est représenté par item
    // Maintenant chaque élément du tableau (item) est soumis à une action au clic
    item.addEventListener('click', function(){
        console.log('item cliqué'); 
        // je sélectionne et stocke la DIV suivante de l'item cliqué
        const next = item.nextElementSibling;
        console.log(next); 
        // On rend visible ou invisible la réponse
        next.classList.toggle('visible'); 

        // Je cible et stocke l'icône de item
        icone = item.lastElementChild; 
        console.log(icone); 
        icone.classList.toggle('fa-chevron-up'); 
        

    });
}); 


