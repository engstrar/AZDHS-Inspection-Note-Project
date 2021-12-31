/***************************************************************
This code pertains to the general purpose medical unit page.
Author: Arek M Engstrom
Date: 2021-11-02
Notes: This page is saved as a template page with the name "GP" 
****************************************************************/

/***************************************************************
Code for showing and hiding different parts of the page based on
what type of measurements are needing to be recorded.
****************************************************************/

// Multiple tubes Show/Hide

// Getting the new names of the fields
var gpUnitNum = "P" + this.pageNum + ".GP" + ".gpUnitNum";

// If the "Multiple Units" Box is checked
if (event.target.value != "Yes") {
	this.getField(gpUnitNum).display = display.hidden;
} else {
	// If the "Multiple Units" Box is unchecked
	this.getField(gpUnitNum).display = display.visible;
}

// Code for viewing and hiding output sections

// Getting the new names of the fields
var gpkvp1 = "P" + this.pageNum + ".GP" + ".gpkvp1";
var gpkvp2 = "P" + this.pageNum + ".GP" + ".gpkvp2";
var gpkvp3 = "P" + this.pageNum + ".GP" + ".gpkvp3";
var gpma1 = "P" + this.pageNum + ".GP" + ".gpma1";
var gpma2 = "P" + this.pageNum + ".GP" + ".gpma2";
var gpma3 = "P" + this.pageNum + ".GP" + ".gpma3";
var gpmas1 = "P" + this.pageNum + ".GP" + ".gpmas1";
var gpmas2 = "P" + this.pageNum + ".GP" + ".gpmas2";
var gpmas3 = "P" + this.pageNum + ".GP" + ".gpmas3";
var gpkvp11 = "P" + this.pageNum + ".GP" + ".gpkvp11";
var gpkvp22 = "P" + this.pageNum + ".GP" + ".gpkvp22";
var gpkvp33 = "P" + this.pageNum + ".GP" + ".gpkvp33";
var gphvl1 = "P" + this.pageNum + ".GP" + ".gphvl1";
var gphvl2 = "P" + this.pageNum + ".GP" + ".gphvl2";
var gphvl3 = "P" + this.pageNum + ".GP" + ".gphvl3";
var gpese1 = "P" + this.pageNum + ".GP" + ".gpese1";
var gpese2 = "P" + this.pageNum + ".GP" + ".gpese2";
var gpese3 = "P" + this.pageNum + ".GP" + ".gpese3";

// If the "Output" Box is checked
if (event.target.value != "Yes") {
	this.getField(gpkvp1).display = display.visible;
	this.getField(gpkvp2).display = display.visible;
	this.getField(gpkvp3).display = display.visible;
	this.getField(gpma1).display = display.visible;
	this.getField(gpma2).display = display.visible;
	this.getField(gpma3).display = display.visible;
	this.getField(gpmas1).display = display.visible;
	this.getField(gpmas2).display = display.visible;
	this.getField(gpmas3).display = display.visible;
	this.getField(gpkvp11).display = display.visible;
	this.getField(gpkvp22).display = display.visible;
	this.getField(gpkvp33).display = display.visible;
	this.getField(gphvl1).display = display.visible;
	this.getField(gphvl2).display = display.visible;
	this.getField(gphvl3).display = display.visible;
	this.getField(gpese1).display = display.visible;
	this.getField(gpese2).display = display.visible;
	this.getField(gpese3).display = display.visible;
} else {
	// If the "Output" Box is unchecked
	this.getField(gpkvp1).display = display.hidden;
	this.getField(gpkvp2).display = display.hidden;
	this.getField(gpkvp3).display = display.hidden;
	this.getField(gpma1).display = display.hidden;
	this.getField(gpma2).display = display.hidden;
	this.getField(gpma3).display = display.hidden;
	this.getField(gpmas1).display = display.hidden;
	this.getField(gpmas2).display = display.hidden;
	this.getField(gpmas3).display = display.hidden;
	this.getField(gpkvp11).display = display.hidden;
	this.getField(gpkvp22).display = display.hidden;
	this.getField(gpkvp33).display = display.hidden;
	this.getField(gphvl1).display = display.hidden;
	this.getField(gphvl2).display = display.hidden;
	this.getField(gphvl3).display = display.hidden;
	this.getField(gpese1).display = display.hidden;
	this.getField(gpese2).display = display.hidden;
	this.getField(gpese3).display = display.hidden;
}

