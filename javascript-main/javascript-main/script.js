console.log('here')
var reservation = []
function book(item){
    reservation.push(item)
    console.log('item',reservation)
}
function validateEmail(e){
    console.log(e)
    const isValid =  String(e.target.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    const errorDiv = document.getElementById('error-mail')
    if (isValid) {
        errorDiv.style.display = "none";
      } else {
        errorDiv.style.display = "block";
        document.getElementById('email').style.borderColor  = "red"
      }

 
}
function calculateTotal(type){
  let nbrPerson = document.getElementById("nbrPerson").value 
  if(type === "plus") {nbrPerson++ }
  if(type === "minus") {nbrPerson--}
  const natureTable1 = document.getElementsByName("natureTable")[0].checked ? 10 : 0
  const natureTable2 = document.getElementsByName("natureTable")[1].checked ? 20 : 0
  const emplacement1 = document.getElementsByName('emplacement')[0].checked ? 10 : 0
  const emplacement2 = document.getElementsByName('emplacement')[1].checked ? 20 : 0
  const menu1 = document.getElementsByName('menu')[0].checked ? 45 : 0
  const menu2 = document.getElementsByName('menu')[1].checked ? 55 : 0
  const total = (parseInt(nbrPerson)*( menu1 + menu2))+(natureTable1 + natureTable2 + emplacement1 + emplacement2)
  
  document.getElementById('total').innerHTML = total > 0? total : 0 
}




const pls=document.getElementsByClassName('plus'); 
console.log(pls)
for(let j of pls)
j.addEventListener('click',function(){
    j.previousElementSibling.value++
})

const min=document.getElementsByClassName('min');
for(let k of min)
k.addEventListener('click',function(){
    const p=k.nextElementSibling.value
    if(p>0){    k.nextElementSibling.value--
    }})




