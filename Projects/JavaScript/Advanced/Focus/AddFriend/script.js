var isStatus = document.querySelector("#pstatus")
var addF = document.querySelector("#add")
var flag=0

addF.addEventListener("click",function(){
    if(flag ==0){
        isStatus.textContent ="She is Your Friend"
        isStatus.style.color="green"
        addF.textContent="Remove friend"
        flag=1
    }else{
        isStatus.style.color="red"
        isStatus.textContent="stranger"
        addF.textContent="add friend"
        flag=0
    }
})