// Code to hide time and pules sections

// Getting the new names of the fields
var gpsec1 = "P" + this.pageNum + ".GP" + ".gpsec1";
var gpsec2 = "P" + this.pageNum + ".GP" + ".gpsec2";
var gpsec3 = "P" + this.pageNum + ".GP" + ".gpsec3";
var gpsec11 = "P" + this.pageNum + ".GP" + ".gpsec11";
var gpsec22 = "P" + this.pageNum + ".GP" + ".gpsec22";
var gpsec33 = "P" + this.pageNum + ".GP" + ".gpsec33";

if (event.target.value != "Yes") {
	// If the Time(s) box is checked
	this.getField(gpsec1).display = display.visible;
	this.getField(gpsec1).readonly = false;
	this.getField(gpsec1).textColor = color.black;
	this.getField(gpsec1).value = "";

	this.getField(gpsec2).display = display.visible;
	this.getField(gpsec2).readonly = false;
	this.getField(gpsec2).textColor = color.black;
	this.getField(gpsec2).value = "";

	this.getField(gpsec3).display = display.visible;
	this.getField(gpsec3).readonly = false;
	this.getField(gpsec3).textColor = color.black;
	this.getField(gpsec2).value = "";

	this.getField(gpsec11).display = display.visible;
	this.getField(gpsec22).display = display.visible;
	this.getField(gpsec33).display = display.visible;
} else {
	// If the Time(s) box is unchecked
	this.getField(gpsec1).display = display.hidden;
	this.getField(gpsec2).display = display.hidden;
	this.getField(gpsec3).display = display.hidden;
	this.getField(gpsec11).display = display.hidden;
	this.getField(gpsec22).display = display.hidden;
	this.getField(gpsec33).display = display.hidden;
}

// Getting the new names of the fields
var gppulse1 = "P" + this.pageNum + ".GP" + ".gppulse1";
var gppulse2 = "P" + this.pageNum + ".GP" + ".gppulse2";
var gppulse3 = "P" + this.pageNum + ".GP" + ".gppulse3";
var gppulse11 = "P" + this.pageNum + ".GP" + ".gppulse11";
var gppulse22 = "P" + this.pageNum + ".GP" + ".gppulse22";
var gppulse33 = "P" + this.pageNum + ".GP" + ".gppulse33";

if (event.target.value != "Yes") {
	// If the Time(pul) box is checked
	this.getField(gppulse1).display = display.visible;
	this.getField(gppulse2).display = display.visible;
	this.getField(gppulse3).display = display.visible;
	this.getField(gppulse11).display = display.visible;
	this.getField(gppulse22).display = display.visible;
	this.getField(gppulse33).display = display.visible;
} else {
	// If the Time(pul) box is unchecked
	this.getField(gppulse1).display = display.hidden;
	this.getField(gppulse2).display = display.hidden;
	this.getField(gppulse3).display = display.hidden;
	this.getField(gppulse11).display = display.hidden;
	this.getField(gppulse22).display = display.hidden;
	this.getField(gppulse33).display = display.hidden;
}

// Code to show and hide Scatter section

