

function quantityNumbers() {
    let quantityNumber = document.getElementById("numberInput").value;
    let ansver = document.getElementById("ansverQuantity");
    if (quantityNumber != "") {
        if (quantityNumber > 0) {
            let numQuantity = Number(quantityNumber);
            for(var i = 0; numQuantity > 1; i++) {
                numQuantity /= 10;
             }
             cleanQuantity()
             ansver.insertAdjacentHTML('beforeend', `<p>${i}</p>`);
        } else {
            cleanQuantity()
                ansver.insertAdjacentHTML('beforeend', `<p>циферка должна быть больше 0</p>`);
        }

    } else {
        cleanQuantity()
        ansver.insertAdjacentHTML('beforeend', `<p>поле не должны быть пустые</p>`);
    }
}

function cleanQuantity() {
    var averagClean = document.getElementById("ansverQuantity");
    while (averagClean.firstChild) {
        averagClean.removeChild(averagClean.firstChild);
    }
}

//2
function Numbers(){
var table, row, cell, i, j;
table = document.createElement('table');
table.style.textAlign = 'right';
table.style.fontFamily = 'monospace';
for (i=2; i<10; i++) {
    row = document.createElement('tr');
    for (j=1; j<11; j++) {
        cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
        cell.appendChild(document.createTextNode(i*j));
        cell.style.padding = '4px';
        cell.style.width = 100 / 10 + '%';
        row.appendChild(cell);
    }
    table.appendChild(row);
} 
  document.body.appendChild(table);
}
