/****************************************************
 Author name: w3schools.com
 Date: 09/16/2018 (originally accessed
 Title of program/source code: How TO - Include HTML
 Type: HTML, JavaScript
 Availability: https://www.w3schools.com/howto/howto_html_include.asp
****************************************************/

function includeHTML()
{
    var z, i, elmnt, file, xhttp;

    // loop through a collection of all HTML elements
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++)
    {
        elmnt = z[i];
        // search for elements with a certain atrribute
        file = elmnt.getAttribute("inclusions");
        if (file)
        {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("inclusions");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            // exit the function
            return;
        }
    }
};