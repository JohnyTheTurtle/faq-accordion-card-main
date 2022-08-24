const question = document.querySelectorAll(".question button")
const answer = document.querySelectorAll(".answer")
let active = -1;
question.forEach(a=> a.addEventListener("click", () => {
    const elemId = a.parentNode.id
    if (active === -1) {
        answer[elemId].style.display = "block"
        active = elemId
    } else if (active >= 0 && active !== elemId) {
        answer[active].style.display = "none"
        answer[elemId].style.display = "block"
        setStylequestion(active)
        active = elemId
    }else if (active === elemId){
        answer[active].style.display = "none"
        setStylequestion(active)
        active = -1
        
    }
    setStyleAnswer(active)
}))

function setStyleAnswer(ID) {
    try{
    answer[ID].style.display = "block"
    question[ID].style.border = "none"
    answer[ID].style.borderBottom= "solid 1px var(--Light-grayish-blue)"
    answer[ID].style.padding= "0 0 1rem 0"
    question[ID].style.fontWeight = "700"    
    } catch(err){}
}

function setStylequestion(ID) {
    try{
        question[ID].style.borderBottom = "solid 1px var(--Light-grayish-blue)"   
        question[ID].style.fontWeight = "400"  
    } catch(err){}
}