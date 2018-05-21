
//Setting variables for tbody, buttons, and input fields
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

//setting event listeners
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);




//Filterdata = dataset
var filteredData = dataSet 

//render filtered data to the table body
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++){
        //get search object
        var sighting = filteredData[i]
        var fields = Object.keys(sighting);
        // creating new row in body
        var $row = $tbody.insertRow(i);
        for (var j=0; j < fields.length; j++){
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = sighting[field];
        }
    }
}

//function to execute filter
function handleSearchButtonClick(){

    var filterdate = $dateInput.value.trim();
    if (filterdate !=""){
        filteredData = dataSet.filter(function(sighting){
            var sighting_date = sighting.datetime;
            return sighting_date === filterdate;
        
        });
    };
    var filtercity = $cityInput.value.trim().toLowerCase();
    if (filtercity !=""){
        filteredData = filteredData.filter(function(sighting){
            var sighting_city = sighting.city;
            return sighting_city === filtercity;
        });
    };
    var filterstate = $stateInput.value.trim().toLowerCase();
    if (filterstate !=""){
        filteredData = filteredData.filter(function(sighting){
            var sighting_state = sighting.state.toLowerCase();
            return sighting_state === filterstate;
        });
    };
    var filtercountry = $countryInput.value.trim().toLowerCase();
    if (filtercountry !=""){
        filteredData = filteredData.filter(function(sighting){
            var sighting_country = sighting.country;
            return sighting_country === filtercountry;
        });
    };
    var filtershape = $shapeInput.value.trim().toLowerCase();
    if (filtershape !=""){
        filteredData = filteredData.filter(function(sighting){
            var sighting_shape = sighting.shape;
            return sighting_shape === filtershape
        });
    };
    renderTable();
};


//reseting data field
function handleResetButtonClick(){
    filteredData = dataSet;
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value ="";
    $countryInput.value="";
    $shapeInput.value = "";
    renderTable();
}

renderTable();
