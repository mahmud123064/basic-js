// Regular function

function mahmud(){
    console.log("this is regular function ");
}
mahmud();


// function expression

const hello = function(){
    console.log("This is functional expression");
}

hello()


// named function expression

const world = function world(){
    console.log("This is named function expression");
}

world()


// Arrow function

const arrow = () => {
    console.log("This is the example of arrow function");
}

arrow()


// Anonymous function

function anno (){
    return function(){
        console.log("This is anonymous function");
    }
}

anno()()