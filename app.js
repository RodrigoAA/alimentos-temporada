// DOM Elements
const heroMonthEl = document.getElementById('heroMonth');
const statStartingEl = document.getElementById('statStarting');
const statPeakEl = document.getElementById('statPeak');
const statEndingEl = document.getElementById('statEnding');

// Food list elements
const fruitsStartingEl = document.getElementById('fruitsStarting');
const fruitsPeakEl = document.getElementById('fruitsPeak');
const fruitsEndingEl = document.getElementById('fruitsEnding');
const vegetablesStartingEl = document.getElementById('vegetablesStarting');
const vegetablesPeakEl = document.getElementById('vegetablesPeak');
const vegetablesEndingEl = document.getElementById('vegetablesEnding');
const fishStartingEl = document.getElementById('fishStarting');
const fishPeakEl = document.getElementById('fishPeak');
const fishEndingEl = document.getElementById('fishEnding');
const meatStartingEl = document.getElementById('meatStarting');
const meatPeakEl = document.getElementById('meatPeak');
const meatEndingEl = document.getElementById('meatEnding');

// Current month
const currentMonth = new Date().getMonth();

// Initialize the app
function init() {
    renderCurrentMonth();
}

// Render all data for the current month
function renderCurrentMonth() {
    const foods = getFoodsByPhase(currentMonth);

    // Update hero section
    heroMonthEl.textContent = MONTHS[currentMonth].name;

    // Calculate totals for all categories
    const categories = ['fruits', 'vegetables', 'fish', 'meat'];

    let totalStarting = 0;
    let totalPeak = 0;
    let totalEnding = 0;

    for (const cat of categories) {
        totalStarting += foods[cat].starting.length;
        totalPeak += foods[cat].peak.length;
        totalEnding += foods[cat].ending.length;
    }

    // Update stats
    statStartingEl.textContent = totalStarting;
    statPeakEl.textContent = totalPeak;
    statEndingEl.textContent = totalEnding;

    // Render all food lists
    renderFoodList(fruitsStartingEl, foods.fruits.starting);
    renderFoodList(fruitsPeakEl, foods.fruits.peak);
    renderFoodList(fruitsEndingEl, foods.fruits.ending);

    renderFoodList(vegetablesStartingEl, foods.vegetables.starting);
    renderFoodList(vegetablesPeakEl, foods.vegetables.peak);
    renderFoodList(vegetablesEndingEl, foods.vegetables.ending);

    renderFoodList(fishStartingEl, foods.fish.starting);
    renderFoodList(fishPeakEl, foods.fish.peak);
    renderFoodList(fishEndingEl, foods.fish.ending);

    renderFoodList(meatStartingEl, foods.meat.starting);
    renderFoodList(meatPeakEl, foods.meat.peak);
    renderFoodList(meatEndingEl, foods.meat.ending);
}

// Render a food list
function renderFoodList(container, items) {
    if (!items || items.length === 0) {
        container.innerHTML = '<li class="food-list--empty">-</li>';
        return;
    }

    container.innerHTML = items.map(item => `
        <li class="food-item">
            <span class="food-item__icon">${item.icon}</span>
            <span class="food-item__name">${item.name}</span>
        </li>
    `).join('');
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
