
(function () {

    let gameBoard = document.querySelector('.left-side');
    let utilities = document.querySelector('.right-side');
    let destroy = true;

    let buildAndCreator = (e) => {
        let cell = e.target.classList
        console.log(e.target.getAttribute('class')); 
        if (destroy) {
            if (cell.contains('cloud') && currentWeapon === 'wind') {
                cell.remove('cloud');
            } else if (cell.contains('rock') && currentWeapon === 'pickAxe') {
                cell.remove('rock');

            } else if ((cell.contains('soil') || cell.contains('grass'))  && currentWeapon === 'shovel') {
                cell.remove('soil', 'grass');
            }
             else if ((cell.contains('leaves') || cell.contains('wood'))  && currentWeapon === 'axe') {
                cell.remove('leaves', 'wood');
            }
        } else {
            // how to create?
        }
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

            let cell = document.createElement('div');

            //generate trees
            if (row > 17 && (row - 18) < 3 && (col - 22) < 5) {
                if (tree[row - 18][col - 22] === 1) {
                    cell.classList.add('leaves');
                }
            }
            if (row > 17 && (row - 18) < 3 && (col - 7) < 5) {
                if (tree[row - 18][col - 7] === 1) {
                    cell.classList.add('leaves');
                }
            }
            if (row >= 21 && row < 25 && col === 24) {
                cell.classList.add('wood');
            }
            if (row >= 21 && row < 25 && col === 9) {
                cell.classList.add('wood');
            }
            //generate bushes
            if (row > 21 && (row - 22) < 3 && (col - 9) < 5) {
                if (bush[row - 22][col - 11] === 1) {
                    cell.classList.add('leaves');
                }
            }
            if (row > 21 && (row - 22) < 3 && (col - 29) < 5) {
                if (bush[row - 22][col - 31] === 1) {
                    cell.classList.add('leaves');
                }
            }
            // generate rocks
            if (row === 24 && col > 19 && col < 23) {
                cell.classList.add('rock');
            }
            if (row === 24 && col === 1) {
                cell.classList.add('rock');
            }
            // generate clouds
            if (row > 4 && (row - 5) < 3 && (col - 25) < 6) {
                if (clouds[row - 5][col - 25] === 1) {
                    cell.classList.add('cloud');
                }
            }
            if (row > 7 && (row - 8) < 3 && (col - 11) < 6) {
                if (clouds[row - 8][col - 11] === 1) {
                    cell.classList.add('cloud');
                }
            }

            if (row === 25) {
                cell.classList.add('grass');
            }
            if (row > 25) {
                cell.classList.add('soil');
            }

            // cell.classList.add('hover-class');
            cell.addEventListener('click', buildAndCreator);
            gameBoard.appendChild(cell);
        }
    }

    //create right side
    let toolsArr = ['axe', 'pickAxe', 'shovel', 'wind'];
    for (let i = 0; i < toolsArr.length; i++) {
        let tool = document.createElement('div');
        tool.style.width = '120px';
        tool.style.height = '120px';
        tool.style.border = '3px solid';
        tool.style.marginTop = '20px';
        tool.classList.add(toolsArr[i]);
        utilities.appendChild(tool);
        document.querySelector(`.${toolsArr[i]}`).addEventListener('click', (e) => {
            console.log(e.target);
            currentWeapon = toolsArr[i];
        })
    }

    // let axe = document.querySelector('.axe');
    // let pickAxe = document.querySelector('.pickAxe');
    // let shovel = document.querySelector('.shovel');
    // let wind = document.querySelector('.wind');

    // let currentWeapon = '';

    // axe.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     currentWeapon = 'axe';
    // });
    // pickAxe.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     currentWeapon = 'pickAxe';
    // });
    // shovel.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     currentWeapon = 'shovel';
    // });
    // wind.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     currentWeapon = 'wind';
    // });

    console.log(utilities, "asd");

    // allTreesTiles.forEach(tree => {
    //     console.log(tree);
    // });

})();
