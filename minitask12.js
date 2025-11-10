const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((result)=>{
        if(!result.ok){
            throw new Error(`${result.status}`
                `${result.statusText}`
            );
        }
        return result.json();
    })
    .then((body)=>{
        let i = 0
        let emailArr = [];
        let email = [];
        let emailForm = [];
        let lowerCaseEmail = "";
        for(;i < body.length; i++){
            emailArr = [...emailArr,body[i].email];
            email.push(emailArr[i])
            for (let j = 0; j < email[i].length; j++) {
                let charCode = email[i].charCodeAt(j);
                if (charCode >= 65 && charCode <= 90) {
                lowerCaseEmail += String.fromCharCode(charCode + 32);
                } else {
                lowerCaseEmail += email[i].charAt(j);
                }
                
            }
            emailForm.push(lowerCaseEmail);
        }
        //emailForm.push(lowerCaseEmail);
        console.log(emailForm);
        
    })
    .catch((err)=>console.log(err.message));

// async function funcFetch() {
//     try{
//         let result = await fetch(url);
//         if (!result.ok) {
//         throw new Error(`${result.status}`
//                 `${result.statusText}`
//             );
//         }
//         let body = await result.json();
//         let i = 0
//         let email = [];
//         for(;i < body.length; i++){
//             email = [...email,body[i].email];
//             console.log([body[i].email]);
//         }
//         }catch(error){
//         console.log(err.message);
//     }
// }