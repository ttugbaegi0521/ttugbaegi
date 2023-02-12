import './App.css';
import { useState,useEffect } from 'react';

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let months = ["1", "2", "3", "4", "5", "6", "7",
"8", "9", "10", "11", "12"];

function App() {

  useEffect(() => {   // update dates when page is loaded
    const onPageLoad = () => {
      renderCalendar();
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }

  }, []);



  const [monthNow, setMonthNow] = useState(`${currentYear}-${months[currentMonth]}`);
  const [dateNow, setDateNow] = useState("");

  function renderCalendar() { //update dates and month
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(); 
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = `<ul id="dates">`;
    
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
                     && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    liTag += `</ul>`;
    // currentDate = `${currentYear}-${months[currentMonth]}`;
    setMonthNow(`${currentYear}-${months[currentMonth]}`);
  //  days.innerHTML = liTag;
    setDateNow(liTag);
  }

  function checkMonth(){
    if(currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth, new Date().getDate());
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
        date = new Date();
    }
  }

  function previousMonth(){ //can clean it after
    currentMonth--;
    checkMonth();
    renderCalendar();
  }
  
  function nextMonth(){
    currentMonth++;
    checkMonth();
    renderCalendar();
  }


  return (
    <div className="App">
      <div className="wrapper">
        <div className="top">
          <div className="calender_nav">
            <span id="prev" className="material-symbols-rounded" onClick={previousMonth}>chevron_left</span>
            <p id="current_date">{monthNow}</p>
            <span id="next" className="material-symbols-rounded" onClick={nextMonth}>chevron_right</span>
          </div>
        </div>
        <div className="calendar">
          <ul className="weeks">
            <li id="weekend">Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li id="weekend">Sat</li>
          </ul>
          {/* <ul id="days"> <p dangerouslySetInnerHTML={ {__html: dateNow} }></p> </ul> */}
          <div id="days" dangerouslySetInnerHTML={ {__html: dateNow} }></div>
        </div>
      </div>
    </div>
  );
}

export default App;
