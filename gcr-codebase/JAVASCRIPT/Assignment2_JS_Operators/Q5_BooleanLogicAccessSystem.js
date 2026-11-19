/*
 * Q5. Boolean Logic Access System
 * The home is "Secure" only if the alarm is on, door locked,
 * window closed and the owner is inside.
 */

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Collect reasons using ! (NOT) to explain an unsafe state
    const problems = [];
    if (!isAlarmOn) problems.push("alarm off");
    if (!isDoorLocked) problems.push("door unlocked");
    if (!isWindowClosed) problems.push("window open");
    if (!isOwnerInside) problems.push("owner not inside");

    // || used to detect if any opening is not closed
    const hasOpening = !isDoorLocked || !isWindowClosed;

    console.log(
        `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
        `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`
    );
    console.log(` -> ${isSecure ? "Secure" : "Unsafe"}` +
        (problems.length ? ` (${problems.join(", ")})` : "") +
        (hasOpening ? " [door/window needs attention]" : ""));
}

// Testing multiple outcomes
checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(false, true, false, true);
checkSecurity(true, true, true, false);
