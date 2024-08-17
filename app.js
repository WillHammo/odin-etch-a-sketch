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

    createGrid(4);

    const gridTiles = document.querySelectorAll('.flex-col');
    gridTiles.forEach((tile)=>{
        tile.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor = '#000';
        });
    });

}

playGame();