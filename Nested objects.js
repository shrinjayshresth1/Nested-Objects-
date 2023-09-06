var student={
    name:"Shrinjay Shresth",
    rollNo:202210101110231,
    marks:98,
    FName:"Rajesh Narayan Singh",
    MName:"Deepa Singh",
    Address:{
          city:"Patna",
          pincode:800013,
          State:"Bihar",
          Country:"India"
    }
};

for(var prop in student){
    console.log("The properties are "+prop+": "+student[prop]);
}
/*var keys=Object.keys(student);
var keys2=Object.getOwnPropertyNames(student);*/
