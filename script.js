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



//delegation

mainContainer.addEventListener("click", function (event) {
  //for interview btn
  if (event.target.classList.contains("interview-btn")) {
    let parentNode = event.target.parentNode.parentNode;
    console.log(parentNode);

    let jobTitle = parentNode.querySelector(".job-title").innerText;
    let jobRole = parentNode.querySelector(".job-role").innerText;
    let jobOffer = parentNode.querySelector(".job-offer").innerText;
    //let badgeElement = parentNode.querySelector(".badge").innerText;
    let jobNote = parentNode.querySelector(".job-note").innerText;

    let badgeElement = parentNode.querySelector(".badge");
    badgeElement.innerText = "Interview";
    badgeElement.classList.remove("bg-green-500", "bg-red-500");
    badgeElement.classList.add("bg-green-500", "text-white");

    let cardInfo = {
      jobTitle,
      jobRole,
      jobOffer,
      badge: "Interview",
      jobNote,
    };

    let jobExist = interviewList.find((i) => i.jobTitle == cardInfo.jobTitle);

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    //count the card of interview list
    calculateCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    let parentNode = event.target.parentNode.parentNode;

    let jobTitle = parentNode.querySelector(".job-title").innerText;
    let jobRole = parentNode.querySelector(".job-role").innerText;
    let jobOffer = parentNode.querySelector(".job-offer").innerText;
    //let badgeElement = parentNode.querySelector(".badge").innerText;
    let jobNote = parentNode.querySelector(".job-note").innerText;

    let badgeElement = parentNode.querySelector(".badge");
    badgeElement.innerText = "Rejected";
    badgeElement.classList.remove("bg-green-500", "bg-red-500");
    badgeElement.classList.add("bg-red-500", "text-white");

    let cardInfo = {
      jobTitle,
      jobRole,
      jobOffer,
      badge: "Rejected",
      jobNote,
    };

    let jobExist = rejectedList.find((i) => i.jobTitle == cardInfo.jobTitle);

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    //count the card from rejected
    calculateCount();
  }
});