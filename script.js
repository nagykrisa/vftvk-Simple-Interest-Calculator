function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var date = new Date();
    var year = date.getFullYear();
    var future_year = year + Number(years)

     if (principal > 0)
    {
        document.getElementById("result").innerHTML =
        "If you deposit <mark>" + String(principal)+"</mark>\,<br/>"+
        "at an interest rate of <mark>" + String(rate)+"%</mark>\.<br/>"+
        "You will receive an amount of <mark>"+ String(interest)+"</mark>\,<br/>"+
        "in the year <mark>" + String(future_year)+"</mark>";
        
    }
    else 
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
}
function rangeSlider(){
    var rate = document.getElementById("rate").value;
    document.getElementById("range_span").innerHTML = rate+"%";
}    