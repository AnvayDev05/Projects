    document.getElementById("showTableBtn").onclick = function() {
        let val = parseInt(document.getElementById("numberInput").value);
        if (isNaN(val)) {
        alert("Please enter a valid number!");
        return;
        }
    
        let result = "<table><tr><th>Expression</th><th>Result</th></tr>";
        for (let i = 1; i <= 10; i++) {
        result += `<tr><td>${val} x ${i}</td><td>${val * i}</td></tr>`;
        }
        result += "</table>";
    
        document.getElementById("result").innerHTML = result;
    };
            