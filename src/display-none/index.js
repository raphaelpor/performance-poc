/* DOM manipulation (display: none;) */
(function () {
    var rootElement = document.getElementById('root');

    function displayRow(id) {
        let idToDisplay = id && id < 5 ? id : 1;
        
        const rowToDisplay = document.getElementById(`row-${idToDisplay}`);
        rowToDisplay.style.display = 'block';

        setTimeout(() => {
            displayRow(++idToDisplay);
        }, 200);
    }

    function removeRow(id) {
        let idToRemove = id && id < 5 ? id : 1;
        
        const rowToRemove = document.getElementById(`row-${idToRemove}`);
        rowToRemove.style.display = 'none';

        setTimeout(() => {
            removeRow(++idToRemove);
        }, 200);
    }

    function createRows() {
        for (let index = 0; index < 5; index++) {
            var row = document.createElement('div');
            row.setAttribute('class', 'row');
            row.setAttribute('id', `row-${index}`);

            for (let index = 0; index < 5; index++) {
                const item = document.createElement('div')
                item.setAttribute('class', 'item');
                row.appendChild(item);
            }
        
            rootElement.appendChild(row);
        }

        displayRow();
        setTimeout(() => {
            removeRow();
        }, 200);
    }
    
    createRows();

})();