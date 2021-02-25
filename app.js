
(function () {

    let gameBoard = document.querySelector('.left-side');

    // let logBtn = (e) => {
    //     console.log(e.target);
    // }

    let generateTree = (div) => {
        console.log(div);
    }

    for (let row = 0; row < 35; row++) {
        for (let col = 0; col < 40; col++) {
            let div = document.createElement('div');
            // div.style.background = 'grey';
            if(row === 28){
                div.classList.add('grass');
            }
            if (row > 28) {
                div.classList.add('soil');
            }
            if(row === 27 && col === 25){
                div.classList.add('wood');
                generateTree(div);
            }
            
            div.classList.add('hoverOpacity');
            // div.addEventListener('click', logBtn);
            gameBoard.appendChild(div);
        }
    }

    
    

})();
