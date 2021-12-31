/***************************************************************
This code pertains to the fluoroscopic unit page.
Author: Arek M Engstrom
Date: 2021-08-19
Notes: This page is saved as a template page with the name "Fluoro" 
****************************************************************/

/***************************************************************
Code for showing and hiding different parts of the page based on
what type of measurements are needing to be recorded.
****************************************************************/

// Multiple units Show/Hide

// Getting the new names of the fields
var fluoroMulti = 'P' + this.pageNum + '.Fluoro' + '.fluoroMultiUnit';
var fluoroUnitNum = 'P' + this.pageNum + '.Fluoro' + '.fluoroUnitNum';

// If the "Multiple Units" Box is checked
if (event.target.value != 'Yes') {
	this.getField(fluoroUnitNum).display = display.hidden;
	this.getField(fluoroMulti).display = display.visible;
} else {
	// If the "Multiple Units" Box is unchecked
	this.getField(fluoroUnitNum).display = display.visible;
	this.getField(fluoroMulti).display = display.hidden;
}

// Average/Max/Boost patient Attenuation Show/Hide
// Average Attenuation is rows 1-3
// Max Attenuation is rows 4-6
// Boost mode with average attenuation is rows 7-9

// Getting the new names of the fields
var fluoroKvp1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp1';
var fluoroKvp2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp2';
var fluoroKvp3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp3';
var fluoroMa1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroMa1';
var fluoroMa2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroMa2';
var fluoroMa3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroMa3';
var fluoroKvp11 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp11';
var fluoroKvp22 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp22';
var fluoroKvp33 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp33';
var fluoroExpRate1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpRate1';
var fluoroExpRate2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpRate2';
var fluoroExpRate3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpRate3';
var fluoroHvl1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvl1';
var fluoroHvl2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvl2';
var fluoroHvl3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvl3';
var fluoroOP1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroOP1';
var fluoroOP2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroOP2';
var fluoroOP3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroOP3';
var fluoroFoot1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroFoot1';
var fluoroFoot2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroFoot2';
var fluoroFoot3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroFoot3';
var fluoroSlot1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroSlot1';
var fluoroSlot2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroSlot2';
var fluoroSlot3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroSlot3';
var fluoroShield1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroShield1';
var fluoroShield2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroShield2';
var fluoroShield3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroShield3';
var fluoroCurtain1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroCurtain1';
var fluoroCurtain2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroCurtain2';
var fluoroCurtain3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroCurtain3';
var fluoroKvpPassFail1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvpPassFail1';
var fluoroKvpPassFail2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvpPassFail2';
var fluoroKvpPassFail3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvpPassFail3';
var fluoroExpPassFail1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpPassFail1';
var fluoroExpPassFail2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpPassFail2';
var fluoroExpPassFail3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpPassFail3';
var fluoroHvlPassFail1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvlPassFail1';
var fluoroHvlPassFail2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvlPassFail2';
var fluoroHvlPassFail3 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvlPassFail3';

