console.log("Bai 1:")
function calculateFactorial(num){
    let rs=1;
    for(let i=1;i<=num;i++){
        rs=rs*i;
    }
    return rs;
}
console.log(calculateFactorial(5))

console.log("Bai 2:")
function  reverseString(str){
let rs=""
   for(let i=str.length-1;i>=0;i--){
    rs+=str[i];
   }
   return rs;
}
console.log( reverseString("hello"))

console.log("Bai 3:")
function translate(str){
    switch(str){
        case "VN":{
            console.log("Xin chào")
            break
        }
        case "EN":{
            console.log("Hello")
            break
        }
        case "FR":{
            console.log("Bonjour")
            break
        }
    }
}
translate("EN")

console.log("Bai 4:")
function subString(str){
    let rs
    if(str.length<15){
        rs ="Chuoi khong hop le!chuoi phai dai hon 15 ki tu"
    }else{
         rs=str.substring(0,10)+"..."
    }
return rs;
}
console.log(subString("xinchaocacbandenvoiTechmaster"))

console.log("Bai 5")
function game(str){
    let computer=["keo","bua","bao"]
    let computerSelect=computer[Math.floor(Math.random()*3)]
    console.log(`May chon:${computerSelect}`)
    if( str="keo"){
        switch(computerSelect){
            case "keo":{
                console.log("hoa")
                break
            }
            case "bua":{
                console.log("ban thua")
                break
            }
            case "bao":{
                console.log("ban thang")
                break
            }
        }
    }
    else if( str="bua"){
        switch(computerSelect){
            case "keo":{
                console.log("ban thang")
                break
            }
            case "bua":{
                console.log("hoa")
                break
            }
            case "bao":{
                console.log("ban thua")
                break
            }
        }
    }
     else if( str="bao"){
        switch(computerSelect){
            case "keo":{
                console.log("ban thua")
                break
            }
            case "bua":{
                console.log("ban thang")
                break
            }
            case "bao":{
                console.log("hoa")
                break
            }
        }
    }
}
game("keo")