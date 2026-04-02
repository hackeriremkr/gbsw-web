// 0 ~ 10 사이 홀수만 출력

let num = 0;

while(num < 10){
    num++;
    if (num % 2 == 0){
        continue
    }
    console.log(num)
}

// 1 ~ 10 사이 수를 출력, 근데 7을 만나면 종료

num = 1;
while (num <= 10){
    if (num == 7){
        break;
    }
    console.log(num);
    num++
}

for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i * j}`) 
    }
    console.log("----------")
}

labelName: while (true){
    while (ture){
        continue labelName;
        break labelName;
    }
}