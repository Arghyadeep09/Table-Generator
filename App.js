function multiplication(){
    let userInput1=document.getElementById("value1").value;
    let userInput2=document.getElementById("value2").value;
    let resultDiv = document.getElementById("result-table");

    let tableHTML = '<table >';
    for(let i = 0; i <= userInput2; i++){
        tableHTML += "<tr><td>" + userInput1 + " * " + i + " = " + (userInput1 * i) + "</td></tr>";
    }
    tableHTML += "</table>";

    resultDiv.innerHTML = tableHTML;
}
