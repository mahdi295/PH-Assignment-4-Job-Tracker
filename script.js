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
