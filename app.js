(function () {

    let gameBoard = document.querySelector('.left-side');
    let utilities = document.querySelector('.right-side');
    let destroy;
    let currentWeapon = '';
    let currentTile = '';
    let toolsObj = {
        'axe': ['wood', 'leaves'],
        'pickAxe': ['rock'],
        'shovel': ['soil', 'grass'],
        'wind': ['cloud'],
    };
    let tilesInventoryObj = {
        'woodTile': 0,
        'leavesTile': 0,
        'rockTile': 0,
        'soilTile': 0,
        'cloudTile': 0,
        'grassTile': 0,
    };
    let tilesArr = ['wood', 'leaves', 'rock', 'soil', 'grass', 'cloud'];


    let buildAndCreator = (e) => {
        let cell = e.target.classList;
        let tileName = e.target.getAttribute('class');

        if (destroy) {
            if (currentWeapon[1].includes(tileName)) {
                let tileObjectKey = findTileInventoryKey(Object.keys(tilesInventoryObj), tileName);
                tilesInventoryObj[tileObjectKey]++;
                document.querySelector(`.${tileObjectKey}`).setAttribute('count', tilesInventoryObj[tileObjectKey]);
                cell.remove(tileName);
            }
        } else if (cell.length == 0 && tilesInventoryObj[currentTile[0]] > 0) {
            let tileName = findTileName(currentTile[0], tilesArr);
            e.target.classList.add(tileName);
            tilesInventoryObj[currentTile[0]]--;
            document.querySelector(`.${currentTile[0]}`).setAttribute('count', tilesInventoryObj[currentTile[0]]);
        }
    }

    let findTileInventoryKey = (arr, tileName) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(tileName)) {
                return arr[i];
            }
        }
    }

    let findTileName = (tileName, tilesArr) => {
        for (let i = 0; i < tilesArr.length; i++) {
            if (tileName.includes(tilesArr[i])) {
                return tilesArr[i];
            }
        }
    }

    const tree = [
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
    ];

    const bush = [
        [0, 1, 0],
        [1, 1, 1],
        [1, 1, 1],
    ];

    const clouds = [
        [1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1],
    ];

    //creating the main board
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

            cell.addEventListener('click', buildAndCreator);
            gameBoard.appendChild(cell);
        }
    }

    //create navbar

    //tools
    for (let i = 0; i < Object.entries(toolsObj).length; i++) {
        let tool = document.createElement('div');
        tool.classList.add(Object.keys(toolsObj)[i], 'style-tool');
        utilities.appendChild(tool);
        tool.addEventListener('click', () => {
            currentWeapon = Object.entries(toolsObj)[i];
            destroy = true;
        });
    }

    
    let inventory = document.createElement('div');
    inventory.classList.add('style-inventory');
    utilities.appendChild(inventory);

    //tiles inventory
    for (let i = 0; i < Object.entries(tilesInventoryObj).length; i++) {
        let tile = document.createElement('div');

        tile.classList.add(Object.keys(tilesInventoryObj)[i], 'tile');
        if (Object.keys(tilesInventoryObj)[i] === 'leavesTile') {
            tile.style.color = '#fff';
        }
        tile.setAttribute('count', Object.values(tilesInventoryObj)[i]);
        inventory.appendChild(tile);
        tile.addEventListener('click', () => {
            currentTile = Object.entries(tilesInventoryObj)[i];
            destroy = false;
        });
    }

    // creating restart button
    let restartBtn = document.createElement('div');
    restartBtn.classList.add('restart-btn');
    restartBtn.addEventListener('click', ()=>{
        document.location.reload()
    });
    utilities.appendChild(restartBtn)

})();