// If the "Output" Box is checked
if (event.target.value != 'Yes') {
	this.getField(fluoroKvp1).display = display.visible;
	this.getField(fluoroKvp2).display = display.visible;
	this.getField(fluoroKvp3).display = display.visible;
	this.getField(fluoroMa1).display = display.visible;
	this.getField(fluoroMa2).display = display.visible;
	this.getField(fluoroMa3).display = display.visible;
	this.getField(fluoroKvp11).display = display.visible;
	this.getField(fluoroKvp22).display = display.visible;
	this.getField(fluoroKvp33).display = display.visible;
	this.getField(fluoroExpRate1).display = display.visible;
	this.getField(fluoroExpRate2).display = display.visible;
	this.getField(fluoroExpRate3).display = display.visible;
	this.getField(fluoroHvl1).display = display.visible;
	this.getField(fluoroHvl2).display = display.visible;
	this.getField(fluoroHvl3).display = display.visible;
	this.getField(fluoroOP1).display = display.visible;
	this.getField(fluoroOP2).display = display.visible;
	this.getField(fluoroOP3).display = display.visible;
	this.getField(fluoroFoot1).display = display.visible;
	this.getField(fluoroFoot2).display = display.visible;
	this.getField(fluoroFoot3).display = display.visible;
	this.getField(fluoroSlot1).display = display.visible;
	this.getField(fluoroSlot2).display = display.visible;
	this.getField(fluoroSlot3).display = display.visible;
	this.getField(fluoroShield1).display = display.visible;
	this.getField(fluoroShield2).display = display.visible;
	this.getField(fluoroShield3).display = display.visible;
	this.getField(fluoroCurtain1).display = display.visible;
	this.getField(fluoroCurtain2).display = display.visible;
	this.getField(fluoroCurtain3).display = display.visible;
	this.getField(fluoroKvpPassFail1).display = display.visible;
	this.getField(fluoroKvpPassFail2).display = display.visible;
	this.getField(fluoroKvpPassFail3).display = display.visible;
	this.getField(fluoroExpPassFail1).display = display.visible;
	this.getField(fluoroExpPassFail2).display = display.visible;
	this.getField(fluoroExpPassFail3).display = display.visible;
	this.getField(fluoroHvlPassFail1).display = display.visible;
	this.getField(fluoroHvlPassFail2).display = display.visible;
	this.getField(fluoroHvlPassFail3).display = display.visible;
} else {
	// If the "Output" Box is unchecked
	this.getField(fluoroKvp1).display = display.hidden;
	this.getField(fluoroKvp2).display = display.hidden;
	this.getField(fluoroKvp3).display = display.hidden;
	this.getField(fluoroMa1).display = display.hidden;
	this.getField(fluoroMa2).display = display.hidden;
	this.getField(fluoroMa3).display = display.hidden;
	this.getField(fluoroKvp11).display = display.hidden;
	this.getField(fluoroKvp22).display = display.hidden;
	this.getField(fluoroKvp33).display = display.hidden;
	this.getField(fluoroExpRate1).display = display.hidden;
	this.getField(fluoroExpRate2).display = display.hidden;
	this.getField(fluoroExpRate3).display = display.hidden;
	this.getField(fluoroHvl1).display = display.hidden;
	this.getField(fluoroHvl2).display = display.hidden;
	this.getField(fluoroHvl3).display = display.hidden;
	this.getField(fluoroOP1).display = display.hidden;
	this.getField(fluoroOP2).display = display.hidden;
	this.getField(fluoroOP3).display = display.hidden;
	this.getField(fluoroFoot1).display = display.hidden;
	this.getField(fluoroFoot2).display = display.hidden;
	this.getField(fluoroFoot3).display = display.hidden;
	this.getField(fluoroSlot1).display = display.hidden;
	this.getField(fluoroSlot2).display = display.hidden;
	this.getField(fluoroSlot3).display = display.hidden;
	this.getField(fluoroShield1).display = display.hidden;
	this.getField(fluoroShield2).display = display.hidden;
	this.getField(fluoroShield3).display = display.hidden;
	this.getField(fluoroCurtain1).display = display.hidden;
	this.getField(fluoroCurtain2).display = display.hidden;
	this.getField(fluoroCurtain3).display = display.hidden;
	this.getField(fluoroKvpPassFail1).display = display.hidden;
	this.getField(fluoroKvpPassFail2).display = display.hidden;
	this.getField(fluoroKvpPassFail3).display = display.hidden;
	this.getField(fluoroExpPassFail1).display = display.hidden;
	this.getField(fluoroExpPassFail2).display = display.hidden;
	this.getField(fluoroExpPassFail3).display = display.hidden;
	this.getField(fluoroHvlPassFail1).display = display.hidden;
	this.getField(fluoroHvlPassFail2).display = display.hidden;
	this.getField(fluoroHvlPassFail3).display = display.hidden;
}

// Code to show and hide the collimation section

// Getting the new names of the fields
var fluoroTop = 'P' + this.pageNum + '.Fluoro' + '.fluoroTop';
var fluoroBot = 'P' + this.pageNum + '.Fluoro' + '.fluoroBot';
var fluoroL = 'P' + this.pageNum + '.Fluoro' + '.fluoroL';
var fluoroR = 'P' + this.pageNum + '.Fluoro' + '.fluoroR';

