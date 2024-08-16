function playGame(){
    
    function createGrid(area){
        const gridContainer = document.querySelector('main');
        for(let i = 0; i < area; i++){
            const gridRow = document.createElement('div');
            gridRow.classList.add('flex-row');
            gridRow.textContent = "test";
            gridContainer.appendChild(gridRow);
            for(let j = 0; j < area; j++){
                const gridCol = document.createElement('div');
                gridCol.classList.add('flex-col');
                gridCol.textContent = "test";
                gridRow.appendChild(gridCol);
            }
        }
    }
    createGrid(4);

}

playGame();