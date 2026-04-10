const BASE_URL = "http://localhost:8080";

/* Tabs */
function showSection(id, el) {
  document.querySelector(".container").style.display = "block";
  document.getElementById("toolView").style.display = "none";

  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}

/* Tool navigation */
function openTool(id) {
  document.querySelector(".container").style.display = "none";
  document.getElementById("toolView").style.display = "block";

  document.querySelectorAll(".tool-content").forEach(t => t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goBack() {
  document.querySelector(".container").style.display = "block";
  document.getElementById("toolView").style.display = "none";
}

/* API calls */
async function fetchData(url, id, label) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    document.getElementById(id).innerText = `${label}: ${data.result}`;
  } catch (e) {
    document.getElementById(id).innerText = "Error";
  }
}

/* ================= EXISTING ================= */

function getBMI() {
  fetchData(
    `${BASE_URL}/api/calculators/bmi?weight=${bmiWeight.value}&height=${bmiHeight.value}`,
    "bmiResult",
    "BMI"
  );
}

function getPercentage() {
  fetchData(
    `${BASE_URL}/api/calculators/percentage?obtained=${obtained.value}&total=${total.value}`,
    "percentageResult",
    "Percentage"
  );
}

function getAge() {
  fetchData(
    `${BASE_URL}/api/calculators/age?birthYear=${birthYear.value}`,
    "ageResult",
    "Age"
  );
}


function getEMI() {
  fetchData(`${BASE_URL}/api/calculators/emi?principal=${principal.value}&rate=${rate.value}&time=${time.value}`, "emiResult", "EMI");
}

/* ================= FINANCE ================= */

function getGST() {
  fetchData(
    `${BASE_URL}/api/calculators/gst?amount=${gstAmount.value}&rate=${gstRate.value}`,
    "gstResult",
    "GST"
  );
}


function getROI() {
  fetchData(`${BASE_URL}/api/calculators/roi?gain=${roiReturns.value}&investment=${roiInvestment.value}`, "roiResult", "ROI");
}

function getInterest() {
  fetchData(
    `${BASE_URL}/api/calculators/interest?p=${intPrincipal.value}&r=${intRate.value}&t=${intTime.value}`,
    "interestResult",
    "Interest"
  );
}


function getBreakeven() {
  fetchData(
    `${BASE_URL}/api/calculators/break-even?fixedCost=${fixedCost.value}&pricePerUnit=${pricePerUnit.value}&variableCost=${variableCost.value}`,
    "breakevenResult",
    "Break-even Units"
  );
}

/* ================= PERSONAL ================= */


function getTimeDuration() {
  const start = startTime.value.trim();
  const end = endTime.value.trim();

  fetchData(
    `${BASE_URL}/api/calculators/time-duration?start=${start}&end=${end}`,
    "timeResult",
    "Duration"
  );
}

function getDateDiff() {
  fetchData(
    `${BASE_URL}/api/calculators/date-diff?start=${startDate.value}&end=${endDate.value}`,
    "dateResult",
    "Days"
  );
}

/* ================= HEALTH ================= */

function getCalories() {
  fetchData(
    `${BASE_URL}/api/calculators/calories?weight=${weightCal.value}`,
    "calorieResult",
    "Calories"
  );
}

function getWater() {
  fetchData(
    `${BASE_URL}/api/calculators/water?weight=${weightWater.value}`,
    "waterResult",
    "Water Intake"
  );
}


function getPregnancy() {
  fetchData(`${BASE_URL}/api/calculators/pregnancy?lastPeriod=${lastPeriod.value}`, "pregnancyResult", "Due Date");
}

/* ================= BUSINESS ================= */


function getValuation() {
  fetchData(`${BASE_URL}/api/calculators/startup?revenue=${revenueVal.value}&multiplier=${growthVal.value}`, "valuationResult", "Valuation");
}

function getProfit() {
  fetchData(
    `${BASE_URL}/api/calculators/profit?cost=${costProfit.value}&revenue=${revenueProfit.value}`,
    "profitResult",
    "Profit Margin"
  );
}


function getCost() {
  fetchData(`${BASE_URL}/api/calculators/cost?fixedCost=${fixedCostEst.value}&variableCost=${variableCostEst.value}&units=${unitsEst.value}`, "costResult", "Total Cost");
}

/* ================= SEARCH ================= */

function filterTools() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    let hasMatch = false;

    const tools = section.querySelectorAll(".tool");

    tools.forEach(tool => {
      const title = tool.querySelector("h4").innerText.toLowerCase();

      if (title.includes(query)) {
        tool.style.display = "block";
        hasMatch = true;
      } else {
        tool.style.display = "none";
      }
    });

    section.style.display = hasMatch ? "block" : "none";
  });
}