const task = {

taskEvent : function () {
//Pour masquer la div Profil
const profil = document.querySelector('.hide');
//console.log(profil);
profil.style.display = 'none';
//Pour afficher la div Profil
let togg1 = document.getElementById("togg1");
togg1.addEventListener("click", () => {
    profil.style.display = "block";
})
    }    
}

