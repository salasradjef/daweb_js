
let chaine = document.querySelector('#chaine')
let ch = document.querySelector('#ch')
let div = document.querySelector('.MyDiv')
let bool = false
function inverse(s)  {
    return s.split("").reverse().join("");
}

function trouver(s){
    bool = false
    for(let i = 0; i<= s.length; i++){
        if(s[i] == "#"){
            bool=true
        }
    }

    if(bool == true){
        chaine.setAttribute('style','border: 4px solid green;')
        //chaine.setAttribute('class','phraseCorrecte')
    }else{
        chaine.setAttribute('style','border: 4px solid red;')
        //chaine.setAttribute('class','phraseErronee')
    }

    
    
}
chaine.addEventListener('keyup',() => {
    s = chaine.value.split("")
    ch.setAttribute('value',inverse(chaine.value))
    trouver(s)
   

    }   
   
)





//Partie 2
pwd1 = document.querySelector('#pwd1')
pwd2 = document.querySelector('#pwd2')
btn = document.querySelector('#sub')
function checkPassword(){
if(pwd1.value != pwd2.value){
    pwd1.setAttribute('class','phraseErronee')
    pwd2.setAttribute('class','phraseErronee')
    btn.setAttribute('disabled',true)
}else {
    pwd1.setAttribute('class','phraseCorrecte')
    pwd2.setAttribute('class','phraseCorrecte')
    btn.removeAttribute('disabled')
}
}