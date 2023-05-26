var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.setAttribute("claas", "row");


var title = document.createElement("div");
title.setAttribute("class", "title");
title.innerHTML = `<h3 ><b>The Art Institute of Chicago</b></h3><br><u><b>12 Art information</b><u>`

var result = document.createElement("div");
result.setAttribute("class", "table");


async function art() {
 

  var get_value = await fetch("https://api.artic.edu/api/v1/artworks");
  var arr = await get_value.json();
 
  for(var i=0;i<arr.data.length;i++){
  result.innerHTML+=
    `
    
    <div class="table-responsive">
  <table class="table">
  <thead>
      <tr>
        <th scope="col">artist display</th>
        <th scope="col">credit line</th>
        <th scope="col">artist title</th>
        <th scope="col">display date</th>
        <th scope="col">department title</th>
        
      </tr>
    </thead>

  <tr>
  <td>${arr.data[i].artist_display}</td>
  <td>${arr.data[i].credit_line}</td>
  <td>${arr.data[0].artist_title}</td>
  <td>${arr.data[i].date_display}</td>
  <td>${arr.data[i].department_title}</td>
 </table>
</tr>

  </table>
</div>
   
  `
  }
  
}
art();




title.append(result);
row.append(title);
container.append(row);
document.body.append(container);
