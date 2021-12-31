/***************************************************************
This code pertains to the E-Brachytherapy unit page.
Author: Arek M Engstrom
Date: 2021-10-28
Notes: This page is saved as a template page with the name "eBrachy" 
****************************************************************/

/***************************************************************
Code for showing and hiding different parts of the page based on
what type of measurements are needing to be recorded.
****************************************************************/

// Scatter Show/Hide

// Getting the new names of the fields
var eba1 = "P" + this.pageNum + ".eBrachy" + ".eba1";
var eba2 = "P" + this.pageNum + ".eBrachy" + ".eba2";
var ebb1 = "P" + this.pageNum + ".eBrachy" + ".ebb1";
var ebb2 = "P" + this.pageNum + ".eBrachy" + ".ebb2";
var ebc1 = "P" + this.pageNum + ".eBrachy" + ".ebc1";
var ebc2 = "P" + this.pageNum + ".eBrachy" + ".ebc2";
var ebd1 = "P" + this.pageNum + ".eBrachy" + ".ebd1";
var ebd2 = "P" + this.pageNum + ".eBrachy" + ".ebd2";

// If the "Scatter" Box is checked
if (event.target.value != "Yes") {
	this.getField(eba1).display = display.visible;
	this.getField(eba2).display = display.visible;
	this.getField(ebb1).display = display.visible;
	this.getField(ebb2).display = display.visible;
	this.getField(ebc1).display = display.visible;
	this.getField(ebc2).display = display.visible;
	this.getField(ebd1).display = display.visible;
	this.getField(ebd2).display = display.visible;
} else {
	// If the "Scatter" Box is checked
	this.getField(eba1).display = display.hidden;
	this.getField(eba2).display = display.hidden;
	this.getField(ebb1).display = display.hidden;
	this.getField(ebb2).display = display.hidden;
	this.getField(ebc1).display = display.hidden;
	this.getField(ebc2).display = display.hidden;
	this.getField(ebd1).display = display.hidden;
	this.getField(ebd2).display = display.hidden;
}
