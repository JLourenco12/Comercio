const domElement = {
    hour_left: document.querySelector('.hour-left'),
    hour_right: document.querySelector('.hour-right'),
    minute_left: document.querySelector('.minute-left'),
    minuto_right: document.querySelector('.minute-right'),
    second_left: document.querySelector('.second-left'),
    second_right: document.querySelector('.second-right')
}

console.log('YES');

let countDownDate = new Date("Dec 5, 2021 00:37:25").getTime();


let x = setInterval(() => {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    console.log(seconds);
    console.log(Math.floor(seconds/10));
    console.log(seconds%10);

    
    domElement.hour_left.innerHTML = Math.floor(hours/10);
    domElement.hour_right.innerHTML = Math.floor(hours%10);
    
    domElement.minute_left.innerHTML = Math.floor(minutes/10);
    domElement.minuto_right.innerHTML = Math.floor(minutes%10);
    
    domElement.second_left.innerHTML = Math.floor(seconds/10);
    domElement.second_right.innerHTML = Math.floor(seconds%10);


    //document.getElementById("demo").innerHTML = `${days} d ${}`;

    if (distance < 0){
        clearInterval(x);
    }
}, 1000);