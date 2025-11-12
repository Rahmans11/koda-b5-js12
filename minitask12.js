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
        let lowerCaseEmail = ['','','','','','','','','',''];
        for(;i < body.length; i++){
            emailArr = [...emailArr,body[i].email];
            email.push(emailArr[i])
            for (let j = 0; j < email[i].length; j++) {
            let charCode = email[i].charCodeAt(j);
            if (charCode >= 65 && charCode <= 90) {
            charCode += 32;
            }
            lowerCaseEmail[i] += String.fromCharCode(charCode);
            }
        }
        console.log(lowerCaseEmail);
        
    })
    .catch((err)=>console.log(err.message));

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
        let lowerCaseEmail = [];
        for(;i < body.length; i++){
            emailArr = [...emailArr,body[i].email];
            email.push(emailArr[i])
            lowerCaseEmail = email.map(element => {
            return element.toLowerCase();
            });
            
        }

        console.log(lowerCaseEmail);
        
    })
    .catch((err)=>console.log(err.message));

async function funcFetch(url) {
    try{
        let result = await fetch(url);
        if (!result.ok) {
        throw new Error(`${result.status}`
                `${result.statusText}`
            );
        }
        let body = await result.json();
        let i = 0
        let emailArr = [];
        let email = [];
        let lowerCaseEmail = [];
        for(;i < body.length; i++){
            emailArr = [...emailArr,body[i].email];
            email.push(emailArr[i])
            lowerCaseEmail = email.map(element => {
            return element.toLowerCase();
            });
            
        }
        return console.log(lowerCaseEmail);;
        }catch(error){
        console.log(err.message);
        throw error;
    }
}
funcFetch(url);