function forLoops() {
    // gets user input
    var loopCount = document.getElementById("loopCount").value;

    if (loopCount == 0) {
        document.getElementById("notice").innerHTML = "The For and While loops will not run now. However, the Do loop will run once.";
    } else {
        document.getElementById("notice").innerHTML = "All loops will run " + loopCount + " times.";
    }

    // starting the for loop
    for (i = 0; i < loopCount; i++) {
        // Label the section the first time through the loop
        if (i === 0) {
            document.getElementById("forLoopResults").innerHTML = "The For Loop!";
        }

        var loopC = i + 1; // used for displaying the number of times the loop has completed
        // displays the loop results
        document.getElementById("displayForLoopResults").append("The for loop has executed " + loopC + " times.");
        var lineBr = document.createElement("br");
        document.getElementById("displayForLoopResults").append(lineBr);
    }

    // counter for the while loop condition
    var whileCounter = 0;
    // starting the while loop
    while (whileCounter < loopCount) {
        // Label the section the first time through the loop
        if (whileCounter === 0) {
            document.getElementById("whileLoopResults").innerHTML = "The While Loop!";
        }

        // iterates the counter, normally I would put this as the last statement in the loop but I want to use is for the display
        whileCounter++;
        // displays the loop results
        document.getElementById("displayWhileLoopResults").append("The while loop has executed " + whileCounter + " times.")
        var lineBr = document.createElement("br");
        document.getElementById("displayWhileLoopResults").append(lineBr);
    }

    // counter for the do loop condition
    var doCounter = 0;
    // starting the do loop
    do
    {
        // Label the section the first time through the loop
        if (doCounter === 0)
        {
            document.getElementById("doLoopResults").innerHTML = "The Do Loop!";
            document.getElementById("displayDoLoopResults").append("This will execute at least once no matter the result of the conditional expression.")
            var lineBr = document.createElement("br");
            document.getElementById("displayDoLoopResults").append(lineBr);
        }

        // iterates the counter, normally I would put this as the last statement in the loop but I want to use is for the display
        doCounter++;
        // displays the loop results
        document.getElementById("displayDoLoopResults").append("The do loop has executed " + doCounter + " times.")
        var lineBr = document.createElement("br");
        document.getElementById("displayDoLoopResults").append(lineBr);
    } while (doCounter < loopCount);
}