
(function () {

    let gameBoard = document.querySelector('.left-side');

    let logBtn = (e) => {
        console.log(e.target);
    }

    const tree = [
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
    ]

    const bush = [
        [0, 1, 0],
        [1, 1, 1],
        [1, 1, 1],
    ]

    const clouds = [
        [1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1],
    ]


    for (let row = 0; row < 30; row++) {
        for (let col = 0; col < 40; col++) {

            let div = document.createElement('div');

            //generate trees
            if (row > 17 && (row - 18) < 3 && (col - 22) < 5) {
                if (tree[row - 18][col - 22] === 1) {
                    div.classList.add('leaves');
                }
            }
            if (row > 17 && (row - 18) < 3 && (col - 7) < 5) {
                if (tree[row - 18][col - 7] === 1) {
                    div.classList.add('leaves');
                }
            }
            if (row >= 21 && row < 25 && col === 24) {
                div.classList.add('wood');
            }
            if (row >= 21 && row < 25 && col === 9) {
                div.classList.add('wood');
            }
            //generate bushes
            if (row > 21 && (row - 22) < 3 && (col - 9) < 5) {
                if (bush[row - 22][col - 11] === 1) {
                    div.classList.add('leaves');
                }
            }
            if (row > 21 && (row - 22) < 3 && (col - 29) < 5) {
                if (bush[row - 22][col - 31] === 1) {
                    div.classList.add('leaves');
                }
            }
            // generate rocks
            if (row === 24 && col > 19 && col < 23) {
                div.classList.add('rock');
            }
            if (row === 24 && col === 1) {
                div.classList.add('rock');
            }
            // generate clouds
            if (row > 4 && (row - 5) < 3 && (col - 25) < 6) {
                if (clouds[row - 5][col - 25] === 1) {
                    div.classList.add('cloud');
                }
            }
            if (row > 7 && (row - 8) < 3 && (col - 11) < 6) {
                if (clouds[row - 8][col - 11] === 1) {
                    div.classList.add('cloud');
                }
            }

            if (row === 25) {
                div.classList.add('grass');
            }
            if (row > 25) {
                div.classList.add('soil');
            }

            div.classList.add('hover-class');
            div.addEventListener('click', logBtn);
            gameBoard.appendChild(div);
        }
    }




})();
