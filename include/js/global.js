//Global Functions & settings version=3.7
/*******************
* global variables *
********************/

currentLink = 0;		//current highlighted link
currentPage = 0;		//current page


//URL Function
function goToURL(varDestURL){
	if(varDestURL!=''){
		window.location = varDestURL;
	}
}

/************
* constants *
*************/

//date constants
var MINUTE = 60 * 1000
var HOUR = MINUTE * 60
var DAY = HOUR * 24
var WEEK = DAY * 7


// Declaring required variables for phone validation
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 10;


/****************************
* general browser functions *
*****************************/



function checkFrame(page) {
	if (window.top == self) {
		this.location="../main.asp?page=" + page;
	} else {
		return true;
	}
}

function newWindow(url,inName,w,h) {
	if (inName == '') {
		winName = 'info';
	} else {
		winName = inName;
	}
	window.open(formatUrl(url),winName,'width=' + w + ',height=' + h + ',menubar=no,directories=no,toolbar=no,location=no,status=0,resizable=yes,scrollbars=yes');
}

function newWindowF(url ,inName,w,h) {
	if (inName == '') {
		winName = 'info';
	} else {
		winName = inName;
	}
	window.open(formatUrl(url),winName,'width=' + w + ',height=' + h + ',menubar=no,directories=no,toolbar=no,location=no,status=0,resizable=no,scrollbars=no');
}

function formatUrl(url) {
	if (navigator.appName == 'Netscape') url = url.replace('../', '');
	
	return url
}

//as newWindow but without scroller
function newWin(url,inName,w,h) {
	if (inName == '') {
		winName = 'info';
	} else {
		winName = inName;
	}
	window.open(formatUrl(url),winName,'width=' + w + ',height=' + h + ',menubar=no,directories=no,toolbar=no,location=no,status=0,resizable=no,scrollbars=no');
}

function focusWindow() {
	this.window.focus();
}

function closeWindow() {
	this.window.close();
}

function on(image) {
	if(currentLink != 0) document['link' + currentLink].src = eval('img' + currentLink + "_off.src");
	document['link' + image].src = eval('img' + image + '_on.src');
}

function off(image) {
	if(currentLink != 0) document['link' + currentLink ].src = eval('img' + currentLink + "_on.src");
	if(currentLink == 0 || currentLink != image) document['link' + image].src = eval('img' + image + "_off.src");
}

function linkOn(linkNum) {
	off(currentPage);
	on(linkNum);
}

function linkOff(linkNum) {
	off(linkNum);
	on(currentPage);
}

function backPage() {
	this.window.history.back();
}

function printPage(){
	this.focus();
	if (window.print) {
	    window.print();  
	}
}

function bookmark(url, name) {
	if (navigator.appName == 'Microsoft Internet Explorer') {
		window.external.AddFavorite(url, name);
	} else {
		alert('Sorry, this feature is only available on Microsoft Internet Explorer');
	}
}

function setStatus(statusText) {
	window.setTimeout('window.status = "' + statusText + '";', 1);
}

/*******************
* string & numeric *
********************/

