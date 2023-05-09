// Write an asynchronous function that accepts a 
// message string and a delay time in milliseconds. 
// The function should log the message to the console 
// after the specified delay time.

async function asyncFunction(message,delay){
   await new Promise(resolve=>setTimeout(resolve,delay))
   console.log(message);
}
asyncFunction("I am a rich babe",1000);

  
// You have an array of user IDs and a function 
//  getUserData(id) that returns a Promise with 
//  user data when given a user ID. Write an 
//  asynchronous function that fetches and logs 
// the data for each user ID one by one, in sequence.

async function fetchData(UserIds){
   for (const userId of UserIds){
      const asyncFetch = await(asyncFetch);
      console.log(asyncFetch);
   } 
}
fetchData([1,2,3,4,5,6,7,8,9,10])


// You have an asynchronous function performTask()
// that returns a Promise. The Promise resolves if
// the task is successful and rejects if there's 
// an error. Write a function that calls performTask()
// and logs a custom success message if the task is 
// successful, and a custom error message if there's an error.

function successfulTask(){
   performTask()
   .then(()=>{
      console.log('Task is successful');
   })
   .catch((error) => {
      console.log('Task failed',error);
   })
}










function handleTask() {
   performTask()
     .then(() => {
       console.log('Task completed successfully!');
     })
     .catch((error) => {
       console.log('Task failed with error:', error.message);
     });
 }
 


 