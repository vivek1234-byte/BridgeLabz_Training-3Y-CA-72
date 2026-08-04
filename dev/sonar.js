// sonar.js
function calculateDistance(timeSeconds, speedOfSound = 343) {
    if (typeof timeSeconds !== 'number' || timeSeconds <= 0) {
        throw new Error('timeSeconds must be a positive number');
    }
    return (speedOfSound * timeSeconds) / 2;
}

const pulseTime = 0.12;
const distanceMeters = calculateDistance(pulseTime);

console.log(`Pulse time: ${pulseTime}s`);
console.log(`Distance: ${distanceMeters.toFixed(2)} meters`);

module.exports = { calculateDistance };