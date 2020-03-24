// from data.js
var tableData = data;

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

// Filter fields
var filterFields = {
  datetime: "",
  city: "",
  state: "",
  country: "",
  shape: ""
};

// Filter data function
function filterSightings(filters) {
  return (
    (filterFields["datetime"] == filters.datetime ||
      filterFields["datetime"] == "") &&
    (filterFields["city"] == filters.city || filterFields["city"] == "") &&
    (filterFields["state"] == filters.state || filterFields["state"] == "") &&
    (filterFields["country"] == filters.country ||
      filterFields["country"] == "") &&
    (filterFields["shape"] == filters.shape || filterFields["shape"] == "")
  );
}

var button = d3.select("#filter-btn");

button.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("tbody").text(inputValue);
});

createTable(tableData);
