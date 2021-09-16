var currentTime = moment().format('MMMM Do, YYYY');
console.log(currentTime);

function displayDate () {
    document.getElementById("current-day").innerHTML = currentTime;
};
displayDate();


document.getElementById("button-addon2").addEventListener("click", function(){
    var input = document.getElementById("input");
    localStorage.setItem("saved-input", input);
    console.log(input);
})

//var input = document.getElementById()