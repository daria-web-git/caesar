var alphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя ";

function Encrypt() {
    var key = Number(document.getElementById("key").value);
    var input = document.getElementById("input").value.toLowerCase();
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var x = alphabet.indexOf(input[i]);
        if (x != -1) {
            var y = (x + key) % alphabet.length;
            output += alphabet[y];
        }  
    }
    document.getElementById("output").value = output;
}
function Decrypt() {
    console.log("Decrypt");
    var key = Number(document.getElementById("key").value);
    var input = document.getElementById("input").value.toLowerCase();
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var y = alphabet.indexOf(input[i]);
        if (y != -1) {
            console.log(y - key);
            console.log((y - key) % alphabet.length);
            var x = (alphabet.length + y - key) % alphabet.length;
            output += alphabet[x];
        } 
    }
    document.getElementById("output").value = output;
}
