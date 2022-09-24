const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]
   const gradesMale=[]
   const gradesFemale=[]
   for(const key in grades){
    if(grades[key].sex=="M"){
        gradesMale.push(grades[key])
    }else if(grades[key].sex=="F"){
        gradesFemale.push(grades[key])
    }


   }
   console.log("bai 1")
   function bai1(){
    let ave=0;
    for(const key in grades){
        ave+=grades[key].grade
    }
    ave=ave/grades.length;
    return ave;
   }
   console.log(bai1())
 
   console.log("bai 2")
   function bai2(){
    let ave=0;
    for(const key in gradesMale){
          ave+=gradesMale[key].grade
        }
    ave=ave/gradesMale.length;
    return ave;
   }
   console.log(bai2())

    console.log("bai 3")
   function bai3(){
    let ave=0;
    for(const key in gradesFemale){
          ave+=gradesFemale[key].grade
        }
    ave=ave/gradesFemale.length;
    return ave;
   }
   console.log(bai3())

   console.log("bai 4")
   function bai4(){
    gradesMale.sort((a,b)=>(a.grade<b.grade)?1:-1)
    return gradesMale[0]
   }
   console.log(bai4())

   console.log("bai 5")
   function bai5(){
    gradesFemale.sort((a,b)=>(a.grade<b.grade)?1:-1)
    return gradesFemale[0]
   }
   console.log(bai5())

   console.log("bai 6")
   function bai6(){
    gradesMale.sort((a,b)=>(a.grade<b.grade)?1:-1)
    return gradesMale[gradesMale.length-1]
   }
   console.log(bai6())

   console.log("bai 7")
   function bai7(){
    gradesFemale.sort((a,b)=>(a.grade<b.grade)?1:-1)
    return gradesFemale[gradesFemale.length-1]
   }
   console.log(bai7())

   console.log("bai 8")
   function bai8(){
    grades.sort((a,b)=>(a.grade<b.grade)?1:-1)
    return grades[0]
   }
   console.log(bai8())

   console.log("bai 9")
   function bai9(){
    grades.sort((a,b)=>(a.grade<b.grade)?1:-1)
    return grades[grades.length-1]
   }
   console.log(bai9())

   function show(object){
    for(const key in object){
        console.log(object[key])
    }
   }
   console.log("bai 10")
   function allFemale(){
   show(gradesFemale)
   }
   allFemale()

  
   console.log("bai 11")
   function bai11(){
    grades.sort((a,b)=>(a.name>b.name?1:-1))
    show(grades)
   }
   bai11()

   console.log("bai12")
   function bai12(){
    grades.sort((a,b)=>(a.grade<b.grade)?1:-1)
    show(grades)
   }
   bai12()

   console.log("bai 13")
   function bai13(){
    for(const key in gradesFemale){
        if (gradesFemale[key].name.charAt(0)=='J'){
            console.log(gradesFemale[key])
        }
    }
   }
   bai13()

   console.log("bai 14")
   function bai14(){
    grades.sort((a,b)=>(a.grade<b.grade)?1:-1)
    for(let i=0;i<5;i++){
        console.log(grades[i])
    }
   }
   bai14()
   