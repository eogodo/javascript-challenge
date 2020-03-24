// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Filter fields
var filterFields = {
  datetime: "",
  city: "",
  state: "",
  country: "",
  shape: ""
};

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

//Event trigger
button.on("click", function() {
  // Select the input element and get the raw HTML node
  filterFields["datetime"] = d3.select("#datetime").node().value;
  filterFields["city"] = d3.select("#city").node().value;
  filterFields["state"] = d3.select("#state").node().value;
  filterFields["country"] = d3.select("#country").node().value;
  filterFields["shape"] = d3.select("#shape").node().value;

  var filteredData = tableData.filter(filterSightings);
  createTable(filteredData);
});

//Load webpage with all data
createTable(tableData);
