chaine = document.querySelector('#chaine')
div = document.querySelector('.MyDiv')
function inverse(s)  {
    return s.split("").reverse().join("");
}

function trouver(e){
    console.log(e)
    if(e.keyCode == 51){
        return true
    }else {
        return false
    }
}
chaine.addEventListener('keyup',(e) => {
    

})



