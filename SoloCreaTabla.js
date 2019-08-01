'use strict';
function SoloCreaTabla(idTabla, options)
{
    var options             = options || {};
    options.col             = options.col || [];
    options.rows            = options.rows || [];
    var tableElement        = document.getElementById(idTabla);
    var theadElement        = document.createElement("thead");
    options.col.forEach(function(e, i){
        var thElement       = document.createElement("th");
        thElement.innerHTML=e;
        theadElement.appendChild(thElement);
    })
    tableElement.appendChild(theadElement);
    var tbodyElement        = document.createElement("tbody");
    options.rows.forEach(function(e){
        var trElement       = document.createElement("tr");
        e.forEach(function(x){
            var tdElement   = document.createElement("td");
            tdElement.innerHTML=x;
            trElement.appendChild(tdElement);
        })
        tbodyElement.appendChild(trElement);
    })
    tableElement.appendChild(tbodyElement);
};