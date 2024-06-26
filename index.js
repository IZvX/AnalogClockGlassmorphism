const hourhand = document.getElementById("hour-hand")
const minutehand = document.getElementById("minute-hand")
const secondhand = document.getElementById("second-hand")
const dark = document.getElementById("dark")
var root = document.querySelector(':root');
const clock = document.getElementById("clock");
const ball = document.getElementById("ball");

/*
    LIGHT
    --primary : rgba(241, 247, 255, 0.219);
    --secondary : rgb(9, 25, 33);
    --hour: #F81460;
    --minute: var(--secondary);
    --second: #1A74BE;
    

    --shadow1: rgba(0, 0, 0, 0.123)
    --shadow2: rgba(163, 177, 198, 0.6)
    --shadow3: rgba(255, 255, 255, 0.5)
    --shadow4: rgba(163, 177, 198, 0.3)
    --shadow5: rgba(167, 167, 167, 0.041)
    --shadow6: rgba(163, 177, 198, 0.3)
    --shadow7: rgba(255, 255, 255, 0.2)



    --shadow1: rgba(0, 0, 0, 0.123)
    --shadow2: rgba(55, 60, 66, 0.6)
    --shadow3: rgba(71, 63, 63, 0.5)
    --shadow4: rgba(55, 60, 66, 0.3)
    --shadow5: rgba(71, 63, 63, 0.041)
    --shadow6: rgba(55, 60, 66, 0.3)
    --shadow7: rgba(71, 63, 63, 0.2)

*/

ball.onclick = function () {
    if(dark.checked == true)
    {
        dark.checked = false;
    }else{
        dark.checked = true;
    }
}


dark.onclick = function () {
    theme();
}

window.onload = function () {
    const date = new Date();

    var second = date.getSeconds()*30/5;
    var minute = date.getMinutes()*30/5;
    var hour = (date.getHours()*30);

    secondhand.style = `rotate: ${second}deg`;
    minutehand.style = `rotate: ${minute}deg`;
    hourhand.style = `rotate: ${hour}deg`;

    theme()
}


window.setInterval(function () {
    const date = new Date();

    var second = date.getSeconds()*30/5;
    var minute = date.getMinutes()*30/5;
    var hour = (date.getHours()*30);

    if(second >= 348)
    {
        secondhand.style = "transition-duration: 1ms;"
    }else{
        secondhand.style = "transition-duration: 1s;"
    }

    secondhand.style = `rotate: ${second}deg`;
    minutehand.style = `rotate: ${minute}deg`;
    hourhand.style = `rotate: ${hour}deg`;




    console.log(second + ":" + minute + ":" + hour)
},1000)

function theme() {
    if (dark.checked == false) {
        root.style.setProperty("--primary","#ffffff08")
        root.style.setProperty("--secondary","#ffffff")
        root.style.setProperty("--hour","#F81460")
        root.style.setProperty("--minute","#ffffff")
        root.style.setProperty("--second","#1A74BE")

        root.style.setProperty("--shadow1","rgba(0, 0, 0, 0.123)")
        root.style.setProperty("--shadow2","rgba(163, 177, 198, 0.6)")
        root.style.setProperty("--shadow3","rgba(255, 255, 255, 0.5)")
        root.style.setProperty("--shadow4","rgba(163, 177, 198, 0.3)")
        root.style.setProperty("--shadow5","rgba(167, 167, 167, 0.041)")
        root.style.setProperty("--shadow6","rgba(163, 177, 198, 0.3)")
        root.style.setProperty("--shadow7","rgba(255, 255, 255, 0.2)")
        document.body.style = "background-image: url(day.avif)"

        ball.style = "background-image: url(Sun.png); transform : translateX(0px);"
        
    }else{
        root.style.setProperty("--primary","#09182008")
        root.style.setProperty("--secondary","#ffffff")
        root.style.setProperty("--hour","#F81460")
        root.style.setProperty("--minute","#ffffff")
        root.style.setProperty("--second","#1A74BE")
        ball.style = "background-image: url(Moon.png); transform : translateX(80px);"
        document.body.style = "background-image: url(night.webp)"

        root.style.setProperty("--shadow1","rgba(0, 0, 0, 0.123)")
        root.style.setProperty("--shadow2","rgba(0, 0, 0, 0.6)")
        root.style.setProperty("--shadow3","rgba(0, 0, 0, 0.5)")
        root.style.setProperty("--shadow4","rgba(0, 0, 0, 0.3)")
        root.style.setProperty("--shadow5","rgba(0, 0, 0, 0.041)")
        root.style.setProperty("--shadow6","rgba(0, 0, 0, 0.3)")
        root.style.setProperty("--shadow7","rgba(0, 0, 0, 0.2)")

        
    }
}


document.getElementById("discord").onclick = function () {
    navigator.clipboard.writeText("khalil_yfz")
    alert("Copied to clipboard!")
}