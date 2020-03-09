"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Sean Greer
   Date:   2018-03-01
   
   Filename: hg_report.js
	
*/

/* Write the summary of the game */
//I DID NOT CHANGE ANY NUMBERS (i.e. 0,1,2,3,4, ...)
//PLEASE CHECK THE FOLLOWING 
var gameReport= "<h1>" + itemTitle + "</h1 \
             <h2>By:" + itemManufacturer + "</h2 \
             <img src='hg_" + itemID + ".png' alt='id' id='gameImg' /> \
             <table> \
             <tr><th>Product Id</th><td>"+itemID+"</td></tr> \
             <tr><th>List Price</th><td>"+itemPrice+"</td></tr> \
             <tr><th>Platform</th><td>"+itemPlatform +"</td></tr> \
             <tr><th>ESRB Rating</th><td>"+itemESRB+"</td></tr> \
             <tr><th>Condition</th><td>"+itemCondition+"</td></tr> \
             <tr><th>Release</th><td>"+itemRelease+"</td></tr> \
             </table> \
             "+itemSummary;
//PLEASE CHECK THE ABOVE 


/* Insert the summary into the first and only article element */

/* Calculate the average customer rating of the game */
var ratingsSum = 0;
var ratingsCount = ratings.length;
/* Loop through all of the customer ratings */
for (var i = 0; i<ratings.length; i++) {
   ratings[i] += ratingsSum;
}
var ratingsAvg = ratingsSum/ratingsCount;

/* The ratingReport variable will show the first three customer reviews */
var ratingsAvg = ratingsSum/ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1> \
               <h2>"+ratingsAvg+"out of 5 stars ("+ratingsCount+" reviews)</h2>";


/* Loop through the first three customer reviews */
for (var i = 0; i < 3; i++) {
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
   ratingReport = "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Didn't Copy</th><td>" + ratingDates[i] + "</td></tr>";   
   ratingReport += "<tr><th>Rating</th><td>";
   
   /* Display one star image for each rating value given by the customer */
   for (var j = 1; j <= ratings[i]; j++) {
         ratingReport += "<img src='hg_star.png'  />";
   }
   
   ratingReport += "</td></tr>";
   ratingReport += "</table>";
   ratingReport += ratingSummaries[i];
   ratingReport += "</div>";
}

/* Write the ratingReport variable to the first and only aside element */
document.getElementsByTagName("aside").innerHTML = ratingReport;
 document.getElementsByTagName("article").innerHTML = gameReport;

