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
const BASE_URL = "https://calculator-hub-project-1.onrender.com";

/* ================= COMMON FETCH ================= */
async function callAPI(url, resultId) {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("API failed");
        }

        const data = await res.json();

        document.getElementById(resultId).innerText =
            "Result: " + data.result;

    } catch (err) {
        console.error(err);
        document.getElementById(resultId).innerText =
            "Error getting result";
    }
}

/* ================= FINANCE ================= */

function calculateEMI() {
    const p = document.getElementById("principal").value;
    const r = document.getElementById("rate").value;
    const t = document.getElementById("time").value;

    const url = `${BASE_URL}/api/emi?principal=${p}&rate=${r}&time=${t}`;
    callAPI(url, "emiResult");
}

function getGST() {
    const amount = document.getElementById("gstAmount").value;
    const rate = document.getElementById("gstRate").value;

    const url = `${BASE_URL}/api/gst?amount=${amount}&rate=${rate}`;
    callAPI(url, "gstResult");
}

function getROI() {
    const investment = document.getElementById("roiInvestment").value;
    const returns = document.getElementById("roiReturns").value;

    const url = `${BASE_URL}/api/roi?investment=${investment}&returns=${returns}`;
    callAPI(url, "roiResult");
}

function getInterest() {
    const p = document.getElementById("intPrincipal").value;
    const r = document.getElementById("intRate").value;
    const t = document.getElementById("intTime").value;

    const url = `${BASE_URL}/api/interest?principal=${p}&rate=${r}&time=${t}`;
    callAPI(url, "interestResult");
}

function getBreakeven() {
    const fixed = document.getElementById("fixedCost").value;
    const price = document.getElementById("pricePerUnit").value;
    const variable = document.getElementById("variableCost").value;

    const url = `${BASE_URL}/api/breakeven?fixedCost=${fixed}&pricePerUnit=${price}&variableCost=${variable}`;
    callAPI(url, "breakevenResult");
}

/* ================= PERSONAL ================= */

function getAge() {
    const year = document.getElementById("birthYear").value;

    const url = `${BASE_URL}/api/age?year=${year}`;
    callAPI(url, "ageResult");
}

function getPercentage() {
    const obtained = document.getElementById("obtained").value;
    const total = document.getElementById("total").value;

    const url = `${BASE_URL}/api/percentage?obtained=${obtained}&total=${total}`;
    callAPI(url, "percentageResult");
}

function getTimeDuration() {
    const start = document.getElementById("startTime").value;
    const end = document.getElementById("endTime").value;

    const url = `${BASE_URL}/api/time?start=${start}&end=${end}`;
    callAPI(url, "timeResult");
}

function getDateDiff() {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;

    const url = `${BASE_URL}/api/date?start=${start}&end=${end}`;
    callAPI(url, "dateResult");
}

/* ================= HEALTH ================= */

function getBMI() {
    const w = document.getElementById("bmiWeight").value;
    const h = document.getElementById("bmiHeight").value;

    const url = `${BASE_URL}/api/bmi?weight=${w}&height=${h}`;
    callAPI(url, "bmiResult");
}

function getCalories() {
    const w = document.getElementById("weightCal").value;

    const url = `${BASE_URL}/api/calories?weight=${w}`;
    callAPI(url, "calorieResult");
}

function getWater() {
    const w = document.getElementById("weightWater").value;

    const url = `${BASE_URL}/api/water?weight=${w}`;
    callAPI(url, "waterResult");
}

function getPregnancy() {
    const date = document.getElementById("lastPeriod").value;

    const url = `${BASE_URL}/api/pregnancy?date=${date}`;
    callAPI(url, "pregnancyResult");
}

/* ================= BUSINESS ================= */

function getValuation() {
    const revenue = document.getElementById("revenueVal").value;
    const growth = document.getElementById("growthVal").value;

    const url = `${BASE_URL}/api/valuation?revenue=${revenue}&growth=${growth}`;
    callAPI(url, "valuationResult");
}

function getProfit() {
    const cost = document.getElementById("costProfit").value;
    const revenue = document.getElementById("revenueProfit").value;

    const url = `${BASE_URL}/api/profit?cost=${cost}&revenue=${revenue}`;
    callAPI(url, "profitResult");
}

function getCost() {
    const fixed = document.getElementById("fixedCostEst").value;
    const variable = document.getElementById("variableCostEst").value;
    const units = document.getElementById("unitsEst").value;

    const url = `${BASE_URL}/api/cost?fixed=${fixed}&variable=${variable}&units=${units}`;
    callAPI(url, "costResult");
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