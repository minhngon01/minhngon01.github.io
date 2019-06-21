function myFunction(name) {
  return name;
}

function q1_Chemistry(){
    var str = document.getElementById("ex1-input").value;
    var output = document.getElementById("ex1-output");
    var stack =[], temp = 0;
    for ( i = 0; i < str.length; i++){
        if (str[i] ==="C") stack.push(12);
        else if (str[i] === "H") stack.push(1);
        else if (str[i] === "O") stack.push(16);
        else if (str[i] === "(") stack.push(0);
        else if (str[i] === ")"){
            while(stack[stack.length-1] != 0 ){  
                temp += stack[stack.length - 1];
                stack.pop();
            }      
            stack.pop();
            stack.push(temp);
            temp = 0;
        }
        else if(str[i] >= "1" && str[i] <= "9"){
            temp = stack[stack.length - 1] * parseInt(str[i]);
            stack.pop();
            stack.push(temp);
            temp = 0;
        }
    }
    
    let sum = 0;
    for ( i = 0; i < stack.length; i++){
        sum += stack[i];
    }
    output.value = sum;
}

function q2_SeeAndSay() {
    var num = document.getElementById("ex2-input").value;
    var output = document.getElementById("ex2-output");
    num = num.toString();
    let len = num.length;
    let result = '';
    let count = 1;
    
    for(var i=0; i<len; i++){
      let current = num[i];
      if(current === num[i+1]) {
        count++;
      } else {
        result += count + current;
        count = 1; 
      }
    }
    output.value = result;
}

function q3_RoundNumber(){
    var num = document.getElementById("ex3-input").value;
    var output = document.getElementById("ex3-output");
    let previous = 0, temp = 0, count = 1;
    
    while(parseInt(num/10) != 0) {
      temp = num % 10 + previous; 
      if (temp >= 5) previous = 1;
      else previous = 0;
      console.log(parseInt(num/=10));
      count *=10;
    }
    console.log(parseInt(num));
    output.value = (parseInt(num) + previous)*count;
}

function q4_thuannghich(){
    var str = document.getElementById("ex4-input").value;
    var output = document.getElementById("ex4-output");
    var newNum, a = [], count = 0;
    for (i=0; i < str.length; i++){
        if (str[i].toUpperCase() === "A" || str[i].toUpperCase()=== "B" || str[i].toUpperCase()=== "C") newNum = 2;
        else if (str[i].toUpperCase() === "D" || str[i].toUpperCase()=== "E" || str[i].toUpperCase() === "F") newNum = 3;
        else if (str[i].toUpperCase() === "G" || str[i].toUpperCase() === "H" || str[i].toUpperCase() === "I") newNum = 4;
        else if (str[i].toUpperCase() === "J" || str[i].toUpperCase() === "K" || str[i].toUpperCase() === "L") newNum = 5;
        else if (str[i].toUpperCase() === "M" || str[i].toUpperCase() === "N" || str[i].toUpperCase() === "O") newNum = 6;
        else if (str[i].toUpperCase() === "P" || str[i].toUpperCase() === "Q" || str[i].toUpperCase() === "R" || str[i].toUpperCase() === "S") newNum = 7;
        else if (str[i].toUpperCase() === "T" || str[i].toUpperCase() === "U" || str[i].toUpperCase() === "V") newNum = 8;
        else if (str[i].toUpperCase() === "W" || str[i].toUpperCase() === "X" || str[i].toUpperCase() === "Y" || str[i].toUpperCase() === "Z") newNum = 9;
        a[i] = newNum;
    }
    k = a.length;
    for (i = 0; i < k/2 ; i++){
        if (a[i] === a[k-i-1])
            count++;
        else
            count -= 100;
    }

    if (count === Math.floor(k/2) || count === Math.floor(k/2) + 1) output.value = "YES" ;
    else output.value = "NO";

function q5_SadValentine(row, column, data){
    console.log(data);
    //X Row
    for(i=0; i < row; i++){
        for(j=0; j < column; j++){  
            if(data[i][j] === 'S')
                //Turn row into X
                for(k=0; k < column; k++){
                    if (k != j)
                        data[i][k] = 'X';
                }
        }
    }

    
    //O Column
    for(j=0; j<column; j++){
        
        for(i=0; i < row; i++){
            var count = 0;
            if(data[i][j] === 'S')
                count++;
        }
        if (count == 0){
            // Turn column into O
            for(k=0; k < row; k++){
                data[k][j] = 'O';
            }
        }
    }
    console.log(data);
}

function q6_TeosCandy(numCandy,remainCandy){
    if (remainCandy % (numCandy-1) == 0)
        console.log(numCandy*(remainCandy/(numCandy-1))-1 + " " +(numCandy*(remainCandy/(numCandy-1))))
    else 
        console.log(Math.floor(remainCandy + (remainCandy/(numCandy-1))) + " " + Math.floor(remainCandy + (remainCandy/(numCandy-1))))
}

function q7_loopChar(num, str){
    a= ""
    for (i = 0; i < str.length; i++){
        a += str[i].repeat(num);
    }
    return a;
}

function q8_CountCow(num){
    var str = "moo", i = 0;
    while (str.length < num){
        var middle = "m"
        i+=3;
        middle = middle + "o".repeat(i);
        str = str + middle + str;
    }
    console.log(str[num-1]);
}

function q9_NearPrime(num){
    let count = 0;
    for (i=2; i <= num; i++){
        if (num%i==0)
            count++;
    }
    if (count === 2 ) console.log("YES");
    else console.log("NO"); 
}

function q10_UrsaDota(num){
    console.log((num * (num + 1)) / 2)  ;
}