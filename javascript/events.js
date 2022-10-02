document.addEventListener("click", function (event) {
    let canvas = document.getElementById("game_canvas");
    const rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    if (state != 1){
        if (x > 0 &&  x < 1000 && y > 0 && y < 500){
            myApp.addObject(x, y, state);    
        }
    }

    
    myApp.draw();
})

cursor = function(i) {
    for (const [key, value] of Object.entries(types)) {
        if (key == i){
            document.getElementById(key).style.borderColor="blue"
        }
        else{
            document.getElementById(key).style.borderColor="black"
        }
    }
    state = i
}

movetoindex =function(){
    location.href='index.html';


}

playy= function(){
    if(document.getElementById("play").innerText=="Play"){
        console.log("Yo we doin' this?");
        document.getElementById("play").innerText="Pause";
        // played=1
        myApp.play = 1;
        //code= myApp.requestAnimationFrame.call(window, myApp.loop.bind(myApp));
        // mainstuff()

    }
    else{
        document.getElementById("play").innerText="Play";
        
        //myApp.cancelAnimationFrame(code);
        // played=0
        myApp.play = 0;
        


    }


}

// mainstuff=function(){
//     if(played){
//         myApp.requestAnimationFrame.call(window, myApp.loop.bind(myApp));
//     }

// }

instructions = function(){
    

    if(document.getElementById("instructs").style.visibility=="visible"){
        document.getElementById("instructs").style.visibility="hidden";
        document.getElementById("instructions").style.borderColor="black";
        document.getElementById("instructions_button").style.borderWidth="0px";

        document.getElementById("instructions_button").style.borderColor="black";



    }
    else{
        document.getElementById("instructs").style.visibility="visible";
        document.getElementById("instructions").style.borderColor="red";
        document.getElementById("instructions_button").style.borderWidth="5px";
        document.getElementById("instructions_button").style.borderColor="red";
    }
    }



reset = function(){

    location.href='./app.html'
}
redirectt = function(){

    location.href='./index.html'
}

screenshot = function () {
    dataURL = myApp.canvas.toDataURL();
    downloadURI(dataURL, "download.png");
}

reflection_checked = function () {
    reflect = 1 - reflect;
}