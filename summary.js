var arr=[];
var tbody=document.getElementById('thead');
fetch("summary.json", { "method": "GET" })
.then(response => response.json())
.then(data => {
  arr.push(data.IvsP);
  console.log(arr);
  for(var i=0;i<data.IvsP.length;i++){
    tbody.innerHTML+=`<tr>
    <th>${arr[0][i].c1}</th>
    <th>${arr[0][i].c2}</th>
    <th>${arr[0][i].c3}</th>
    <th>${arr[0][i].c4}</th>
    </tr>`;

  }
})
var arr=[];
var tbody=document.getElementById('tbody');
fetch("summary.json", { "method": "GET" })
.then(response => response.json())
.then(data => {
  arr.push(data.head);
  console.log(arr);
  for(var i=0;i<data.head.length;i++){
    tbody.innerHTML+=`<tr>
    <th>${arr[1][i].c1}</th>
    <td>${arr[1][i].c2}</td>
    <td>${arr[1][i].c3}</td>
    <td>${arr[1][i].c4}</td>
    </tr>`;

  }
})