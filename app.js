function playGame() {

    function createGrid(area) {
        const gridContainer = document.querySelector('.grid-container');
        for (let i = 0; i < area; i++) {
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');
            gridContainer.appendChild(gridRow);
            for (let j = 0; j < area; j++) {
                const gridCol = document.createElement('div');
                gridCol.classList.add('grid-col');
                gridRow.appendChild(gridCol);
            }
        }
    }

    function removeGrid() {
        const gridRows = document.querySelectorAll('.grid-row');
        gridRows.forEach((row) => {
            row.remove();
        })
    }

    function generateRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = 1;

        return `rgba(${r}, ${g}, ${b})`;
    }

    function colorTilesOnHover() {
        const tiles = document.querySelectorAll('.grid-col');
        tiles.forEach((tile) => {
            let brightness = 1;
            tile.addEventListener('mouseenter', () => {
                tile.style.backgroundColor = generateRandomRGB();
                if (brightness > 0) {
                    tile.style.filter = `brightness(${brightness -= .1})`;
                }
            })
        })
    }

    createGrid(4);
    colorTilesOnHover();

    const changeGridButton = document.querySelector('.change-grid');
    changeGridButton.addEventListener('click', () => {
        const newGridArea = prompt('Enter a size for the grid.');
        if (newGridArea >= 4 && newGridArea < 100) {
            removeGrid();
            createGrid(newGridArea);
            colorTilesOnHover();
        } else {
            alert('Error. Ensure size is greater than 4 and less than 100.');
        }
    })
}

playGame();