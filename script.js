const BASE_URL = "https://calculator-hub-project-1.onrender.com";

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

/* COMMON FETCH */
async function fetchData(url, id, label) {
  try {
    console.log("API URL:", url);

    const res = await fetch(url, {
      method: "GET",
      mode: "cors"
    });

    if (!res.ok) {
      throw new Error("API failed");
    }

    const data = await res.json();

    console.log("Response:", data);

    document.getElementById(id).innerText =
      `${label}: ${data.result}`;

  } catch (e) {
    console.error("ERROR:", e);

    document.getElementById(id).innerText =
      "Error: Backend not responding";
  }
}

/* ================= FIXED FUNCTIONS ================= */

/* BMI */
function getBMI() {
  const weight = document.getElementById("bmiWeight").value;
  const height = document.getElementById("bmiHeight").value;

  fetchData(`${BASE_URL}/api/calculators/bmi?weight=${weight}&height=${height}`, "bmiResult", "BMI");
}

/* Percentage */
function getPercentage() {
  const obtainedVal = document.getElementById("obtained").value;
  const totalVal = document.getElementById("total").value;

  fetchData(`${BASE_URL}/api/calculators/percentage?obtained=${obtainedVal}&total=${totalVal}`, "percentageResult", "Percentage");
}

/* Age */
function getAge() {
  const year = document.getElementById("birthYear").value;

  fetchData(`${BASE_URL}/api/calculators/age?birthYear=${year}`, "ageResult", "Age");
}

/* EMI ✅ FIXED */
function getEMI() {
  const p = document.getElementById("principal").value;
  const r = document.getElementById("rate").value;
  const t = document.getElementById("time").value;

  fetchData(`${BASE_URL}/api/calculators/emi?principal=${p}&rate=${r}&time=${t}`, "emiResult", "EMI");
}

/* GST */
function getGST() {
  const amount = document.getElementById("gstAmount").value;
  const rateVal = document.getElementById("gstRate").value;

  fetchData(`${BASE_URL}/api/calculators/gst?amount=${amount}&rate=${rateVal}`, "gstResult", "GST");
}

/* ROI */
function getROI() {
  const gain = document.getElementById("roiReturns").value;
  const invest = document.getElementById("roiInvestment").value;

  fetchData(`${BASE_URL}/api/calculators/roi?gain=${gain}&investment=${invest}`, "roiResult", "ROI");
}

/* Interest */
function getInterest() {
  const p = document.getElementById("intPrincipal").value;
  const r = document.getElementById("intRate").value;
  const t = document.getElementById("intTime").value;

  fetchData(`${BASE_URL}/api/calculators/interest?p=${p}&r=${r}&t=${t}`, "interestResult", "Interest");
}

/* Break-even */
function getBreakeven() {
  const fixed = document.getElementById("fixedCost").value;
  const price = document.getElementById("pricePerUnit").value;
  const variable = document.getElementById("variableCost").value;

  fetchData(`${BASE_URL}/api/calculators/break-even?fixedCost=${fixed}&pricePerUnit=${price}&variableCost=${variable}`, "breakevenResult", "Break-even Units");
}

/* Time */
function getTimeDuration() {
  const start = document.getElementById("startTime").value;
  const end = document.getElementById("endTime").value;

  fetchData(`${BASE_URL}/api/calculators/time-duration?start=${start}&end=${end}`, "timeResult", "Duration");
}

/* Date diff */
function getDateDiff() {
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;

  fetchData(`${BASE_URL}/api/calculators/date-diff?start=${start}&end=${end}`, "dateResult", "Days");
}

/* Calories */
function getCalories() {
  const weight = document.getElementById("weightCal").value;

  fetchData(`${BASE_URL}/api/calculators/calories?weight=${weight}`, "calorieResult", "Calories");
}

/* Water */
function getWater() {
  const weight = document.getElementById("weightWater").value;

  fetchData(`${BASE_URL}/api/calculators/water?weight=${weight}`, "waterResult", "Water Intake");
}

/* Pregnancy */
function getPregnancy() {
  const date = document.getElementById("lastPeriod").value;

  fetchData(`${BASE_URL}/api/calculators/pregnancy?lastPeriod=${date}`, "pregnancyResult", "Due Date");
}

/* Startup */
function getValuation() {
  const rev = document.getElementById("revenueVal").value;
  const mul = document.getElementById("growthVal").value;

  fetchData(`${BASE_URL}/api/calculators/startup?revenue=${rev}&multiplier=${mul}`, "valuationResult", "Valuation");
}

/* Profit */
function getProfit() {
  const cost = document.getElementById("costProfit").value;
  const revenue = document.getElementById("revenueProfit").value;

  fetchData(`${BASE_URL}/api/calculators/profit?cost=${cost}&revenue=${revenue}`, "profitResult", "Profit Margin");
}

/* Cost */
function getCost() {
  const fixed = document.getElementById("fixedCostEst").value;
  const variable = document.getElementById("variableCostEst").value;
  const units = document.getElementById("unitsEst").value;

  fetchData(`${BASE_URL}/api/calculators/cost?fixedCost=${fixed}&variableCost=${variable}&units=${units}`, "costResult", "Total Cost");
}

/* Search */
function filterTools() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  document.querySelectorAll(".section").forEach(section => {
    let hasMatch = false;

    section.querySelectorAll(".tool").forEach(tool => {
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