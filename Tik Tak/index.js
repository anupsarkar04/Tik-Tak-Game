let ting=new Audio ('ting.mp3')
let Turn = 'X'

let change=()=>{
  return Turn ==='X'?'O':'X'
}
let box =document.getElementsByClassName('box')
Array.from(box).forEach(element =>{
  let boxText =element.querySelector('.gametext')
  element.addEventListener('click', ()=>{
    if(boxText.innerText ===''){
      boxText.innerText=Turn
    }
    Turn=change()
    document.getElementsByClassName('info')[0].innerText='Turn For ' +Turn
    ting.play()
    console.log(Turn)
    console.log(change)
  })
})