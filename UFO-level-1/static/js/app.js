// from data.js
var tableData = data;

var input = "",

// Create table function
function createTable(tableInfo) {
  d3.select("tbody").html("");

  // Loop through data & append to table

  tableInfo.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Loop through data & append to table
// var tbody = d3.select("tbody");

// tableData.forEach(sighting => {
//   var row = tbody.append("tr");
//   Object.entries(sighting).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

function filterSightings(filter) {
    return filter.datetime == input;
}

var button = d3.select("#filter-btn");

button.on("click", function() {
  // Select the input element, get the raw HTML node and property value
  input = d3.select("#datetime").node().value;

  if (input == ""){
      createTable(tableData);
  } else {
      var dateFilter = tableData.filter(filterSightings);
      createTable(dateFilter);
  }

});

createTable(tableData);