// Getting the new names of the fields
var gpsOp = "P" + this.pageNum + ".GP" + ".gpsOp";
var gpsAoc = "P" + this.pageNum + ".GP" + ".gpsAoc";
var gpsBot = "P" + this.pageNum + ".GP" + ".gpsBot";
var gpsFoot = "P" + this.pageNum + ".GP" + ".gpsFoot";
var gpsTop = "P" + this.pageNum + ".GP" + ".gpsTop";
var gpsLeft = "P" + this.pageNum + ".GP" + ".gpsLeft";
var gpsRight = "P" + this.pageNum + ".GP" + ".gpsRight";
var gpsExtra1 = "P" + this.pageNum + ".GP" + ".gpsExtra1";
var gpsExtra11 = "P" + this.pageNum + ".GP" + ".gpsExtra11";
var gpsExtra2 = "P" + this.pageNum + ".GP" + ".gpsExtra2";
var gpsExtra22 = "P" + this.pageNum + ".GP" + ".gpsExtra22";
var gpsExtra3 = "P" + this.pageNum + ".GP" + ".gpsExtra3";
var gpsExtra33 = "P" + this.pageNum + ".GP" + ".gpsExtra33";
var gpsExtra4 = "P" + this.pageNum + ".GP" + ".gpsExtra4";
var gpsExtra44 = "P" + this.pageNum + ".GP" + ".gpsExtra44";
var gpsExtra5 = "P" + this.pageNum + ".GP" + ".gpsExtra5";
var gpsExtra55 = "P" + this.pageNum + ".GP" + ".gpsExtra55";

// If the scatter box box is checked
if (event.target.value != "Yes") {
	this.getField(gpsOp).display = display.visible;
	this.getField(gpsAoc).display = display.visible;
	this.getField(gpsBot).display = display.visible;
	this.getField(gpsFoot).display = display.visible;
	this.getField(gpsTop).display = display.visible;
	this.getField(gpsLeft).display = display.visible;
	this.getField(gpsRight).display = display.visible;
	this.getField(gpsExtra1).display = display.visible;
	this.getField(gpsExtra11).display = display.visible;
	this.getField(gpsExtra2).display = display.visible;
	this.getField(gpsExtra22).display = display.visible;
	this.getField(gpsExtra3).display = display.visible;
	this.getField(gpsExtra33).display = display.visible;
	this.getField(gpsExtra4).display = display.visible;
	this.getField(gpsExtra44).display = display.visible;
	this.getField(gpsExtra5).display = display.visible;
	this.getField(gpsExtra55).display = display.visible;
} else {
	// If the scatter box is unchacked
	this.getField(gpsOp).display = display.hidden;
	this.getField(gpsAoc).display = display.hidden;
	this.getField(gpsBot).display = display.hidden;
	this.getField(gpsFoot).display = display.hidden;
	this.getField(gpsTop).display = display.hidden;
	this.getField(gpsLeft).display = display.hidden;
	this.getField(gpsRight).display = display.hidden;
	this.getField(gpsExtra1).display = display.hidden;
	this.getField(gpsExtra11).display = display.hidden;
	this.getField(gpsExtra2).display = display.hidden;
	this.getField(gpsExtra22).display = display.hidden;
	this.getField(gpsExtra3).display = display.hidden;
	this.getField(gpsExtra33).display = display.hidden;
	this.getField(gpsExtra4).display = display.hidden;
	this.getField(gpsExtra44).display = display.hidden;
	this.getField(gpsExtra5).display = display.hidden;
	this.getField(gpsExtra55).display = display.hidden;
}

// Code to show and hide the collimation section

// Getting the new names of the fields
var gpColType = "P" + this.pageNum + ".GP" + ".gpColType";
var SID = "P" + this.pageNum + ".GP" + ".SID";
var gpColTop = "P" + this.pageNum + ".GP" + ".gpColTop";
var gpColBot = "P" + this.pageNum + ".GP" + ".gpColBot";
var gpColL = "P" + this.pageNum + ".GP" + ".gpColL";
var gpColR = "P" + this.pageNum + ".GP" + ".gpColR";

