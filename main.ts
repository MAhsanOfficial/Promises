
//                           *************** PROMISE ****************

//           Promise ids for "Eventual" Completion of task. it is an Object in JS.
//       *It is a Solution To Callback Hell... 


//  Function with 2 Handlers.
// 1) Resolve  // pora ho jai promise 
// 2) Reject   // pora nhu hoga 




//                    ********Promise State********
//     There are Three State Of Promise...
// 1) Pending State // space a ra ha 
// 2) Fullfilled State         (Resolve)
// 3) Rejected State 
//                                         A Javascript Promise Object Can Be...
//                                   * Pending : The result is Undefined
//                                   * Resolve : The result is a value               (Fulfilled)
//                                   * Reject : The result is an  ErrorObject        (Error)




// ==================================================================================================================================


let ans = new Promise(function(Resolve:any,Reject:any){
   Reject("This is The Reject..")
})
ans
.then(function(res){
  console.log(res);
})
.catch((err)=>{
console.log(err);

})




let result = new Promise((res:any,rej:any)=>{
 if(false){
  return res()
 }else{
  return rej()
 }
})
result
.then(()=>{
  console.log("Resolve hogia ha");
})
.catch(()=>{
  console.log("Reject hogia ha");
})




// Question : User Will Ask For a  Number Between 0 TO 9 and if the number
// is below 5 Resolve if not Reject above

const sayPromise = new Promise(function(resolve:any,reject:any){
let randomNumber = Math.floor(Math.random()*10)                            //0 to 0.9999
if(randomNumber < 5){
  return resolve()
}else{
  return reject()
}           
})
sayPromise
.then(()=>{
  console.log("Below");
})
.catch(()=>{
  console.log("Above");
})









