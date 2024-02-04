var _startDate = new Date(2024, 0, 27, 13, 0, 0, 0);
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
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106075&authkey=%21ACnjiPaefTeDfFQ",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106077&authkey=%21AATxQdx3fovweYw",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106076&authkey=%21AM3JQaGj-ld1BA4",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106079&authkey=%21AD_ZZ9fUIX7aAMo",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106080&authkey=%21APjpcTEhMDIXNrg",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106078&authkey=%21ANBpCdmZIee07eo",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106082&authkey=%21AO_vxGhhoJ_k4yk",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106083&authkey=%21AKIY2OBabNXUyts",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106084&authkey=%21ANxOpUcGIt35Jx8",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106085&authkey=%21AE25Q7f5bTFQ5vA",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106086&authkey=%21ADFHbh9U4lkZvIM",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106081&authkey=%21AHDWTwpgLOEYrTk",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106087&authkey=%21AABY-kHf7fyKqhY",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106088&authkey=%21AE4I0VEqtybNIOo",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106089&authkey=%21AEKZLNGIuO5wR14",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106090&authkey=%21APLLtHFnhmEgktw",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106091&authkey=%21AJQnO2ouMusTAPo",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106092&authkey=%21AP6XbVoc-YmuXhA",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106093&authkey=%21AARtEX1PNYNY2vk",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106094&authkey=%21AOfQBjNqBa2dAcM",
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21106095&authkey=%21AMermHxyMJZ4d9w"
    
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