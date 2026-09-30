// 1. CALLBACKS: pass a function now so something else can call it later.
 
// setTimeout(() => {
//     console.log("This will run after the timeout");
// }, 1000); // 1 1 second
 
// function fetchData(callback: (data: string) => void):void{
//     setTimeout(() => {
//         const data = "Fetched data";
//         callback(data);
//     }, 1000); // Simulate an async operation with 1 second delay
// }
 
 
// console.log("Before");
// fetchData((data) => {
//     console.log("Fetched data:", data);
// });
// console.log("After");
 
// error-first callback pattern: the first argument is an error (if any), the second is the data.
// function fetchDataWithErrorFirstCallback(shouldFail: boolean, callback: (error:Error|null, data?:string)=> void): void{
//     setTimeout(() => {
//         if (shouldFail) {
//             callback(new Error("Failed to fetch data"));
//             return; // Stop further execution if there is an error
//         } else {
//             const data = "Fetched data";
//             callback(null, data);
//         }
 
//     }, 1000); // Simulate an async operation with 1 second delay
// }
 
// fetchDataWithErrorFirstCallback(false, (error, data) => {
//     if (error) {
//         console.error("Error:", error.message);
//     } else {
//         console.log("Fetched data:", data);
//     }
// });
 
 
// 2. PROMISES: an object representing a future result.
const myPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() >0.5;
 
    if(success){
                resolve("Data fetched successfully");
    } else {
        reject(new Error("Failed to fetch data"));
    }
});
 
myPromise
    .then((data)=>{
        console.log("Fetched data:", data);
    })
    .catch((error)=>{
        console.error("Error:", error.message);
    });
 