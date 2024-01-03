var subject = "English";

function learn(topic) {
//    let subject = topic;    // let er jonno ei khane ei ta functional scope hishabe kaj korbe. 
    console.log(`I am learning ${topic}`);
   
}

 learn("Javascript");


console.log(`I know ${subject}`);


