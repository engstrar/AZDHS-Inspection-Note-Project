/***************************************************************
This code pertains to the Dental Unit page.
Author: Arek M Engstrom
Date: 2021-08-09
Note: This page is saved as a template page with the name "IO" 
****************************************************************/

/***************************************************************
Code for showing and hiding different parts of the page based on
what type of measurements are needing to be recorded.
****************************************************************/

// Output Measurements Show/Hide

// Getting the new names of the fields
var time1sec = "P" + this.pageNum + ".IO" + ".time1sec";
var time1pul = "P" + this.pageNum + ".IO" + ".time1pul";
var kvp1 = "P" + this.pageNum + ".IO" + ".kvp1";
var kvp2 = "P" + this.pageNum + ".IO" + ".kvp2";
var ma1 = "P" + this.pageNum + ".IO" + ".ma1";
var ma2 = "P" + this.pageNum + ".IO" + ".ma2";
var mas1 = "P" + this.pageNum + ".IO" + ".mas1";
var mas2 = "P" + this.pageNum + ".IO" + ".mas2";
var kvp11 = "P" + this.pageNum + ".IO" + ".kvp11";
var kvp22 = "P" + this.pageNum + ".IO" + ".kvp22";
var hvl1 = "P" + this.pageNum + ".IO" + ".hvl1";
var hvl2 = "P" + this.pageNum + ".IO" + ".hvl2";
var ese1 = "P" + this.pageNum + ".IO" + ".ese1";
var ese2 = "P" + this.pageNum + ".IO" + ".ese2";

// If the "Output" Box is checked
if (event.target.value != "Yes") {
	this.getField(time1sec).display = display.visible;
	this.getField(time1pul).display = display.visible;
	this.getField(kvp1).display = display.visible;
	this.getField(kvp2).display = display.visible;
	this.getField(ma1).display = display.visible;
	this.getField(ma2).display = display.visible;
	this.getField(mas1).display = display.visible;
	this.getField(mas2).display = display.visible;
	this.getField(kvp11).display = display.visible;
	this.getField(kvp22).display = display.visible;
	this.getField(hvl1).display = display.visible;
	this.getField(hvl2).display = display.visible;
	this.getField(ese1).display = display.visible;
	this.getField(ese2).display = display.visible;
} else {
	// If the "Output" Box is unchecked
	this.getField(time1sec).display = display.hidden;
	this.getField(time1pul).display = display.hidden;
	this.getField(kvp1).display = display.hidden;
	this.getField(kvp2).display = display.hidden;
	this.getField(ma1).display = display.hidden;
	this.getField(ma2).display = display.hidden;
	this.getField(mas1).display = display.hidden;
	this.getField(mas2).display = display.hidden;
	this.getField(kvp11).display = display.hidden;
	this.getField(kvp22).display = display.hidden;
	this.getField(hvl1).display = display.hidden;
	this.getField(hvl2).display = display.hidden;
	this.getField(ese1).display = display.hidden;
	this.getField(ese2).display = display.hidden;
}

// Time in Seconds and Time in Pulses Check Boxes

// Getting the new names of the fields
var sec1 = "P" + this.pageNum + ".IO" + ".sec1";
var sec2 = "P" + this.pageNum + ".IO" + ".sec2";
var sec11 = "P" + this.pageNum + ".IO" + ".sec11";
var sec22 = "P" + this.pageNum + ".IO" + ".sec22";

if (event.target.value != "Yes") {
	// box is checked
	this.getField(sec1).display = display.visible;
	this.getField(sec1).readonly = false;
	this.getField(sec1).textColor = color.black;
	this.getField(sec2).display = display.visible;
	this.getField(sec2).readonly = false;
	this.getField(sec2).textColor = color.black;
	this.getField(sec11).display = display.visible;
	this.getField(sec11).readonly = false;
	this.getField(sec11).textColor = color.black;
	this.getField(sec22).display = display.visible;
	this.getField(sec22).readonly = false;
	this.getField(sec22).textColor = color.black;
} else {
	// box is unchecked
	this.getField(sec1).display = display.hidden;
	this.getField(sec2).display = display.hidden;
	this.getField(sec11).display = display.hidden;
	this.getField(sec22).display = display.hidden;
}

// Getting the new names of the fields
var sec1 = "P" + this.pageNum + ".IO" + ".sec1";
var sec2 = "P" + this.pageNum + ".IO" + ".sec2";
var sec11 = "P" + this.pageNum + ".IO" + ".sec11";
var sec22 = "P" + this.pageNum + ".IO" + ".sec22";
var pulse1 = "P" + this.pageNum + ".IO" + ".pulse1";
var pulse2 = "P" + this.pageNum + ".IO" + ".pulse2";
var pulse11 = "P" + this.pageNum + ".IO" + ".pulse11";
var pulse22 = "P" + this.pageNum + ".IO" + ".pulse22";

