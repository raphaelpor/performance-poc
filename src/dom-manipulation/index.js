/* DOM manipulation (create and remove) */
(function () {
    var rootElement = document.getElementById('root');

    function createRow() {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');

        for (let index = 0; index < 5; index++) {
            const item = document.createElement('div')
            item.setAttribute('class', 'item');
            row.appendChild(item);
        }
    
        rootElement.appendChild(row);
        setTimeout(() => {
            createRow();
        }, 200);
    }

    function removeRow() {
        const rowToRemove = document.getElementById('root').firstElementChild;
        rowToRemove.parentElement.removeChild(rowToRemove);

        setTimeout(() => {
            removeRow();
        }, 200);
    }
    
    createRow();

    setTimeout(() => {
        removeRow();
    }, 1000);

})();