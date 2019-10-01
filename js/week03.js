function forLoops()
{
    // gets user input
    var loopCount = document.getElementById("loopCount").value;

    if (loopCount == 0)
    {
        document.getElementById("notice").innerHTML = "The For and While loops will not run now. However, the Do loop will run once.";
    }
    else
    {
        document.getElementById("notice").innerHTML = "All loops wil run " + loopCount + " times.";
    }

    // starting the for loop
    for (i = 0; i < loopCount; i++)
    {
        // Label the section the first time through the loop
        if (i == 0)
        {
            document.getElementById("forLoopResults").innerHTML = "The For Loop!";
        }

        var loopC = i + 1; // used for displaying the number of times the loop has completed
        // displays the loop results
        document.getElementById("displayForLoopResults").append("The for loop has executed " + loopC + " times.");
        var lineBr = document.createElement("br");
        document.getElementById("displayForLoopResults").append(lineBr);
    }

    // counter for the while loop condition
    var newCounter = 0;
    // starting the while loop
    while (newCounter < loopCount)
    {
        // Label the section the first time through the loop
        if (newCounter == 0)
        {
            document.getElementById("whileLoopResults").innerHTML = "The While Loop!";
        }

        // iterates the counter, normally I would put this as the last statement in the loop but I want to use is for the display
        newCounter++;
        // displays the loop results
        document.getElementById("displayWhileLoopResults").append("The while loop has executed " + newCounter + " times.")
        var lineBr = document.createElement("br");
        document.getElementById("displayWhileLoopResults").append(lineBr);
    }
}