const endDate= "January 01, 2024 12:00 AM"
document.querySelector(".date").textContent=endDate
let timeBox = document.querySelectorAll(".value")



function clock(){
    let end = new Date(endDate)
    let now = new Date()
    let diff = end - now

    // Converting Into Days
    let days = Math.floor((diff / (1000*60*60*24)))

    // Removing Days From the Diff
    diff= diff-days* (1000*60*60*24)

    // Converting Into Hours
    let hours =Math.floor((diff / (1000*60*60)))
   
    //Removing Hours from Diff
    diff= diff-hours* (1000*60*60)

    // Converting Into Minutes
    let min =Math.floor((diff / (1000*60)))

     //Removing Minutes from Diff
    diff= diff-min* (1000*60)
    // Coverting Into Seconds
   let seconds=Math.floor(diff / 1000)
    timeBox[0].textContent=days
    timeBox[1].textContent=hours
    timeBox[2].textContent=min
    timeBox[3].textContent=seconds

    if(days==0 && hours == 0 && min==0 && seconds==0){
        clearInterval(interval)
        document.querySelector("h1").textContent = "Happy New Year"
    }

    
    
}

var interval =setInterval(clock,1000)