// If the collimation box box is checked
if (event.target.value != 'Yes') {
	this.getField(fluoroTop).display = display.visible;
	this.getField(fluoroBot).display = display.visible;
	this.getField(fluoroL).display = display.visible;
	this.getField(fluoroR).display = display.visible;
} else {
	// If the collimation box is unchecked
	this.getField(fluoroTop).display = display.hidden;
	this.getField(fluoroBot).display = display.hidden;
	this.getField(fluoroL).display = display.hidden;
	this.getField(fluoroR).display = display.hidden;
}

/***************************************************************
Code for determining if a measurement passes or fails based on
A.R.S. and A.A.C. Rules and Regulations. Result of test is 
displayed in the box where the calculation is preformed.
****************************************************************/

// Determining if output kVp within 10% variance

// Getting the new names of the fields
var kvp1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp1';
var kvp11 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp11';
var kvppass1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvpPassFail1';

// Selecting set kVp form box and finding the min/max kVp values
var kvp1 = this.getField(kvp1);
var kvp1_max = kvp1.value * 1.1;
var kvp1_min = kvp1.value * 0.9;

// Selecting the measured kVp (kvp11) value and location to print the
// result (kvppass1) form box
var kvp2 = this.getField(kvp11).value;
var pass_fail = this.getField(kvppass1);

// If the measured kVp (kvp11) box has not been filled out yet the
// pass/fail box will appear blank
if (kvp2 == '') {
	pass_fail.value = '';
} else if (kvp1_min <= kvp2 && kvp2 <= kvp1_max) {
	// If the output kVp is within 10% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = 'PASS';
} else {
	// If none of the above then FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = 'FAIL - 605(G)';
}

// Determining if the Exposure rate exceeds 10 R/min

// Getting the new names of the fields
var expRate1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpRate1';
var exppass1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpPassFail1';

// Selecting the measured exposure rate value and location to print the
// result form box
var expRate = this.getField(expRate1).value;
var pass_fail = this.getField(exppass1);

// If the measured exposure rate box has not been filled out yet the
// pass/fail box will appear blank
if (expRate == '') {
	pass_fail.value = '';
} else if (expRate <= 10) {
	// If the output kVp is within 10% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = 'PASS';
} else {
	// If none of the above then FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = 'FAIL - 606(C)(1)';
}

// Determining if the Exposure rate exceeds 10 R/min
// This is for both average and maximum patient attenuation

// Getting the new names of the fields
var expRate1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpRate1';
var exppass1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpPassFail1';

// Selecting the measured exposure rate value and location to print the
// result form box
var expRate = this.getField(expRate1).value;
var pass_fail = this.getField(exppass1);

// If the measured exposure rate box has not been filled out yet the
// pass/fail box will appear blank
if (expRate == '') {
	pass_fail.value = '';
} else if (expRate <= 10) {
	// If the output kVp is within 10% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = 'PASS';
} else {
	// If none of the above then FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = 'FAIL - 606(C)(1)';
}

// Determining if the Exposure rate exceeds 20 R/min
// This is for the optional boost mode on fluoroscopic units

// Getting the new names of the fields
var expRate1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpRate8';
var exppass1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroExpPassFail8';

// Selecting the measured exposure rate value and location to print the
// result form box
var expRate = this.getField(expRate1).value;
var pass_fail = this.getField(exppass1);

// If the measured exposure rate box has not been filled out yet the
// pass/fail box will appear blank
if (expRate == '') {
	pass_fail.value = '';
} else if (expRate <= 20) {
	// If the output kVp is within 10% of what the input was marked as PASS
	pass_fail.textColor = color.green;
	pass_fail.value = 'PASS';
} else {
	// If none of the above then FAIL
	pass_fail.textColor = color.red;
	pass_fail.value = 'FAIL - 606(C)(2)';
}

// Determining if the beam quality (HVL) is within our regulations.
// HVL PASS/FAIL are based on R9-7-605 Table 1

// Getting the new names of the fields
var fluoroMfgDate = 'P' + this.pageNum + '.Fluoro' + '.fluoroMfgDate';
var fluoroHvl1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvl1';
var fluoroHvlPassFail1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroHvlPassFail1';
var fluoroKvp1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroKvp1';

