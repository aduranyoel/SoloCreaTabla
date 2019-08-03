```html

<table id="tableContainner"></table>

<script src="SoloCreaTabla.js"></script>
```
```js
var columns = ["ID", "NOMBRE", "USERNAME", "EMAIL", "WEBSITE", "PHONE"]
var rows = [
     ["1", "TONY", "yoet92", "yoet92@gmail.com", "https://twitter.com/yoet92", "(598) 00 000 000"],
     ["2", "TONY", "yoet92", "yoet92@gmail.com", "https://twitter.com/yoet92", "(598) 00 000 000"]
];

SoloCreaTabla("tableContainner", {
            col: columns,
            rows: rows
        })
```
Permite agregar clases a la tabla
```js
SoloCreaTabla("tableContainner", {
            col: columns,
            rows: rows,
            class: ["table", "table-fast", "etc"]
        })
```
