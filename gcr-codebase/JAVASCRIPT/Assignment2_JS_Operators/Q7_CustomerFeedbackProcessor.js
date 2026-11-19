/*
 * Q7. Customer Feedback Processor
 * Counts words and checks if the feedback is positive.
 */

function processFeedback(feedback) {
    // Count words by splitting on whitespace
    const wordCount = feedback.trim().split(/\s+/).length;

    // Check for negative words (case-insensitive)
    const lowerFeedback = feedback.toLowerCase();
    const hasNegativeWord = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

    console.log(`Feedback   : "${feedback}"`);
    console.log(`Word count : ${wordCount}`);
    if (!hasNegativeWord) {
        console.log("Result     : Positive Feedback");
    } else {
        console.log("Result     : Needs Improvement");
    }
    console.log("------------------------------");
}

processFeedback("Great product! Fast delivery and amazing sound quality!");
processFeedback("Sound is good but the battery life is poor.");
processFeedback("Bad packaging, item arrived late.");
