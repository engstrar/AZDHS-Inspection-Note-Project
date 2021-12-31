/***************************************************************
This code pertains to the therapy unit page.
Author: Arek M Engstrom
Date: 2021-10-28
Notes: This page is saved as a template page with the name "Therapy" 
****************************************************************/

/***************************************************************
Code for showing and hiding different parts of the page based on
what type of measurements are needing to be recorded.
****************************************************************/

// Systems over 150 kVp Show/Hide

// Getting the new names of the fields
var th12 = "P" + this.pageNum + ".Therapy" + ".th12";
var th13 = "P" + this.pageNum + ".Therapy" + ".th13";
var th14 = "P" + this.pageNum + ".Therapy" + ".th14";

// If the "ScatterOver 150 kVp" Box is checked
if (event.target.value != "Yes") {
	this.getField(th12).display = display.visible;
	this.getField(th13).display = display.visible;
	this.getField(th14).display = display.visible;
} else {
	// If the "ScatterOver 150 kVp" Box is unchecked
	this.getField(th12).display = display.hidden;
	this.getField(th13).display = display.hidden;
	this.getField(th14).display = display.hidden;
}

// Scatter Show/Hide

// Getting the new names of the fields
var tha1 = "P" + this.pageNum + ".Therapy" + ".tha1";
var tha2 = "P" + this.pageNum + ".Therapy" + ".tha2";
var tha3 = "P" + this.pageNum + ".Therapy" + ".tha3";
var thb1 = "P" + this.pageNum + ".Therapy" + ".thb1";
var thb2 = "P" + this.pageNum + ".Therapy" + ".thb2";
var thb3 = "P" + this.pageNum + ".Therapy" + ".thb3";
var thc1 = "P" + this.pageNum + ".Therapy" + ".thc1";
var thc2 = "P" + this.pageNum + ".Therapy" + ".thc2";
var thc3 = "P" + this.pageNum + ".Therapy" + ".thc3";
var thd1 = "P" + this.pageNum + ".Therapy" + ".thd1";
var thd2 = "P" + this.pageNum + ".Therapy" + ".thd2";
var thd3 = "P" + this.pageNum + ".Therapy" + ".thd3";

// If the "Scatter" Box is checked
if (event.target.value != "Yes") {
	this.getField(tha1).display = display.visible;
	this.getField(tha2).display = display.visible;
	this.getField(tha3).display = display.visible;
	this.getField(thb1).display = display.visible;
	this.getField(thb2).display = display.visible;
	this.getField(thb3).display = display.visible;
	this.getField(thc1).display = display.visible;
	this.getField(thc2).display = display.visible;
	this.getField(thc3).display = display.visible;
	this.getField(thd1).display = display.visible;
	this.getField(thd2).display = display.visible;
	this.getField(thd3).display = display.visible;
} else {
	// If the "Scatter" Box is checked
	this.getField(tha1).display = display.hidden;
	this.getField(tha2).display = display.hidden;
	this.getField(tha3).display = display.hidden;
	this.getField(thb1).display = display.hidden;
	this.getField(thb2).display = display.hidden;
	this.getField(thb3).display = display.hidden;
	this.getField(thc1).display = display.hidden;
	this.getField(thc2).display = display.hidden;
	this.getField(thc3).display = display.hidden;
	this.getField(thd1).display = display.hidden;
	this.getField(thd2).display = display.hidden;
	this.getField(thd3).display = display.hidden;
}
