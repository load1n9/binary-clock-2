function convert(dec) {
    return dec.toString(2);
}

function showTime() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    hours = hours.toString();
    minutes = minutes.toString();
    seconds = seconds.toString();

    var binary_hours = hours.split("");
    var binary_minutes = minutes.split("");
    var binary_seconds = seconds.split("");

    var dig1 = convert(binary_hours[0]);
    var dig2 = convert(binary_hours[1]);
    var dig3 = convert(binary_minutes[0]);
    var dig4 = convert(binary_minutes[1]);
    var dig5 = convert(binary_seconds[0]);
    var dig6 = convert(binary_seconds[1]);

    dig1 = dig1.split('').join('<br>');
    dig2 = dig2.split('').join('<br>');
    dig3 = dig3.split('').join('<br>');
    dig4 = dig4.split('').join('<br>');
    dig5 = dig5.split('').join('<br>');
    dig6 = dig6.split('').join('<br>');

    var e1 = document.getElementById("e1").innerHTML = dig1;
    var e2 = document.getElementById("e2").innerHTML = dig2;
    var e3 = document.getElementById("e3").innerHTML = dig3;
    var e4 = document.getElementById("e4").innerHTML = dig4;
    var e5 = document.getElementById("e5").innerHTML = dig5;
    var e6 = document.getElementById("e6").innerHTML = dig6;
    setTimeout(showTime, 1000);
}
showTime();
