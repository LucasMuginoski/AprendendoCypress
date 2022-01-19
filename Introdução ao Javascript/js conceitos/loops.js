document.getElementById("welcome").append(welcome)

/* Loops/Laços de repetição */

for (var i = 0; i < 10; i++){
    console.log('Repetindo porque %d é menor que 10.', i);
}
console.log("==========================================");
a =0;
while(a <= 10){
    console.log('Repetindo porque %d é menor que 10.', a);
    a++;
}

var avenger=['Ironman', 'Thor', 'Black Widow', 'Captain America', 'Hulk', 'Black Panter'];

avenger.forEach(function(value,key));{
    console.log('%d na posição %d', value, key);
}