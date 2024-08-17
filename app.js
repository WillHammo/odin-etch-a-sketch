function playGame(){
    
    function createGrid(area){
        const gridContainer = document.querySelector('.grid-container');
        for(let i = 0; i < area; i++){
            const gridRow = document.createElement('div');
            gridRow.classList.add('flex-row');
            gridContainer.appendChild(gridRow);
            for(let j = 0; j < area; j++){
                const gridCol = document.createElement('div');
                gridCol.classList.add('flex-col');
                gridCol.textContent = "Content";
                gridRow.appendChild(gridCol);
            }
        }
    }

    function removeGrid(){
        const gridRows = document.querySelectorAll('.flex-row');
        gridRows.forEach((row)=>{
            row.remove();
        });
    }

    function addBackgroundColorChange(){
        const gridTiles = document.querySelectorAll('.flex-col');
        gridTiles.forEach((tile)=>{
            tile.addEventListener('mouseover',(e)=>{
                e.target.style.backgroundColor = '#000';
            });
        });
    }

    createGrid(4);
    addBackgroundColorChange();
    

    const gridResizeButton = document.querySelector('.resize-grid');
    gridResizeButton.addEventListener('click', ()=>{
        const gridSize = prompt('Please enter a size for the grid.');
        removeGrid();
        createGrid(gridSize);
        addBackgroundColorChange()
    })

}

playGame();