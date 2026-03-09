let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

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

//filter count
let jobTotalText = document.getElementById("job-total-text");

//dashbourd count function
function calculateCount() {
  let totalJobs = allCards.children.length;
  totalCount.innerText = totalJobs;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  updateTotalText();
}
calculateCount();

//total text update function
function updateTotalText(){
    let totalJobs=allCards.children.length
    
    if(currentStatus==="all-filter-btn"){
        jobTotalText.innerText=`${totalJobs} jobs`
    }
    else if(currentStatus==="interview-filter-btn"){
        jobTotalText.innerText=`${interviewList.length} of ${totalJobs} jobs`
    }
    else if(currentStatus==="rejected-filter-btn"){
        jobTotalText.innerText=`${rejectedList.length} of ${totalJobs} jobs`
    }
}

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
  updateTotalText();
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

    //remove job card from rejected list
    rejectedList = rejectedList.filter((i) => i.jobTitle != cardInfo.jobTitle);
    //after remove rerender the html
    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
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

    //remove job card from interview list
    interviewList = interviewList.filter(
      (i) => i.jobTitle != cardInfo.jobTitle,
    );
    //after remove rerender the html
    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    //count the card from rejected
    calculateCount();
  }
});

//render sections

function renderInterview() {
  filterSection.innerHTML = "";

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className =
      "flex justify-between p-8 mb-4 border-transparent shadow-sm job-card";
    div.innerHTML = `
            <div class="space-y-4">
            <div class="space-y-2">
              <h1 class="text-xl font-bold job-title">${interview.jobTitle}</h1>
              <p class="job-role text-gray-500/100">${interview.jobRole}</p>
            </div>
            <div>
              <p class="job-offer text-gray-500/100">
                ${interview.jobOffer}
              </p>
            </div>

            <div class="space-y-2">
              <p
                class="p-5 mb-5 font-bold text-white bg-green-500 badge"
              >
                ${interview.badge}
              </p>
              <p class="job-note text-gray-500/100">
                ${interview.jobNote}
              </p>
            </div>

            <div class="flex gap-4">
              <button class="p-4 bg-green-200 rounded-xl interview-btn">
                Interview
              </button>
              <button class="p-4 bg-red-200 rounded-xl rejected-btn">
                Rejected
              </button>
            </div>
          </div>
          <div class="flex-shrink-0">
            <button class="p-2 border rounded-full delete-btn">
              <img src="./Trash.png" alt="Delete" />
            </button>
          </div>
        `;
    filterSection.append(div);
  }
}

//render rejected section

function renderRejected() {
  filterSection.innerHTML = "";
  
  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "flex justify-between p-8 mb-4 border-transparent shadow-sm job-card";
    div.innerHTML = `
            <div class="space-y-4">
            <div class="space-y-2">
              <h1 class="text-xl font-bold job-title">${rejected.jobTitle}</h1>
              <p class="job-role text-gray-500/100">${rejected.jobRole}</p>
            </div>
            <div>
              <p class="job-offer text-gray-500/100">
                ${rejected.jobOffer}
              </p>
            </div>

            <div class="space-y-2">
              <p
                class="p-5 mb-5 font-bold text-white bg-red-500 badge"
              >
                ${rejected.badge}
              </p>
              <p class="job-note text-gray-500/100">
                ${rejected.jobNote}
              </p>
            </div>

            <div class="flex gap-4">
              <button class="p-4 bg-green-200 rounded-xl interview-btn">
                Interview
              </button>
              <button class="p-4 bg-red-200 rounded-xl rejected-btn">
                Rejected
              </button>
            </div>
          </div>
          <div class="flex-shrink-0">
            <button class="p-2 border rounded-full delete-btn">
              <img src="./Trash.png" alt="Delete" />
            </button>
          </div>
        `;
    filterSection.append(div);
  }
}