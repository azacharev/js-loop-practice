/* 0 100 200 300 400 500  #1
1 2 4 8 16 32 64          #2
1 1 1 2 2 2 3 3 3         #3
0 2 4 6 8 10              #4
3 6 9 12 15               #5
9 8 7 6 5 4 3 2 1 0       #6
0 1 2 3 0 1 2 3 0 1 2 3   #7
*/

// #1
for(var i = 0; i <= 500; i+=100){
    console.log(i);
}

// #2
for(var i=1; i <= 64; i+=i){
  console.log(i);
}
// #3
for(var i =1; i <=3; i++){
  console.log(i);
  console.log(i);
  console.log(i);
}
// #4
for(var i =0; i <=10; i+=2){
  console.log(i);
}

// #5
for(var i =3; i<=15; i+=3){
  console.log(i);
}

// #6
for(var i=9; i>=0; i--){
  console.log(i);
}

// #7

for(var i = 0; i<3; i++){
  for(var x = 0; x<=3; x++){
    console.log(x);
  }
}