// If the pulses box is checked
if (event.target.value != "Yes") {
	this.getField(sec1).display = display.visible;
	this.getField(sec1).readonly = true;
	this.getField(sec1).display = display.visible;
	this.getField(sec1).textColor = color.blue;
	this.getField(pulse1).display = display.visible;

	this.getField(sec2).display = display.visible;
	this.getField(sec2).readonly = true;
	this.getField(sec2).display = display.visible;
	this.getField(sec2).textColor = color.blue;
	this.getField(pulse2).display = display.visible;

	this.getField(sec11).display = display.visible;
	this.getField(sec11).readonly = true;
	this.getField(sec11).display = display.visible;
	this.getField(sec11).textColor = color.blue;
	this.getField(pulse11).display = display.visible;

	this.getField(sec22).display = display.visible;
	this.getField(sec22).readonly = true;
	this.getField(sec22).display = display.visible;
	this.getField(sec22).textColor = color.blue;
	this.getField(pulse22).display = display.visible;
} else {
	// box is unchecked
	this.getField(pulse1).display = display.hidden;
	this.getField(pulse2).display = display.hidden;
	this.getField(pulse11).display = display.hidden;
	this.getField(pulse22).display = display.hidden;
}

// Selection of Unit Type allows for viewing of additional
// unit requirements.

// Getting the new names of the fields
var r610A6 = "P" + this.pageNum + ".IO" + ".610(A)(6)";
var r610A8a = "P" + this.pageNum + ".IO" + ".610(A)(8)(a)";
var r610B2 = "P" + this.pageNum + ".IO" + ".610(B)(2)";
var r610B3 = "P" + this.pageNum + ".IO" + ".610(B)(3)";
var r610B4 = "P" + this.pageNum + ".IO" + ".610(B)(4)";
var r610C1 = "P" + this.pageNum + ".IO" + ".610(C)(1)";
var r61001 = "P" + this.pageNum + ".IO" + ".610.01";

if (event.target.value != "Yes") {
	// box is checked
	this.getField(r610A6).display = display.visible;
	this.getField(r610A8a).display = display.visible;
	this.getField(r610B2).display = display.visible;
	this.getField(r610B3).display = display.visible;
	this.getField(r610B4).display = display.visible;
	this.getField(r610C1).display = display.visible;
	this.getField(r61001).display = display.visible;
	this.getField(r61001).value = "Choice5";
} else {
	// box is unchecked
	this.getField(r610A6).display = display.hidden;
	this.getField(r610A8a).display = display.hidden;
	this.getField(r610B2).display = display.hidden;
	this.getField(r610B3).display = display.hidden;
	this.getField(r610B4).display = display.hidden;
	this.getField(r610C1).display = display.hidden;
	this.getField(r61001).display = display.hidden;
}

// Scatter Measurements Show/Hide

// Getting the new names of the fields
var op1 = "P" + this.pageNum + ".IO" + ".op1";
var bot1 = "P" + this.pageNum + ".IO" + ".bot1";
var ac1 = "P" + this.pageNum + ".IO" + ".ac1";

// If the scatter box box is checked
if (event.target.value != "Yes") {
	this.getField(op1).display = display.visible;
	this.getField(bot1).display = display.visible;
	this.getField(ac1).display = display.visible;
} else {
	// If the scatter box is unchacked
	this.getField(op1).display = display.hidden;
	this.getField(bot1).display = display.hidden;
	this.getField(ac1).display = display.hidden;
}

// Comments Section Show/Hide

// Getting the new names of the fields
var comments = "P" + this.pageNum + ".IO" + ".COMMENTSRow1";

if (event.target.value != "Yes") {
	// box is checked
	this.getField(comments).display = display.visible;
} else {
	// box is unchecked
	this.getField(comments).display = display.hidden;
}

/***************************************************************
Code for determining if a measurement passes or fails based on
A.R.S. and A.A.C. Rules and Regulations. Result of test is 
displayed in the box where the calculation is preformed.
****************************************************************/

// Determining if the output kVp is within 10% variance

// Getting the new names of the fields
var kvp1 = "P" + this.pageNum + ".IO" + ".kvp1";
var kvp11 = "P" + this.pageNum + ".IO" + ".kvp11";
var kvp1pass = "P" + this.pageNum + ".IO" + ".kvp1pass";

// Selecting set kVp value (kvp1) form box and finding the min/max
// kVp values (+10% and -10%).
var kvp1 = this.getField(kvp1);
var kvp1_max = kvp1.value * 1.1;
var kvp1_min = kvp1.value * 0.9;

// Selecting the measured kVp (kvp11) and the location where the
// result should be print (kvp1pass) form box
var kvp2 = this.getField(kvp11).value;
var pass_fail = this.getField(kvp1pass);

