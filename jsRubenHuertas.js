var text = "r1u2b3e4n";
var num = text.replace(/[^0-9]/gi, "");
var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum += Number(num.charAt(i))
}




