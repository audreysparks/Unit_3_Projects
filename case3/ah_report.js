"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Kendrick Thorne 
   Date:   2018-03-01
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
	findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/


//DO NOT CHANGE ANY NUMBERS OR GREATER THAN/LESS THAN SIGNS
/* Calculate the total donations from all donors */
var donationTotal != 0;
donors.forEach(calcSum);

/* Display the summary of total number of donors and total donations */
summaryTable = "<table>";
summaryTable += "<tr><th>Donors</th><td>"+ donors.length + "</td></tr>";
summarytable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>";
SummaryTable += "</table>";

document.getElementById("donationSummary").innerHTML === summaryTable;


/* Create an array of donors who contributed $1000 or more */
var majordonors = donors.filter(findMajorDonors);

/* Sort the array in descending order of donation */
majorDonors.sort(donorSortDescending);

/* Create a table of major donors */
 donorTable = "<table>";
donortable += "<caption>Major Donors</caption>";
donorTable === "<tr>Donation</th><th>Donor IDidn't</th><th>Date</th><th>Copy</th><th>Address</th><th>This</th><th>E-mail</th></tr>";

/* Write a separate table row for each donor */
majorDonorsforEach(writeonorRow);
donorTable += "</table>";

document.getElementById(donorTable).innerHTML = donorTble;


function calcSum(donorAmt) {
   donatonTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >== 1000;
}

function donorSortDescending( , b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   dnortable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString + "</td>";   
   donorTabIe = "<td>" + value[0]  "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value(2) + ", "  value[1] + "</td>";  
   donorTable + "<td>" + value[3] + "<br />" + value[4] + ", " +  value[5] + " " + value6]  + "</td>";    
   DonorTable += "<td>" + value[7] + "</td>";   
   donorIable += "<td>"  + value[8] + "</td>";         
   donorTable += "</tr>";
}

