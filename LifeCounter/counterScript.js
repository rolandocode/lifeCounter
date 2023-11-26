var _startDate = new Date(2023, 0, 14, 12, 0, 0, 0);
var milliSecondsInASecond = 1000;
var hoursInADay = 24;
var minutesInAnHour = 60;
var SecondsInAMinute  = 60;

var totalSeconds = 0;
function putDaysWithoutAlcohol(){
    debugger;

    var timeDifference = new  Date().getTime() - _startDate;

    var secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    var minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    var hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    var daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));



    document.getElementById("noAlcoholDays").innerText =  daysToDday +" días";
    document.getElementById("noAlcoholSeconds").innerText = secondsToDday +" segundos";
    document.getElementById("noAlcoholMinutes").innerText =  minutesToDday+" minutos";
    document.getElementById("noAlcoholHours").innerText =  hoursToDday +" horas";

}

var localDoggiesPhotos = [
    "http://drive.google.com/uc?export=view&id=1fSH2GhZ6VFLtiGDMmGqx2fg0Sg4GIo4q",
    "http://drive.google.com/uc?export=view&id=1V3OCiorXnb83jaqHzPBMDwCT8jUGN3m3",
    "http://drive.google.com/uc?export=view&id=1DzK9IHJQb4xGYho617Si6O16Zd5tHb08",
    "http://drive.google.com/uc?export=view&id=1IT0AOpif76aujz8uPCD_r_bt88UtWH_N",
    "http://drive.google.com/uc?export=view&id=1mv48EuqljxJaaxl4weBoB7eJo_q18H5N",
    "http://drive.google.com/uc?export=view&id=1T4UP5xy5vBYhAaf0DTu8rBV5cNI71xyV",
    "http://drive.google.com/uc?export=view&id=1r5m6y4kSvK4DycIKhoYc-BsdqJXjexD0",
    "http://drive.google.com/uc?export=view&id=1j27-LWC-cCgodPf2Uul8jF8Afsqk8YZ1"
    
    
]

function getDoggie(){
    debugger;
    var showFromAPI = getRandomInt(2);

    if (showFromAPI == 1) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data =>{
            document.getElementById("doggie").src = data.message;

        });
    }
    else{
      var randomLocalImage = getRandomInt(localDoggiesPhotos.length)
      document.getElementById("doggie").src = localDoggiesPhotos[randomLocalImage];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function calculateDays (){
    var StartDate = _startDate;
    var currentDate = new Date();
    var difference = currentDate.getTime() - StartDate.getTime()
    var totalDays = difference / (1000 * 3600 * 24);
    totalDays = totalDays.toFixed(4);
    return totalDays;
}

function getInSeconds (){
    var StartDate = _startDate;
    var currentDate = new Date();
    var difference = currentDate.getTime() - StartDate.getTime()
    var seconds = Math.floor(difference / 1000);
    return seconds;
}

function getInHours (){
    var StartDate = _startDate;
    var currentDate = new Date();
    var difference = currentDate.getTime() - StartDate.getTime()
    var totalHours = difference / (1000 * 3600)
    totalHours =  totalHours.toFixed(4);
    return totalHours;
}

function getInMinutes (){
    var StartDate = _startDate;
    var currentDate = new Date();
    var difference = currentDate.getTime() - StartDate.getTime()
    var totalMinutes = Math.floor((difference / (1000 * 3600)) * 60)
    return totalMinutes;
}

function updateSeconds()
{
    putDaysWithoutAlcohol();
}


putDaysWithoutAlcohol();
getDoggie();


debugger;
setInterval(updateSeconds, 1000);