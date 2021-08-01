const r1= document.querySelector('#r1')
const box = document.querySelector('.box')
const offsetX = document.querySelector('#offsetX')
const offsetY = document.querySelector('#offsetY')
const blur = document.querySelector('#blur')
const spread = document.querySelector('#spread')
const color = document.querySelector('#color')
const out = document.querySelector('.out')
const slider = document.querySelector('.slider')
const inset = document.querySelector('.inset')
const outset = document.querySelector('.outset')
const vertical = document.querySelector('.vertical')
const blurRa = document.querySelector('.blurRa')
const spreadEd = document.querySelector('.spreadEd')


r1.oninput= generateBoxShadow
offsetX.oninput= generateBoxShadow
offsetY.oninput= generateBoxShadow
blur.oninput= generateBoxShadow
spread.oninput= generateBoxShadow
color.oninput = generateBoxShadow
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow



function generateBoxShadow () {
    if (inset.checked){
        console.log(r1.value)
        box.style.borderRadius = r1.value + '%'
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}`
        out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value};<br>`;
        out.innerHTML += `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value};<br>`;
        out.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value};<br>`;
        slider.innerHTML = `${offsetX.value}px`
        vertical.innerHTML = `${offsetY.value}px`
        blurRa.innerHTML = `${blur.value}px`
        spreadEd.innerHTML = `${spread.value}px`

    }
    else {
        console.log(r1.value)
        box.style.borderRadius = r1.value + '%'
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} inset`
        slider.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}inset;<br>`;
        out.innerHTML += `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}inset;<br>`;
        out.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}inset;<br>`;
        slider.innerHTML = `${offsetX.value}px inset`
        vertical.innerHTML = `${offsetY.value}px inset`
        blurRa.innerHTML = `${blur.value}px inset`
        spreadEd.innerHTML = `${spread.value}px inset`
    }

inset
}
generateBoxShadow()




// const borderRadius = document.querySelector('.border-radius')
// const box = document.querySelector('.box')
// const offsetX= document.querySelector('.offsetX')
// const offsetY= document.querySelector('.offsetY')
// const blur = document.querySelector('.blur')
// const spread = document.querySelector('.spread')
// const shadowColor = document.querySelector('.shadow-color')
// const outer = document.querySelector('.out')
// const outset = document.querySelector('.outset')
// const inset = document.querySelector('.inset')
//
// //onchange
// // oninput
//
// borderRadius.oninput = cssGenerator
// offsetX.oninput = cssGenerator
// offsetY.oninput = cssGenerator
// blur.oninput = cssGenerator
// spread.oninput = cssGenerator
// shadowColor.oninput = cssGenerator
//
//
// function cssGenerator  () {
//     box.style.borderRadius = borderRadius.value + "%"
//     box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}; <br>`;
//     outer.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value};<br>`;
//     outer.innerHTML =  outer.innerHTML +`-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}; <br>`;
//     outer.innerHTML =  outer.innerHTML +`-mox-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value};`;
// }
// cssGenerator()
// console.log(inset.checked)
//
