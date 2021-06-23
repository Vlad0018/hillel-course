var x = +prompt ("1-ое число");
var y = +prompt ("2-ое число");
var z = +prompt ("3-ое число");

while(isNaN(x)  ||  isNaN(y)  ||  isNaN(z)) {
       x = +prompt ("Внимательно вводи 1-ое число");
       y = +prompt ("Внимательно вводи 2-ое число");  
       z = +prompt ("Внимательно вводи 3-ое число");      
}

if((x == y)  ||  (x == z)  ||  (y == z)) {
    res = 'Невозможно найти среднее'
}

else if(((x > y)  &&  (x < z))  || ((x < y)  &&  (x > z))) {
    res = x;
}
else if(((y > x)  &&  (y < z))  || ((y < x)  &&  (y > z))) {
    res = y;
}

else{
    res = z;
}

alert(res);