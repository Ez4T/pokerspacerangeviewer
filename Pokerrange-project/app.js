let img = document.querySelector('img#rfi');
let UTG = document.querySelector('#UTG');
let UTG_1 = document.querySelector('#UTG_1');

UTG.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_UTG.png';
})

UTG_1.addEventListener('click', () => {
    img.src = 'preflop_img/RFI_UTG+1.png';
})