// If the collimation box box is checked
if (event.target.value != "Yes") {
	this.getField(gpColType).display = display.visible;
	this.getField(SID).display = display.visible;
	this.getField(gpColTop).display = display.visible;
	this.getField(gpColBot).display = display.visible;
	this.getField(gpColL).display = display.visible;
	this.getField(gpColR).display = display.visible;
} else {
	// If the collimation box is unchecked
	this.getField(gpColType).display = display.hidden;
	this.getField(SID).display = display.hidden;
	this.getField(gpColTop).display = display.hidden;
	this.getField(gpColBot).display = display.hidden;
	this.getField(gpColL).display = display.hidden;
	this.getField(gpColR).display = display.hidden;
}

// Show/Hide Comments Section

// Getting the new names of the fields
var gpComments = "P" + this.pageNum + ".GP" + ".gpComments";

// If the scatter box box is checked
if (event.target.value != "Yes") {
	this.getField(gpComments).display = display.visible;
} else {
	// If the scatter box is unchecked
	this.getField(gpComments).display = display.hidden;
}

/***************************************************************
Code for determining if a measurement passes or fails based on
A.R.S. and A.A.C. Rules and Regulations. Result of test is 
displayed in the box where the calculation is preformed.
****************************************************************/

// Determining if output kVp within 10% variance

// Getting the new names of the fields
var gpkvp1 = "P" + this.pageNum + ".GP" + ".gpkvp1";
var gpkvp11 = "P" + this.pageNum + ".GP" + ".gpkvp11";
var gpkvppass1 = "P" + this.pageNum + ".GP" + ".gpkvppass1";

// Selecting set kVp (kvp1) form box and finding the min/max kVp values
var kvp1 = this.getField(gpkvp1);
var kvp1_max = kvp1.value * 1.1;
var kvp1_min = kvp1.value * 0.9;

// Selecting the measured kVp (kvp11) value and location to print the
// result (gpkvppass1) form box
var kvp2 = this.getField(gpkvp11).value;
var pass_fail = this.getField(gpkvppass1);

// If the measured kVp (kvp11) box has not been filled out yet the
// pass/fail box will appear blank
if (kvp2 == "") {
	pass_fail.value = "";
} else if (kvp1_min <= kvp2 && kvp2 <= kvp1_max) {
	// If the output kVp is within 10% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = "PASS";
} else {
	// If none of the above then FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = "FAIL - 605(G)";
}

// Determining if Exposure Timer is within 20% variance

// The PASS/FAIL of the timer will be based only off of the time displayed in
// the seconds box. If the unit is set to pulses, the functions in place will
// calculate the exposure time in seconds for you.

// Getting the new names of the fields
var gpsec1 = "P" + this.pageNum + ".GP" + ".gpsec1";
var gpsec11 = "P" + this.pageNum + ".GP" + ".gpsec11";
var gptime1 = "P" + this.pageNum + ".GP" + ".gptime1";

// Selecting set time (gpsec1) form box and finding the min/max time values
var time1 = this.getField(gpsec1);
var time1_max = time1.value * 1.2;
var time1_min = time1.value * 0.8;

// Selecting the measured time (gpsec11) value and the location to print
// the result (gptime1) form box
var time2 = this.getField(gpsec11).value;
var pass_fail = this.getField(gptime1);

// If the measured time (sec11) box has not been filled out yet the pass/fail
// box will appear blank
if (time2 == "") {
	pass_fail.value = "";
} else if (time1_min <= time2 && time2 <= time1_max) {
	// If the output time is within 20% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = "PASS";
} else {
	// If none of the above then FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = "FAIL - 650(G)";
}

// Determining if the beam quality (HVL) is within our regulations.
// HVL PASS/FAIL are based on R9-7-605 Table 1

// Getting the new names of the fields
var gpMfgDate = "P" + this.pageNum + ".GP" + ".gpMfgDate";
var gphvl1 = "P" + this.pageNum + ".GP" + ".gphvl1";
var gptime1 = "P" + this.pageNum + ".GP" + ".gptime1";
var gphvlpass1 = "P" + this.pageNum + ".GP" + ".gphvlpass1";
var gpkvp1 = "P" + this.pageNum + ".GP" + ".gpkvp1";

