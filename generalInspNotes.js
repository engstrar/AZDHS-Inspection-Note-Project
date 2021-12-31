/***************************************************************
This code pertains to the main two pages of the Inspection Notes.
Author: Arek M Engstrom
Date: 2021-08-09
Note:
****************************************************************/

/***************************************************************
Code for buttons that will be at the bottom of each page. Used
to spawn as many unit pages as are needed during an inspection.
All form boxes on each page will be renamed based on the page
number and the template page used to create the new page (i.e.
"CT" for a CT Unit page.). Since pages will be renamed in a
predictable way form boxes on each page will be unique while
also having added functionalities.
****************************************************************/

// New Dental Unit Button
this.getTemplate("IO").spawn({
	nPage: this.numPages,
	bRename: true,
	bOverlay: false,
});

// New General Purpose Unit Button
this.getTemplate("GP").spawn({
	nPage: this.numPages,
	bRename: true,
	bOverlay: false,
});

// New CT Unit Button
this.getTemplate("CT").spawn({
	nPage: this.numPages,
	bRename: true,
	bOverlay: false,
});

// New Fluoroscopic Unit Button
this.getTemplate("Fluoro").spawn({
	nPage: this.numPages,
	bRename: true,
	bOverlay: false,
});

// New Therapy Unit Button
this.getTemplate("Therapy").spawn({
	nPage: this.numPages,
	bRename: true,
	bOverlay: false,
});

// New E-Brachytherapy Unit Button
this.getTemplate("eBrachy").spawn({
	nPage: this.numPages,
	bRename: true,
	bOverlay: false,
});

/***************************************************************
Code for auto populating the Facility Name, Registration Number
and Survey Date on all subsequent pages, regardless of if the 
values were filled in before or after the template page was 
spawned. This allows for more efficient inspecting as you can
fill out all of the details after the inspection. All template
pages will have the field names based on the template page 
(i.e. IO, GP, CT, Fluoro, etc.)
****************************************************************/

// Auto Populating the Facility Name
event.value = this.getField("facilityName").valueAsString;

// Auto Populating the Registration Number
event.value = this.getField("regNum").valueAsString;

// Auto Populating the Inspection Date
event.value = this.getField("inspDate").valueAsString;

// Auto Populating the Amendment Number
event.value = this.getField("Amd").valueAsString;
