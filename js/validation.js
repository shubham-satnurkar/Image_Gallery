let fnameNode = $('#fname');
let lnameNode = $('#lname');
let emailNode = $('#email');
let mobileNode = $('#mobile');
let messageNode = $('#message');

let feedNameNode = $('#feedName');
let feedEmailNode = $('#feedEmail');
let feedMessageNode = $('feedMessage');

let errorNode1 = $('#error1');
let errorNode2 = $('#error2');
let errorNode3 = $('#error3');
let errorNode4 = $('#error4');
let errorNode5 = $('#error5');
let contFormNode = $('#contForm');

let errorNode6= $('#feedError1');
let errorNode7= $('#feedError2');
let errorNode8= $('#feedError3');
let feedFormNode = $('#feedForm');

let border1 = "2px solid #f00";
let border2 = "2px solid #0f0";

$(document).ready(function(){
	fnameNode.blur(() => validate1());
	lnameNode.blur(() => validate2());
	emailNode.blur(() => validate3());
	mobileNode.blur(() => validate4());
	messageNode.blur(() => validate5());

	feedNameNode.blur(()=> validate6());
	feedEmailNode.blur(()=> validate7());
	feedMessageNode.blur(()=> validate8());

	contFormNode.submit(()=>validateForm());
	feedFormNode.submit(()=>validateForm());
});


// Contact Form Validation
function validate1(){
	errorNode1.text("");
	let fname=fnameNode.val();
	let regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(fname));
	if(fname== ''){
		errorNode1.text('this field required');
		fnameNode.css('border', border1);
		return false;
	}
	else if(regExp.test(fname)==false){
		errorNode1.text("Name Should contain Only Alphabates");
		fnameNode.css('border', border1);
		return false;
	}
	else{
		fnameNode.css('border', border2);
		return true;
	}
}

function validate2(){
	errorNode2.text("");
	let lname=lnameNode.val();
	let regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(lname));
	if(lname== ''){
		errorNode2.text('this field required');
		lnameNode.css('border', border1);
		return false;
	}
	else if(regExp.test(lname)==false){
		errorNode2.text("Name Should contain Only Alphabates");
		lnameNode.css('border', border1);
		return false;
	}
	else{
		lnameNode.css('border', border2);
		return true;
	}
}

function validate3(){
	errorNode3.text("");
	let email = emailNode.val();
	let substr =email.substring(email.indexOf('@')+1);
	console.log(substr);
	if (email=='') {
		errorNode3.text("this field requireds");
		emailNode.css('border', border1);
		return false;
	} 
	else if(!email.includes('@') || substr==''){
		errorNode3.text("email id incorrect");
		emailNode.css('border', border1);
		return false;
	}
	else {
		emailNode.css('border', border2);
		return true;
	}
}

function validate4(){
	errorNode4.text("");
	let mobile = mobileNode.val();
	let regExp = new RegExp("^[0-9]*$");
	console.log(regExp.test(mobile));
	if(mobile == ''){
		errorNode4.text("this field required");
		mobileNode.css('border', border1);
		return false
	}
	else if(regExp.test(mobile)==false){
		errorNode4.text("number should contain only digit");
		mobileNode.css('border', border1);
		return false;
	}
	else if(mobile.length!=10){
		errorNode4.text("mobile number not valid");
		mobileNode.css('border', border1);
		return false;
	}
	else{
		mobileNode.css('border', border2);
		return true;
	}
}


function validate5(){
	errorNode5.text(" ");
	let message = messageNode.val();
	let regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(message));
	if (message == '') {
		errorNode5.text("this field required");
		messageNode.css('border', border1);
		return false;
	}
	else if(regExp.test(message)==false){
		errorNode5.text("Message required");
		messageNode.css('border', border1);
		return false;
	}
	else{
		messageNode.css('border', border2);
		return true;
	}
}




// Feedback Form Validation

function validate6(){
	errorNode6.text("");
	let feedName=feedNameNode.val();
	let regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(feedName));
	if(feedName== ''){
		errorNode6.text('this field required');
		feedNameNode.css('border', border1);
		return false;
	}
	else if(regExp.test(feedName)==false){
		errorNode6.text("Name Should contain Only Alphabates");
		feedNameNode.css('border', border1);
		return false;
	}
	else{
		feedNameNode.css('border', border2);
		return true;
	}
}


function validate7(){
	errorNode7.text("");
	let feedEmail = feedEmailNode.val();
	let substr =feedEmail.substring(feedEmail.indexOf('@')+1);
	console.log(substr);
	if (feedEmail=='') {
		errorNode7.text("this field requireds");
		feedEmailNode.css('border', border1);
		return false;
	} 
	else if(!feedEmail.includes('@') || substr==''){
		errorNode7.text("Email id incorrect");
		feedEmailNode.css('border', border1);
		return false;
	}
	else {
		feedEmailNode.css('border', border2);
		return true;
	}
}


function validate8(){
	errorNode8.text(" ");
	let feedMessage = feedMessageNode.val();
	let regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(feedMessage));
	if (feedMessage == '') {
		errorNode8.text("this field required");
		feedMessageNode.css('border', border1);
		return false;
	}
	else if(regExp.test(feedMessage)==false){
		errorNode8.text("Message required");
		feedMessageNode.css('border', border1);
		return false;
	}
	else{
		feedMessageNode.css('border', border2);
		return true;
	}
}



// Submit From Validation

function validateForm(){
    let st1=validate1(); 
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();
    
    let st6=validate6();
    let st7=validate7();
    let st8=validate8();

    return st1 && st2 && st3 && st4 && st5 && st6 && st7 && st8;
}