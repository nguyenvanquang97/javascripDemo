// function bai12(){
//     let arr=[1,2,3,4,5];
//     let max=0;
//     let min=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i];
//         }if(min>arr[i]){
//             min=arr[i]
//         }
//     }
//     console.log("min:"+min);
//     console.log("max:"+max);
// }
// bai12()
// function bai5(str){
//     let arr=[];
//     for(let i=0;i<10;i++){
//         arr[i]=str+"-";
//         if(i==9){
//             arr[i]=str
//         }
//     }
//    console.log(arr.join(""))
// }
// bai5("gam")
function  checkElementExist(num){
    var rs;
    let arr=[1,2,3,4,5]
    if(arr.includes(num)){
        rs= true;
    }else{
        rs= false;
    }
    
    console.log(rs)
}
checkElementExist(5)
function getElementGreater(arr,num){
    let rs=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            rs.push(arr[i]);
        }
    }
    console.log(rs.join())
}
getElementGreater([1,2,3,4,5],3)

function randomHexCode(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}
randomHexCode()

function randomRgbCode(){
    let rgb="rgb"
    let arr=[];
    for(let i=0;i<3;i++){
      arr.push(Math.floor(Math.random() *256))
    }
    rgb+="("
    rgb+=arr.join();
    rgb+=")"
    console.log(rgb)

}
randomRgbCode()