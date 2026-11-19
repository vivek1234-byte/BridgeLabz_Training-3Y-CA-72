/*
 * Q10. Citizen Eligibility Validator
 * Checks voting / driving / passport eligibility from age and citizenship.
 *
 * Note: "Eligible to vote only" (18-20) overlaps with "all services" (>= 18),
 * so the 18-20 band is checked first and "all services" applies from 21.
 */

function checkEligibility(age, isCitizen) {
    if (isCitizen) {
        if (age >= 18 && age <= 20) {
            console.log(`Age ${age}, Citizen: ${isCitizen} -> Eligible to vote only.`);
        } else if (age > 20) {
            console.log(`Age ${age}, Citizen: ${isCitizen} -> Eligible for all services.`);
        } else {
            console.log(`Age ${age}, Citizen: ${isCitizen} -> Not eligible yet.`);
        }
    } else {
        if (age >= 18) {
            console.log(`Age ${age}, Citizen: ${isCitizen} -> Only age criteria met.`);
        } else {
            console.log(`Age ${age}, Citizen: ${isCitizen} -> Not eligible yet.`);
        }
    }
}

// Test cases covering all outcomes
checkEligibility(25, true);
checkEligibility(19, true);
checkEligibility(30, false);
checkEligibility(16, true);
checkEligibility(15, false);
