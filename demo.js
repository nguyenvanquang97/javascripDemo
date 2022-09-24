
// let string =1;
// let Object="test";
// console.log(Object);
// console.log("hi")

// function sayHi(){
//     console.log("Hi")
// }
// sayHi()

// const func =(test)=>{
//     console.log(`Print the ${test}`);
// }
// func("word");

// const max=(mark)=>{
//     if(max >85){
//         console.log("A")
//     }else if(70<=mark&&mark<=85){
//         console.log("B")
//     }else if(40<=mark&&mark<=70){
//         console.log("C")
//     }else{
//         console.log("D")
//     }
// }

// max()

// const bai2=(a,b)=>{
//     if(a>b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }
// }
// bai2(5,7)



// function day(day){
//     switch(day){
//         case 0:{
//             console.log("chu nhat");
//             break;
//         }
//         case 1:{
//             console.log("thu 2");
//             break;
//         }
//         case 2:{
//             console.log("thu 3");
//             break;
//         }
//         case 3:{
//             console.log("thu 4");
//             break;
//         }
//         case 4:{
//             console.log("thu 5");
//             break;
//         }
//         case 5:{
//             console.log("thu 6");
//             break;
//         }
//         case 6:{
//             console.log("thu 7");
//             break;
//         }
//     }
// }

// day(6)


// function month(month){
//     switch (month){
//         case 1:
//         case 2:
//         case 3:{
//             console.log("Mua xuan");
//             break;
//         }
//         case 4:
//         case 5:
//         case 6:{
//             console.log("Mua ha");
//             break;
//         }
//         case 7:case 8:case 9:{
//             console.log("Mua thu");
//             break;
//         }
//         case 10:case 11:case 12:{
//             console.log("Mua dong");
//             break;
//         }
//     }
// }

// month(1)

function bai3(str,num){
    for(let i=0;i<num;i=i+1){
        console.log();(`${str}-`);
       
    }
}

bai3("java",5)

function bai4(){
    let sum=0;
    for(let i=0;i<=100;i=i+5){
        sum+=i;
    }
    console.log(sum)
    return sum;
}

bai4()

function bai6(a,b){
    let sum=0;
    if(a>b){
        let temp=a;
        a=b;
        b=temp;
    }

    if(a==b){
        return sum;
    }
    for(let i=a+1;i<b;i=i+1){
        sum=sum+i;
    }
    console.log(sum)
    return sum;
}

bai6(3,3)


function bai8(n){
    let sum=0;
    for (let a = 2; a< n; a++){
        let sq = Math.sqrt(a);
        let count=0
        for(let i=2;i <=sq ;i++){
            if(a % i==0){
                count++;
            }
        }
        if(count==0){
            console.log(a)
            sum+=a;
        }
        
    }
   console.log(sum)
     
}

bai8(10)

function reverseString(s){
    let i=0;
    let j=s.length-1;
    while(j>i){
        let temp1=s[i];
        let temp2=s[j];
        let transfer=temp1;
        temp1=temp2;
        s[j]=transfer;
        s[i]=temp1;
        i++;
        j--;
    }
    console.log(s)
    return s;
}

reverseString("hello")