/***************************************************************
This code pertains to the CT Unit Page.
Author: Arek M Engstrom
Date: 2021-08-09
Notes: This page is saved as a template page with the name "CT" 
****************************************************************/

/***************************************************************
Code for showing and hiding different parts of the page based on
what type of measurements are needing to be recorded.
****************************************************************/

// Conventional CT Scatter Show/Hide
// Getting the new names of the fields
var ctOp = "P" + this.pageNum + ".CT" + ".ctOp";
var ctWindow = "P" + this.pageNum + ".CT" + ".ctWindow";
var ctTable = "P" + this.pageNum + ".CT" + ".ctTable";
var ctDoorClosed = "P" + this.pageNum + ".CT" + ".ctDoorClosed";
var ctDoorOpen = "P" + this.pageNum + ".CT" + ".ctDoorOpen";
var ctExtra1 = "P" + this.pageNum + ".CT" + ".ctExtra1";
var ctExtra11 = "P" + this.pageNum + ".CT" + ".ctExtra11";
var ctExtra2 = "P" + this.pageNum + ".CT" + ".ctExtra2";
var ctExtra22 = "P" + this.pageNum + ".CT" + ".ctExtra22";

// If the CT scatter box box is checked
if (event.target.value != "Yes") {
	this.getField(ctOp).display = display.visible;
	this.getField(ctWindow).display = display.visible;
	this.getField(ctTable).display = display.visible;
	this.getField(ctDoorClosed).display = display.visible;
	this.getField(ctDoorOpen).display = display.visible;
	this.getField(ctExtra1).display = display.visible;
	this.getField(ctExtra11).display = display.visible;
	this.getField(ctExtra2).display = display.visible;
	this.getField(ctExtra22).display = display.visible;
} else {
	// If the CT scatter box is unchecked
	this.getField(ctOp).display = display.hidden;
	this.getField(ctWindow).display = display.hidden;
	this.getField(ctTable).display = display.hidden;
	this.getField(ctDoorClosed).display = display.hidden;
	this.getField(ctDoorOpen).display = display.hidden;
	this.getField(ctExtra1).display = display.hidden;
	this.getField(ctExtra11).display = display.hidden;
	this.getField(ctExtra2).display = display.hidden;
	this.getField(ctExtra22).display = display.hidden;
}

// CBCT Scatter Show/Hide

// Getting the new names of the fields
var cbctOp = "P" + this.pageNum + ".CT" + ".cbctOp";
var cbctAocFot = "P" + this.pageNum + ".CT" + ".cbctAocFot";
var cbctAocBot = "P" + this.pageNum + ".CT" + ".cbctAocBot";
var ctExtra1 = "P" + this.pageNum + ".CT" + ".ctExtra1";
var ctExtra11 = "P" + this.pageNum + ".CT" + ".ctExtra11";
var ctExtra2 = "P" + this.pageNum + ".CT" + ".ctExtra2";
var ctExtra22 = "P" + this.pageNum + ".CT" + ".ctExtra22";

// If the CBCT scatter box box is checked
if (event.target.value != "Yes") {
	this.getField(cbctOp).display = display.visible;
	this.getField(cbctAocFot).display = display.visible;
	this.getField(cbctAocBot).display = display.visible;
	this.getField(ctExtra1).display = display.visible;
	this.getField(ctExtra11).display = display.visible;
	this.getField(ctExtra2).display = display.visible;
	this.getField(ctExtra22).display = display.visible;
} else {
	// If the CBCT scatter box is unchecked
	this.getField(cbctOp).display = display.hidden;
	this.getField(cbctAocFot).display = display.hidden;
	this.getField(cbctAocBot).display = display.hidden;
	this.getField(ctExtra1).display = display.hidden;
	this.getField(ctExtra11).display = display.hidden;
	this.getField(ctExtra2).display = display.hidden;
	this.getField(ctExtra22).display = display.hidden;
}

/***************************************************************
Code for checking for scatter radiation over 100 mR/h. If the
scatter reading is greater than 100 mR/h the font will turn red.
****************************************************************/

// Checking for Scatter over 100 mR/hr
if (event.value <= 100) {
	event.target.textColor = color.black;
} else {
	event.target.textColor = color.red;
}
