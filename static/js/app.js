// Starter Code
var tableData = data;

// Ref tbody, button, field date, City, columns
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// create table
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    $tbody.html("");
    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("No Sightings On this date -- Try again.");
        }
})