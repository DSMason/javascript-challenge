//Create function to append table
function tableData(aliens){
    d3.select("tbody").html("");
    aliens.forEach(alienRow => {
    var tableRow = d3.select("tbody")
    .append("tr");
    Object.values(alienRow).forEach(value => {
    var cell = alienRow.append("td")
    })
    })
} 

// create table
tableData.append()