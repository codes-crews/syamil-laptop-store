function goToBooking() {
    window.location.assign("Daftardanpesan.html");
    function goToAbout() {
        window.location.assign("about.html")
        
    }
}

function process() {
    var package = document.getElementById("package").value;
    var num_of_people = document.getElementById("num-of-people").value
    var totalPayment = package * num_of_people;
    document.getElementById("total").innerHTML = totalPayment;
    
    
    }
   

    