// Selecting manufacturing date, measured HVL, set kVp, and the location to print the result
var mfgDate = this.getField(fluoroMfgDate);
var hvl = this.getField(fluoroHvl1);
var pass_fail = this.getField(fluoroHvlPassFail1);
var kvp = this.getField(fluoroKvp1);

// If the hvl1 box has not been filled out yet the pass/fail box will appear blank
if (hvl.value == '') {
	pass_fail.value = '';
} else if (mfgDate.value > 2006) {
	// If the unit was manufactured after June 10, 2006

	// For outputs ranging from [30-40) kVp
	if (kvp.value >= 30 && kvp.value < 40) {
		// If the HVL is greater than or equal to 0.3 PASS
		if (hvl.value >= 0.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 0.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 40 && kvp.value < 50) {
		// For outputs ranging from [40-50) kVp
		// If the HVL is greater than or equal to 0.4 PASS
		if (hvl.value >= 0.4) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 0.4 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value == 50) {
		// For outputs at 50 kVp
		// If the HVL is greater than or equal to 0.5 PASS
		if (hvl.value >= 0.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 0.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 51 && kvp.value < 60) {
		// For outputs ranging from [51-60) kVp
		// If the HVL is greater than or equal to 1.2 PASS
		if (hvl.value >= 1.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 1.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 60 && kvp.value < 70) {
		// For outputs ranging from [60-70) kVp
		// If the HVL is greater than or equal to 1.3 PASS
		if (hvl.value >= 1.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 1.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value == 70) {
		// For outputs at 70 kVp
		// If the HVL is greater than or equal to 1.5 PASS
		if (hvl.value >= 1.8) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 1.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 71 && kvp.value < 80) {
		// For outputs ranging from [71-80) kVp
		// If the HVL is greater than or equal to 2.1 PASS
		if (hvl.value >= 2.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 80 && kvp.value < 90) {
		// For outputs ranging from [80-90) kVp
		// If the HVL is greater than or equal to 2.3 PASS
		if (hvl.value >= 2.9) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 90 && kvp.value < 100) {
		// For outputs ranging from [90-100) kVp
		// If the HVL is greater than or equal to 2.5 PASS
		if (hvl.value >= 3.2) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 100 && kvp.value < 110) {
		// For outputs ranging from [100-110) kVp
		// If the HVL is greater than or equal to 2.7 PASS
		if (hvl.value >= 3.6) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.7 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 110 && kvp.value < 120) {
		// For outputs ranging from [110-120) kVp
		// If the HVL is greater than or equal to 3.0 PASS
		if (hvl.value >= 3.9) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.0 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 120 && kvp.value < 130) {
		// For outputs ranging from [120-130) kVp
		// If the HVL is greater than or equal to 3.2 PASS
		if (hvl.value >= 4.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 130 && kvp.value < 140) {
		// For outputs ranging from [130-140) kVp
		// If the HVL is greater than or equal to 3.5 PASS
		if (hvl.value >= 4.7) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 140 && kvp.value < 150) {
		// For outputs ranging from [140-150) kVp
		// If the HVL is greater than or equal to 3.8 PASS
		if (hvl.value >= 5.0) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.8 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 150) {
		// For outputs greater than or equal to 150 kVp
		// If the HVL is greater than or equal to 4.1 PASS
		if (hvl.value >= 5.4) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 4.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else {
		// If you get here you didn't enter a valid kVp, HVL, or mfgDate value
		pass_fail.textColor = color.orange;
		pass_fail.value = 'ERROR';
	}
} else {
	// If the unit was manufactured before June 10, 2006

	// For outputs ranging from [30-40) kVp
	if (kvp.value >= 30 && kvp.value < 40) {
		// If the HVL is greater than or equal to 0.3 PASS
		if (hvl.value >= 0.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 0.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 40 && kvp.value < 50) {
		// For outputs ranging from [40-50) kVp
		// If the HVL is greater than or equal to 0.4 PASS
		if (hvl.value >= 0.4) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 0.4 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value == 50) {
		// For outputs at 50 kVp
		// If the HVL is greater than or equal to 0.5 PASS
		if (hvl.value >= 0.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 0.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 51 && kvp.value < 60) {
		// For outputs ranging from [51-60) kVp
		// If the HVL is greater than or equal to 1.2 PASS
		if (hvl.value >= 1.2) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 1.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 60 && kvp.value < 70) {
		// For outputs ranging from [60-70) kVp
		// If the HVL is greater than or equal to 1.3 PASS
		if (hvl.value >= 1.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 1.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value == 70) {
		// For outputs at 70 kVp
		// If the HVL is greater than or equal to 1.5 PASS
		if (hvl.value >= 1.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 1.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 71 && kvp.value < 80) {
		// For outputs ranging from [71-80) kVp
		// If the HVL is greater than or equal to 2.1 PASS
		if (hvl.value >= 2.1) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 80 && kvp.value < 90) {
		// For outputs ranging from [80-90) kVp
		// If the HVL is greater than or equal to 2.3 PASS
		if (hvl.value >= 2.3) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.3 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 90 && kvp.value < 100) {
		// For outputs ranging from [90-100) kVp
		// If the HVL is greater than or equal to 2.5 PASS
		if (hvl.value >= 2.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 100 && kvp.value < 110) {
		// For outputs ranging from [100-110) kVp
		// If the HVL is greater than or equal to 2.7 PASS
		if (hvl.value >= 2.7) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 2.7 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 110 && kvp.value < 120) {
		// For outputs ranging from [110-120) kVp
		// If the HVL is greater than or equal to 3.0 PASS
		if (hvl.value >= 3.0) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.0 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 120 && kvp.value < 130) {
		// For outputs ranging from [120-130) kVp
		// If the HVL is greater than or equal to 3.2 PASS
		if (hvl.value >= 3.2) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.2 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 130 && kvp.value < 140) {
		// For outputs ranging from [130-140) kVp
		// If the HVL is greater than or equal to 3.5 PASS
		if (hvl.value >= 3.5) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.5 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 140 && kvp.value < 150) {
		// For outputs ranging from [140-150) kVp
		// If the HVL is greater than or equal to 3.8 PASS
		if (hvl.value >= 3.8) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 3.8 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else if (kvp.value >= 150) {
		// For outputs greater than or equal to 150 kVp
		// If the HVL is greater than or equal to 4.1 PASS
		if (hvl.value >= 4.1) {
			pass_fail.textColor = color.green;
			pass_fail.value = 'PASS';
		} else {
			// If the HVL is less than 4.1 FAIL
			pass_fail.textColor = color.red;
			pass_fail.value = 'FAIL - 605(C)(1)';
		}
	} else {
		// If you get here you didn't enter a valid kVp, HVL, or mfgDate value
		pass_fail.textColor = color.orange;
		pass_fail.value = 'ERROR';
	}
}

// Determining if Collimation is within 2%. Duplicate formulas
// were written to test for the left and right collimation.

// Getting the new names of the fields
var fluoroCol1 = 'P' + this.pageNum + '.Fluoro' + '.fluoroTop';
var fluoroCol2 = 'P' + this.pageNum + '.Fluoro' + '.fluoroBot';
var fluoroPF = 'P' + this.pageNum + '.Fluoro' + '.fluoroTopBotPF';

// Selecting the form fields of interest
var col1 = this.getField(fluoroCol1);
var col1_calc = col1.value;
var col2 = this.getField(fluoroCol2);
var col2_calc = col2.value;
var pass_fail = this.getField(fluoroPF);

// If either of the collimation boxes have not been filled out yet the pass/fail box will appear blank
if (col1.value === '' || col2.value === '') {
	pass_fail.value = '';
} else {
	// Changing all colimation values to positive to check for pass/fail
	if (col1.value < 0) {
		col1_calc = -1 * col1.value;
	}
	if (col2.value < 0) {
		var col2_calc = -1 * col2.value;
	}

	// Checking to see if the collimation is within 2%
	var err = col1_calc + col2_calc;
	if (err <= 2) {
		pass_fail.textColor = color.green;
		pass_fail.value = 'PASS';
	} else {
		// If the collimation is >2%
		pass_fail.textColor = color.red;
		pass_fail.value = 'FAIL - 607(A)(1)(2)';
	}
}