// If the measured kVp (kvp11) box has not been filled out yet the
// pass/fail box will appear blank.
if (kvp2 == "") {
	pass_fail.value = "";
} else if (kvp1_min <= kvp2 && kvp2 <= kvp1_max) {
	// If the output kVp is within 10% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = "PASS";
} else {
	// If the output kVp is outside of +/-10% then mark as FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = "FAIL - 610(A)(9)";
}

// Determining if the beam quality (HVL) is within our regulations.
// HVL PASS/FAIL are based on R9-7-605 Table 1

// Getting the new names of the fields
var kvp1 = "P" + this.pageNum + ".IO" + ".kvp1";
var hvl1 = "P" + this.pageNum + ".IO" + ".hvl1";
var mfgDate1 = "P" + this.pageNum + ".IO" + ".mfgDate1";
var hvlpass1 = "P" + this.pageNum + ".IO" + ".hvlpass1";

// Selecting manufacturing date (mfgDate), measured HVL (hvl), set kVp (kvp),
// and the location to print the result (hvlpass) form boxes
var mfgDate = this.getField(mfgDate1);
var hvl = this.getField(hvl1);
var pass_fail = this.getField(hvlpass1);
var kvp = this.getField(kvp1);

// If the measured HVL (hvl) box has not been filled out yet the pass/fail
// box will appear blank
if (hvl.value == "") {
	pass_fail.value = "";
}
// If the unit was manufactured after December 1, 1980
else if (mfgDate.value > 1980) {
	// If the HVL is above 1.5 PASS
	if (hvl.value >= 1.5) {
		pass_fail.textColor = color.green;
		pass_fail.value = "PASS";
	} else {
		// If the HVL is less than 1.5 FAIL
		pass_fail.textColor = color.red;
		pass_fail.value = "FAIL - 605(C)(1)";
	}
}
// If the unit was manufactured before December 1, 1980
else {
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
	} else {
		// If you get here you didn't enter a valid kVp, HVL, or mfgDate value
		pass_fail.textColor = color.orange;
		pass_fail.value = "ERROR";
	}
}

// Determining if Exposure Timer is within 20% variance

// The PASS/FAIL of the timer will be based only off of the time displayed in
// the seconds box. If the unit is set to pulses, the functions in place will
// calculate the exposure time in seconds for you.

// Getting the new names of the fields
var sec1 = "P" + this.pageNum + ".IO" + ".sec1";
var sec11 = "P" + this.pageNum + ".IO" + ".sec11";
var timepass1 = "P" + this.pageNum + ".IO" + ".timepass1";

// Selecting the set time (sec1) form box and finding the min/max time values
var time1 = this.getField(sec1);
var time1_max = time1.value * 1.2;
var time1_min = time1.value * 0.8;

// Selecting the measured time (sec11) value and location to print the result
// (timepass1) form box
var time2 = this.getField(sec11).value;
var pass_fail = this.getField(timepass1);

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
	pass_fail.value = "FAIL - 610(A)(9)";
}

/***************************************************************
Code for calculating the exposure time in seconds from either:
pulses or mA and mAs. Entering in the time in either seconds or
pulses is preferred; however, not every unit displays both or either.
In the case that only pulses is displayed time in seconds is
calculated from that time. If the unit does not display time at all,
only mA and mAs then exposure time in seconds will be calculated.
****************************************************************/

// Getting the new names of the fields
var sec1 = "P" + this.pageNum + ".IO" + ".sec1";
var pulse1 = "P" + this.pageNum + ".IO" + ".pulse1";
var timeSec = "P" + this.pageNum + ".IO" + ".time1sec";
var timePul = "P" + this.pageNum + ".IO" + ".time1pul";
var mas1 = "P" + this.pageNum + ".IO" + ".mas1";
var ma1 = "P" + this.pageNum + ".IO" + ".ma1";
var sec11 = "P" + this.pageNum + ".IO" + ".sec11";

// Selecting the sec and pul form boxes
var pul = this.getField(pulse1);
var sec = this.getField(sec1);
var sec2 = this.getField(sec11);
var mas = this.getField(mas1);
var ma = this.getField(ma1);

if (this.getField(timeSec).isBoxChecked(0)) {
	sec.textColor = color.black;
	sec.readonly = false;
	sec.display = display.visible;
} else if (this.getField(timePul).isBoxChecked(0) && pul.value != "") {
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
var sec1 = "P" + this.pageNum + ".IO" + ".sec1";
var mas1 = "P" + this.pageNum + ".IO" + ".mas1";
var ma1 = "P" + this.pageNum + ".IO" + ".ma1";

// Selecting the sec and pul form boxes
var time = this.getField(sec1);
var mas = this.getField(mas1);
var ma = this.getField(ma1);

// If bot the mA and time fields are complete (not blank), calculate mAs
if (ma.value != "" && time.value != "") {
	mas.value = ma.value * time.value;
}