// Selecting manufacturing date (gpMfgDate), measured HVL (gphvl1),
// set kVp (gpkvp1), and the location to print the result (gphvlpass1)
// form boxes
var mfgDate = this.getField(gpMfgDate);
var hvl = this.getField(gphvl1);
var pass_fail = this.getField(gphvlpass1);
var kvp = this.getField(gpkvp1);

// If the hvl1 box has not been filled out yet the pass/fail box will appear blank
if (hvl.value == "") {
	pass_fail.value = "";
} else if (mfgDate.value == "ERROR") {
	// If the inspector did not select a MFG date
	pass_fail.textColor = color.red;
	pass_fail.value = "ERROR - Select MFG Date";
} else if (mfgDate.value > 2006) {
	// If the unit was manufactured after June 10, 2006

	// For outputs ranging from [30-40) kVp
	if (kvp.value >= 30 && kvp.value < 40) {
		// If the HVL is greater than or equal to 0.3 PASS
		if (hvl.value >= 0.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 0.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 40 && kvp.value < 50) {
		// For outputs ranging from [40-50) kVp
		// If the HVL is greater than or equal to 0.4 PASS
		if (hvl.value >= 0.4) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 0.4 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value == 50) {
		// For outputs at 50 kVp
		// If the HVL is greater than or equal to 0.5 PASS
		if (hvl.value >= 0.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 0.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 51 && kvp.value < 60) {
		// For outputs ranging from [51-60) kVp
		// If the HVL is greater than or equal to 1.2 PASS
		if (hvl.value >= 1.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 1.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 60 && kvp.value < 70) {
		// For outputs ranging from [60-70) kVp
		// If the HVL is greater than or equal to 1.3 PASS
		if (hvl.value >= 1.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 1.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value == 70) {
		// For outputs at 70 kVp
		// If the HVL is greater than or equal to 1.5 PASS
		if (hvl.value >= 1.8) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 1.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 71 && kvp.value < 80) {
		// For outputs ranging from [71-80) kVp
		// If the HVL is greater than or equal to 2.1 PASS
		if (hvl.value >= 2.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 80 && kvp.value < 90) {
		// For outputs ranging from [80-90) kVp
		// If the HVL is greater than or equal to 2.3 PASS
		if (hvl.value >= 2.9) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 90 && kvp.value < 100) {
		// For outputs ranging from [90-100) kVp
		// If the HVL is greater than or equal to 2.5 PASS
		if (hvl.value >= 3.2) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 100 && kvp.value < 110) {
		// For outputs ranging from [100-110) kVp
		// If the HVL is greater than or equal to 2.7 PASS
		if (hvl.value >= 3.6) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.7 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 110 && kvp.value < 120) {
		// For outputs ranging from [110-120) kVp
		// If the HVL is greater than or equal to 3.0 PASS
		if (hvl.value >= 3.9) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.0 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 120 && kvp.value < 130) {
		// For outputs ranging from [120-130) kVp
		// If the HVL is greater than or equal to 3.2 PASS
		if (hvl.value >= 4.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 130 && kvp.value < 140) {
		// For outputs ranging from [130-140) kVp
		// If the HVL is greater than or equal to 3.5 PASS
		if (hvl.value >= 4.7) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 140 && kvp.value < 150) {
		// For outputs ranging from [140-150) kVp
		// If the HVL is greater than or equal to 3.8 PASS
		if (hvl.value >= 5.0) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.8 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 150) {
		// For outputs greater than or equal to 150 kVp
		// If the HVL is greater than or equal to 4.1 PASS
		if (hvl.value >= 5.4) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 4.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else {
		// If you get here you didn't enter a valid kVp, HVL, or mfgDate value
		pass_fail.textColor = color.orange;
		pass_fail.value = "ERROR";
	}
} else {
	// If the unit was manufactured before June 10, 2006

	// For outputs ranging from [30-40) kVp
	if (kvp.value >= 30 && kvp.value < 40) {
		// If the HVL is greater than or equal to 0.3 PASS
		if (hvl.value >= 0.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 0.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 40 && kvp.value < 50) {
		// For outputs ranging from [40-50) kVp
		// If the HVL is greater than or equal to 0.4 PASS
		if (hvl.value >= 0.4) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 0.4 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value == 50) {
		// For outputs at 50 kVp
		// If the HVL is greater than or equal to 0.5 PASS
		if (hvl.value >= 0.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 0.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 51 && kvp.value < 60) {
		// For outputs ranging from [51-60) kVp
		// If the HVL is greater than or equal to 1.2 PASS
		if (hvl.value >= 1.2) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 1.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 60 && kvp.value < 70) {
		// For outputs ranging from [60-70) kVp
		// If the HVL is greater than or equal to 1.3 PASS
		if (hvl.value >= 1.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 1.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value == 70) {
		// For outputs at 70 kVp
		// If the HVL is greater than or equal to 1.5 PASS
		if (hvl.value >= 1.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 1.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 71 && kvp.value < 80) {
		// For outputs ranging from [71-80) kVp
		// If the HVL is greater than or equal to 2.1 PASS
		if (hvl.value >= 2.1) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 80 && kvp.value < 90) {
		// For outputs ranging from [80-90) kVp
		// If the HVL is greater than or equal to 2.3 PASS
		if (hvl.value >= 2.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 90 && kvp.value < 100) {
		// For outputs ranging from [90-100) kVp
		// If the HVL is greater than or equal to 2.5 PASS
		if (hvl.value >= 2.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 100 && kvp.value < 110) {
		// For outputs ranging from [100-110) kVp
		// If the HVL is greater than or equal to 2.7 PASS
		if (hvl.value >= 2.7) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 2.7 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 110 && kvp.value < 120) {
		// For outputs ranging from [110-120) kVp
		// If the HVL is greater than or equal to 3.0 PASS
		if (hvl.value >= 3.0) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.0 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 120 && kvp.value < 130) {
		// For outputs ranging from [120-130) kVp
		// If the HVL is greater than or equal to 3.2 PASS
		if (hvl.value >= 3.2) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 130 && kvp.value < 140) {
		// For outputs ranging from [130-140) kVp
		// If the HVL is greater than or equal to 3.5 PASS
		if (hvl.value >= 3.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 140 && kvp.value < 150) {
		// For outputs ranging from [140-150) kVp
		// If the HVL is greater than or equal to 3.8 PASS
		if (hvl.value >= 3.8) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 3.8 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	} else if (kvp.value >= 150) {
		// For outputs greater than or equal to 150 kVp
		// If the HVL is greater than or equal to 4.1 PASS
		if (hvl.value >= 4.1) {
			pass_fail.textColor = color.green;
			pass_fail.value = "PASS";
		} else {
			// If the HVL is less than 4.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = "FAIL - 605(C)(1)";
		}
	}
}

// Determining if Collimation is within 2%. Duplicate formulas
// were written to test for the left and right collimation.

// Getting the new names of the fields
var gpCol1 = "P" + this.pageNum + ".GP" + ".gpColTop";
var gpCol2 = "P" + this.pageNum + ".GP" + ".gpColBot";
var gpPF = "P" + this.pageNum + ".GP" + ".topBotPF";
var SID = "P" + this.pageNum + ".GP" + ".SID";
var sidOther = "P" + this.pageNum + ".GP" + ".sidDist";

// Calculating 2% of the SID
var sidDistance = 100;
if (this.getField(SID).value == "SID100") {
	sidDistance = 100;
} else {
	sidDistance = this.getField(sidOther).value;
}

// Selecting the gpColTop, gpColBot, and pass/fail (PF) form boxes
var col1 = this.getField(gpCol1);
var col1_calc = col1.value;
var col2 = this.getField(gpCol2);
var col2_calc = col2.value;
var pass_fail = this.getField(gpPF);

// If either of the collimation boxes have not been filled out yet the pass/fail box will appear blank
if (col1.value === "" || col2.value === "") {
	pass_fail.value = "";
} else {
	// Changing all colimation values to positive to check for pass/fail
	if (col1.value < 0) {
		col1_calc = -1 * col1.value;
	}
	if (col2.value < 0) {
		var col2_calc = -1 * col2.value;
	}

	// Checking to see if the collimation is within 2% of the SID
	var err = col1_calc + col2_calc;
	if (err <= 0.02 * sidDistance) {
		pass_fail.textColor = color.green;
		pass_fail.value = "PASS";
	} else {
		// If the HVL is less than 4.1 FAIL
		pass_fail.textColor = color.red;
		pass_fail.value = "FAIL - 607(A)(1)(2)";
	}
}

/***************************************************************
Code for calculating the exposure time in seconds from either:
pulses or mA and mAs. Entering in the time in either seconds or
pulses is preferred; however, not every unit displays both or either.
In the case that only pulses is displayed time in seconds is
calculated from that time. If the unit does not display time at all,
only mA and mAs then exposure time in seconds will be calculated.
****************************************************************/

// Code for Calculating Time from Pulses or mAs

// Getting the new names of the fields
var gppulse1 = "P" + this.pageNum + ".GP" + ".gppulse1";
var gpsec1 = "P" + this.pageNum + ".GP" + ".gpsec1";
var gpsec11 = "P" + this.pageNum + ".GP" + ".gpsec11";
var gpmas1 = "P" + this.pageNum + ".GP" + ".gpmas1";
var gpma1 = "P" + this.pageNum + ".GP" + ".gpma1";
var gpTimeSec = "P" + this.pageNum + ".GP" + ".gpTimeSec";
var gpTimePul = "P" + this.pageNum + ".GP" + ".gpTimePul";

// Selecting the sec1, pul1, mas1, and ma form boxes
var pul = this.getField(gppulse1);
var sec = this.getField(gpsec1);
var sec2 = this.getField(gpsec11);
var mas = this.getField(gpmas1);
var ma = this.getField(gpma1);

if (this.getField(gpTimeSec).isBoxChecked(0)) {
	sec.textColor = color.black;
	sec.readonly = false;
	sec.display = display.visible;
} else if (this.getField(gpTimePul).isBoxChecked(0) && pul.value != "") {
	// If the pulses box is checked, calculate based on pulses
	// Update sec box so that it will show result
	sec.display = display.visible;
	sec.readonly = true;
	sec.textColor = color.blue;
	// Calculate the pulse equivalent and displaying it
	sec.value = pul.value / 60;
} else if (mas.value != "") {
	// If neither the pulses or seconds button is checked calculate with mAs
	// Update sec box so that it will show result
	sec.display = display.visible;
	sec.readonly = true;
	sec.textColor = color.blue;
	// Calculate the pulse equivalent and displaying it
	sec.value = mas.value / ma.value;
	// Also need to open the box to enter a measured time
	sec2.display = display.visible;
	sec2.readonly = false;
	sec2.textColor = color.black;
}

/***************************************************************
Code for calculating the mAs based off of the input time and mA.
****************************************************************/

// Getting the new names of the fields
var sec1 = "P" + this.pageNum + ".GP" + ".gpsec1";
var mas1 = "P" + this.pageNum + ".GP" + ".gpmas1";
var ma1 = "P" + this.pageNum + ".GP" + ".gpma1";

// Selecting the sec and pul form boxes
var time = this.getField(sec1);
var mas = this.getField(mas1);
var ma = this.getField(ma1);

// If bot the mA and time fields are complete (not blank), calculate mAs
if (ma.value != "" && time.value != "") {
	mas.value = ma.value * time.value;
}
