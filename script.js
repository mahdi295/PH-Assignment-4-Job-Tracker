let interviewList = [];
let rejectedList = [];

//all cards and main container
let allCards = document.getElementById("all-cards");
let mainContainer = document.querySelector("main");
let filterSection = document.getElementById("filter-section");

// filter button
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectedFilterBtn = document.getElementById("rejected-filter-btn");

//dashboard count
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");


//dashbourd count function
function calculateCount() {
  let totalJobs = allCards.children.length;
  totalCount.innerText = totalJobs;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();



//tab toggle with color function
function toggleStyle(id) {
  //remove btn-active
  allFilterBtn.classList.remove("btn-active");
  interviewFilterBtn.classList.remove("btn-active");
  rejectedFilterBtn.classList.remove("btn-active");

  //find the click btn
  let selected = document.getElementById(id); //click btn
  currentStatus = id;

  //add btn-active
  selected.classList.add("btn-active");

  //filter tab while clicking

  if (id == "all-filter-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "interview-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "rejected-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}