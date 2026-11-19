/*
 * Q5. Weather Activity Planner
 * Suggests an activity based on temperature, rain and wind speed.
 */

/**
 * Returns advice for the given weather conditions.
 * Conditions are checked in priority order.
 */
function planActivity(temperature, isRaining, windSpeed) {
    if (isRaining) {
        return "Stay indoors with hot coffee.";
    } else if (temperature > 35) {
        return "Go swimming.";
    } else if (temperature < 15 && windSpeed > 20) {
        return "Too cold and windy — stay home.";
    } else {
        return "Perfect day for a walk.";
    }
}

// A combined && / || check as an extra warning:
// warn when it is extreme heat OR (cold AND windy) while not raining
function isExtremeWeather(temperature, isRaining, windSpeed) {
    return !isRaining && (temperature > 35 || (temperature < 15 && windSpeed > 20));
}

// Different weather scenarios to test every branch
const scenarios = [
    { temperature: 25, isRaining: true, windSpeed: 10 },
    { temperature: 38, isRaining: false, windSpeed: 5 },
    { temperature: 10, isRaining: false, windSpeed: 25 },
    { temperature: 22, isRaining: false, windSpeed: 8 },
];

scenarios.forEach(({ temperature, isRaining, windSpeed }) => {
    const advice = planActivity(temperature, isRaining, windSpeed);
    const extreme = isExtremeWeather(temperature, isRaining, windSpeed) ? " [Extreme weather]" : "";
    console.log(`Temp: ${temperature}°C, Rain: ${isRaining}, Wind: ${windSpeed} km/h -> ${advice}${extreme}`);
});
