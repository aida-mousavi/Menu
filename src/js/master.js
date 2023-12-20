let chooseBtn=document.querySelector("#chooseBtn").querySelectorAll('button')
let cardBox=document.querySelector("#cardBox").querySelectorAll('article')
let ctg
let find
chooseBtn.forEach((item)=>{
  item.addEventListener('click',()=>{
    ctg=item.getAttribute('data-choose')
    printCard()
  })
})
function printCard(){
  cardBox.forEach((item)=>{
    find=item.getAttribute('data-title')
    if(ctg==find){
        item.style.cssText='display:flex; flex-wrap:wrap'
      }else{
          item.style.display='none'
        
        }
      })
    }
    printCard()