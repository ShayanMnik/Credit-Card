const demo1 = document.querySelector('.second>#demo1')
const demo2 = document.querySelector('.third>.leftthird>#demo2')
const demo3 = document.querySelector('.third>.rightthrid>#demo3')
const demo4 = document.querySelector('.seccod>#demo4')
const demo5 = document.querySelector('.back>.nameonback>#demo5')
const inp1 = document.querySelector('.form>#card-num')
const inp2 = document.querySelector('.form>#name')
const inp3 = document.querySelector('.form>#expire')
const inp4 = document.querySelector('.form>#sec')
const leftbox = document.querySelector('.actionbox>.leftbox')
const card = document.querySelector('.actionbox>.leftbox>.card')
const back = document.querySelector('.actionbox>.leftbox>.back')
inp1.addEventListener("input",()=>{
    demo1.innerHTML=Number(inp1.value)
    if(inp1.value.length < 16){
        if(demo1.innerHTML.length < 4){
            demo1.innerHTML=inp1.value
        }else if(demo1.innerHTML.length==4){
            demo1.innerHTML=inp1.value.slice(0,4) + " - "
        }else if(demo1.innerHTML.length>=4 && demo1.innerHTML.length<8){
            demo1.innerHTML=inp1.value.slice(0,4) + " - " + inp1.value.slice(4,8)
        }else if(demo1.innerHTML.length>=8 && demo1.innerHTML.length<12){
            demo1.innerHTML=inp1.value.slice(0,4) + " - " + inp1.value.slice(4,8) + " - " + inp1.value.slice(8,12)
        }else if(demo1.innerHTML.length >= 12 && demo1.innerHTML.length <16){
            demo1.innerHTML=inp1.value.slice(0,4) + " - " + inp1.value.slice(4,8) + " - " + inp1.value.slice(8,12) + " - " + inp1.value.slice(12,16)
        }
    }else{
        demo1.innerHTML=inp1.value.slice(0,4) + " - " + inp1.value.slice(4,8) + " - " + inp1.value.slice(8,12) + " - " + inp1.value.slice(12,16)

    }

})
inp2.addEventListener("input",()=>{
    demo2.innerHTML=inp2.value
    let x = inp2.value.length
    if(x < 10){
        demo2.style.fontSize='20px'
    }else if(x < 18){
        demo2.style.fontSize='15px'
    }else if(x <=26){
        demo2.style.fontSize='10px'
    }else{
        demo2.style.fontSize='8px'
    }
})
inp2.addEventListener("input", ()=>{
    demo5.innerHTML=inp2.value
    let x = inp2.value.length
    if(x < 25){
        demo5.style.fontSize='20px'
    }else if(x < 35){
        demo5.style.fontSize='15px'
    }else if(x <=45){
        demo5.style.fontSize='10px'
    }}
)
inp3.addEventListener("input",()=>{
    demo3.innerHTML=inp3.value
    if(inp3.value.length < 4){
        if(demo3.innerHTML.length <= 2){
            demo3.innerHTML=inp3.value
        }else if(demo3.innerHTML.length > 2 && demo3.innerHTML.length < 4){
            demo3.innerHTML=inp3.value.slice(0,2) + "/"
        }else if(demo3.innerHTML.length==4){
            demo3.innerHTML=inp3.value.slice(0,2) + "/" + inp3.value.slice(2,4)
        }
    }else{
        demo3.innerHTML=inp3.value.slice(0,2) + "/" + inp3.value.slice(2,4)
    }
})
inp4.addEventListener("input",()=>{
    if(inp4.value.length < 6){
        demo4.innerHTML=inp4.value
    }
})
let i = true;
leftbox.addEventListener('click', () => {
    if (i) {
        card.style.transform = 'perspective(800px) rotateY(180deg)';
        back.style.transform = 'perspective(800px) rotateY(0deg)';        
        i = false;        
    } else {
        card.style.transform = 'perspective(800px) rotateY(0deg)';
        back.style.transform = 'perspective(800px) rotateY(-180deg)';
        i = true; 
    }
});