//************************************************* START OF PHONE VALIDATOR
//Vars declared at top
function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function checkInternationalPhone(strPhone){
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

function ValidatePhoneNumber(obj, thisType){
	if (obj.value!=""){
		if (checkInternationalPhone(obj.value)==false){
			alert("Please Enter a Valid " + thisType + " Number")
			obj.value=""
			obj.focus()
			return false
		}	
		return true
	} else {
		return true
	}
 }
//************************************************* END OF PHONE VALIDATOR

//return a string comprising a repeated substring 
function makeString(strLen,strText) {
	var outText = '';
	for(n=1; n<=strLen; n++) outText += strText;
	return outText;
}

//return number or string with specified leading 0's
function pad(inNum,padLen) {
	outText = inNum.toString();
	padLen -= outText.length;
	if(padLen > 0) outText = makeString(padLen,'0') + outText;
	return outText;
}

//validate email address
function validateEmail(email) {
	if (email != '') {
		return email.search(/.+@.+\..+/);
	} else {
		return -1;
	}
}


//validate mobile
function validateMobile(mobile) {
	if (mobile != '') {
		return mobile.search(/^\+447\d{9}$/);
	} else {
		return -1;
	}
}


//check if number is numeric
function isInt(num) {
	if (num == '' || num.search(/\D+/) >= 0) {
		return false;
	} else {
		return true;
	}
}

function isFloat(num) {
	num = replace(num, '.', '');
	
	return isInt(num);
}

function replace(string, text, by) {
// Replaces text with by in string
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;

    var newstr = string.substring(0,i) + by;

    if (i+txtLength < strLength)
        newstr += replace(string.substring(i+txtLength,strLength),text,by);

    return newstr;
}

//create random number
function getRand(maxNum) {
	return Math.floor(Math.random() * maxNum) + 1;
}


function countWords(inText) {
	var char_count = inText.length;
	var fullStr = inText + " ";
	var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
	var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
	var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi;
	var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
	var splitString = cleanedStr.split(" ");
	var word_count = splitString.length -1;
	
	if (fullStr.length <2) {
		word_count = 0;
	}

	return word_count;
}


/*****************
* form functions *
******************/

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

//select all rows in select tag (formname = 'details')
function selectFields(selectStatus, fieldName, selectField) {
	fieldObj = eval('document.details.' + fieldName);
	
	if (selectField) {
		firstField = 1;
		if (selectStatus) {
			selStatus = false;
		} else {
			selStatus = true;
		}
		fieldObj[0].selected = selStatus;
	} else {
		firstField = 0;
	}
	
	for (i = firstField; i < fieldObj.length; i++) {
		fieldObj[i].selected = selectStatus;
	}
}

function getSelectedText() {
	if (document.getSelection) {
		str = document.getSelection();
	} else if (document.selection && document.selection.createRange) {
		str = document.selection.createRange().text;
	} else {
		str = '';
	}

	return str;
}


/*****************
* date functions *
******************/

//builds date string from date part fields
function buildDate(fieldName,formName) {
	dateDay = eval('document.' + formName + '.p_d_' + fieldName + '.value');
	dateMonth = eval('document.' + formName + '.p_m_' + fieldName + '.value');
	dateYear = eval('document.' + formName + '.p_y_' + fieldName + '.value');

	if(typeof eval('document.' + formName + '.p_h_' + fieldName) == 'object') {
		dateHour = pad(eval('document.' + formName + '.p_h_' + fieldName + '.value'),2);
		dateMin = pad(eval('document.' + formName + '.p_mm_' + fieldName + '.value'),2);
		timeStr = ' ' + dateHour + ':' + dateMin;
	} else {
		timeStr = '';
	}
	
	formField = eval('document.' + formName + '.' + fieldName);
	formField.value = pad(dateDay,2) + '/' + pad(dateMonth,2) + '/' + pad(dateYear,2) + timeStr;
	if(formField.value == '00/00/00') formField.value = '';
}

//put day, month & year in respective form fields
function setDate(fieldName,formName,dayVal,monthVal,yearVal) {
	eval('document.' + formName + '.p_d_' + fieldName + '.value = ' + pad(dayVal,2));
	eval('document.' + formName + '.p_m_' + fieldName + '.value = ' + pad(monthVal,2));
	eval('document.' + formName + '.p_y_' + fieldName + '.value = ' + pad(yearVal,2));

	buildDate(fieldName,formName);
}

//convert dd/mm/yy string & return millisecs
function getUKDate(inDate) {
	dayVal		= inDate.substr(0,2);
	monthVal	= inDate.substr(3,2);
	yearVal		= inDate.substr(6,2);

	var newDate = new Date();

	newDate.setDate(dayVal);
	newDate.setMonth(monthVal - 1);
	newDate.setFullYear(yearVal);

	return newDate.valueOf();

}


/**************
* right click *
***************/
function clickIE() {
	if (document.all) {
		return false;
	}
}

function clickNS(e) {
	if (document.layers||(document.getElementById&&!document.all)) {
		if (e.which==2||e.which==3) {
			return false;
		}
	}
}


/********************************
* Functions for formatting text *
*********************************/

//textarea tag MUST HAVE: onkeyup="storeCaret(this);" onclick="storeCaret(this);"

function storeCaret (textEl) {
	if (textEl.createTextRange) {
		textEl.caretPos = document.selection.createRange().duplicate();
	}
}

function insertAtCaret (textEl, text, currentSelection) {
	if (textEl.createTextRange && textEl.caretPos) {
		if(currentSelection != '')  document.selection.createRange().text = '';	//del existing selection
		
		var caretPos = textEl.caretPos;
		caretPos.text =
			caretPos.text.charAt(caretPos.text.length - 1) == ' ' ?
			text + ' ' : text;
	} else {
		textEl.value  = textEl.value + text; // for non MSIE browsers just append it
	}

	return true;
}

function encloseTags(tag, fieldName) {
	formField = eval('document.details.' + fieldName)
	currentSelection = getSelectedText();
	
	if(currentSelection != '') {
		newText = '<' + tag + '>' + currentSelection + '</' + tag + '>';
		newText = newText.replace(' </' + tag + '>', '</' + tag + '>');
		newText = newText + ' ';
	} else {
		var newText = prompt("Enter the text you wish to format.", currentSelection);
		if(newText != '') newText = '<' + tag + '>' + newText + '</' + tag + '> ';
	}
	
	insertAtCaret(formField, newText, currentSelection);
	formField.focus();
}

function insertTag(tag, promptText, fieldName) {
	formField = eval('document.details.' + fieldName)
	
	if(promptText != '') {
		thisItem = prompt(promptText, '');
		if (thisItem == null){return;}
	} else {
		thisItem = '';
	}

	insertAtCaret(formField, tag + thisItem, '');
	formField.focus();
}

function createLink(fieldName) {
	formField = eval('document.details.' + fieldName)
	currentSelection = getSelectedText();
	linkText = currentSelection;
	
	if(linkText == '') var linkText = prompt("Enter the text you wish to make a link.", '');
	
	if(linkText != '') {
		var linkUrl = prompt('Enter the URL.', 'http://www.');
		
		if(linkUrl != '' && linkUrl != 'http://www.') {
			linkTarget = '';
			if(confirm("Click OK to open this link in a new window or Cancel to open in the main site.")) linkTarget = ' target="_blank"';

			newText = '<a href="' + linkUrl + '"' + linkTarget + '>' + linkText + '</a> ';
			insertAtCaret(formField, newText, currentSelection);
			formField.focus();
		}
	}
}
