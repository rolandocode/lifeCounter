var _startDate = new Date(2023, 0, 14, 0, 0, 0, 0);
var milliSecondsInASecond = 1000;
var hoursInADay = 24;
var minutesInAnHour = 60;
var SecondsInAMinute  = 60;
var _newCountingMode = true;

var totalSeconds = 0;
function putDaysWithoutAlcohol(){

    var timeDifference = new  Date().getTime() - _startDate;

    if (_newCountingMode){
        var secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        var minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        var hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        var daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
        var years = getYears();

        document.getElementById("noAlcoholDays").innerText =  daysToDday +" días";
        document.getElementById("noAlcoholSeconds").innerText = secondsToDday +" segundos";
        document.getElementById("noAlcoholMinutes").innerText =  minutesToDday+" minutos";
        document.getElementById("noAlcoholHours").innerText =  hoursToDday +" horas";
    }
    else{
        var secondsToDday = getInSeconds();
        var minutesToDday = getInMinutes();
        var hoursToDday = getInHours();
        var daysToDday = calculateDays();

        document.getElementById("noAlcoholDays").innerText =  daysToDday +" días";
        document.getElementById("noAlcoholSeconds").innerText = secondsToDday +" segundos";
        document.getElementById("noAlcoholMinutes").innerText =  minutesToDday+" minutos";
        document.getElementById("noAlcoholHours").innerText =  hoursToDday +" horas";
    }


    var years = getYears();

    if (years != 0)
        document.getElementById("completedYears").innerText =  "¡FELICIDADES! has arrebasado " + (years == 1 ? "un año " : years + " años ") + "sobrio";
}

var localDoggiesPhotos = [
    "https://onedrive.live.com/embed?resid=E530B3F2B44ACA4B%21107019&authkey=%21AAWWKDbBtKS39_A"
    
]

function capture() {

     document.getElementById("captureButton").style.display = "none"
    html2canvas(document.body, {
        // https://github.com/niklasvh/html2canvas/issues/722
        letterRendering: 1, allowTaint: true, useCORS: true, logging: true
    }).then(function(canvas) {
        // https://stackoverflow.com/questions/18231259/how-to-take-screen-shot-of-current-webpage-using-javascript-jquery
        var imgString = canvas.toDataURL("image/png");
        var image = new Image();
        image.src = imgString;

        // https://stackoverflow.com/questions/27798126/how-to-open-the-newly-created-image-in-a-new-tab
        // var w = window.open("");
        // w.document.write(image.outerHTML);
        document.getElementById("captureButton").style.display = "inline"
        downloadImage(image.src);

    });
}

async function downloadImage(
    imageSrc,
    nameOfDownload = 'my-image.png',
  ) {
    const response = await fetch(imageSrc);
    const blobImage = await response.blob();
    const href = URL.createObjectURL(blobImage);
  
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }
  

function getDoggie(){
    var showFromAPI = getRandomInt(2);

    if (showFromAPI == 1) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data =>{
            document.getElementById("doggie").src = data.message;

        });
    }
    else{

    try {
    var randomLocalImage = getRandomInt(localDoggiesPhotos.length)
    document.getElementById("doggie").src = localDoggiesPhotos[randomLocalImage];
    }
    catch(ex){
        console.log(ex);
    }
    // //https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Example_Storing_an_image_from_a_foreign_origin
    // let imageURL = localDoggiesPhotos[randomLocalImage];
    // let imageDescription = "The Mozilla logo";

    // downloadedImg = new Image();
    // downloadedImg.crossOrigin = "anonymous";
    // //   downloadedImg.addEventListener("load", imageReceived, false);
    // downloadedImg.alt = imageDescription;
    // downloadedImg.src = imageURL;
    // document.getElementById("doggie").src = downloadedImg.src;

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

function getYears(){

    debugger;
    var startDateYear = _startDate.getFullYear();
    var currentYear = new Date().getFullYear();

    if (startDateYear == currentYear)
        return 0;

    var difference = currentYear-startDateYear;
    var startDateMonth = _startDate.getMonth();
    var startDateDay = _startDate.getDate();
    var currentDay = new Date().getDate();
    if (new Date().getMonth() <= startDateMonth && currentDay < startDateDay)
        difference = difference -1;

    return difference;
}

function changeMode(){
    _newCountingMode = !_newCountingMode;
}

function updateSeconds()
{
    putDaysWithoutAlcohol();
}

putDaysWithoutAlcohol();
getDoggie();


setInterval(updateSeconds, 1000);
