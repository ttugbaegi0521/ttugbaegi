let days = document.getElementById("days");
let currentDate = document.getElementById("current_date");
let prevNextIcon = document.querySelectorAll(".calender_nav span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let months = ["1", "2", "3", "4", "5", "6", "7",
"8", "9", "10", "11", "12"];

let renderCalendar = () => {
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(); // getting first day of month
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // getting last date of month
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(); // getting last day of month
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
                     && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${currentYear}-${months[currentMonth]}`; // passing current mon and yr as currentDate text
    days.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

        if(currentMonth < 0 || currentMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currentYear, currentMonth, new Date().getDate());
            currentYear = date.getFullYear(); // updating current year with new date year
            currentMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

days.onclick = (e) => { // adding click event on days ul
    console.log(months[currentMonth] + " - " + currentYear + " - " + e.target.innerText); // getting the clicked day
    window.open("/write/" + currentYear + months[currentMonth] + e.target.innerText, "_blank")
}