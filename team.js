
 var arr=[];
 var tbody=document.getElementById('table');
 fetch("team.json", { "method": "GET" })
 .then(response => response.json())
 .then(data => {
   arr.push(data.BATSMEN);
   console.log(arr);
   for(var i=0;i<data.BATSMEN.length;i++){
	 tbody.innerHTML+=`<tr>
	 <td>${arr[0][i].name}</td>
	 <td>${arr[0][i].age}</td>
	 <td>${arr[0][i].BATTING}</td>
	 <td>${arr[0][i].t20}</td>
	 </tr>`;

   }
 })
  var arr=[];
  var tbody2=document.getElementById('table2');
  fetch("team.json", { "method": "GET" })
  .then(response => response.json())
  .then(data => {
   arr.push(data.BOWLING);
    console.log(arr);
   for(var i=0;i<data.BOWLING.length;i++){
	 tbody2.innerHTML+=`<tr>
	 <td>${arr[1][i].name}</td>
	 <td>${arr[1][i].age}</td>
	 <td>${arr[1][i].bowling}</td>
	 <td>${arr[1][i].w}</td>
	 </tr>`;

   }
  })
  var arr=[];
  var tbody3=document.getElementById('table3');
  fetch("team.json", { "method": "GET" })
  .then(response => response.json())
  .then(data => {
   arr.push(data.ALL);
    console.log(arr);
   for(var i=0;i<data.ALL.length;i++){
	 tbody3.innerHTML+=`<tr>
	 <td>${arr[2][i].name}</td>
	 <td>${arr[2][i].age}</td>
	 <td>${arr[2][i].batting}</td>
	 <td>${arr[2][i].a}</td>
	 </tr>`;

   }
  })
   
 
 	
