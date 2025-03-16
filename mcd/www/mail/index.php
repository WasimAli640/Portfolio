<?php
require("class.phpmailer.php");

$msg="";
if($_POST)
{
	error_reporting(1);
	$email=$_POST['email'];
	if(!empty($email) && $email!="Enter your email address here")
	{
		/*$to = 'narendra.khajja@galaxyweblinks.com';
		$from = 'Wellnesia';
		$subject = 'Inquiry from wellnesia.com';
		$body ="A user (".$email.") wants to join wellnesia.";
		//mail('contact@wellnesia.com', 'Inquiry from wellnesia.com', "A user (".$email.") wants to join wellnesia.");
		//mail('narendra.khajja@galaxyweblinks.com', 'Inquiry from wellnesia.com', "A user (".$email.") wants to join wellnesia.");		
		$SMTPMail = new SMTPClient ($SmtpServer, $SmtpPort, $SmtpUser, $SmtpPass, $from, $to, $subject, $body);
		$SMTPChat = $SMTPMail->SendMail();*/
		
			$mail = new PHPMailer();
		// ================= DO NOT CHANGE ANYTHING IN THIS SECTION =====================
			$mail->IsSMTP();                           
			$mail->Host     = "smtp.sendgrid.net"; 
		
			$mail->SMTPAuth = true;     
			$mail->Username = "kpmrs";

			$mail->Password = "Kpmrs!@#"; 

	// ================= DO NOT CHANGE ANYTHING IN THIS SECTION =====================
	
				$mail->From     = "info@galaxyweblinks.com";
				$mail->FromName = "galaxyweblinks.com";
		
	
/*				$mail->From     = "info@tivomailer.com";
				$mail->FromName = "tivomailer.com";
*/

/*				$mail->From     = "info@31squares.com";
				$mail->FromName = "31squares.com";
*/				
/*				$mail->From     = "info@primemotiontraining.com";
				$mail->FromName = "primemotiontraining.com";
*/		
		
		
//	$mail->AddAddress("aman.david@galaxyweblinks.in");

	$mail->AddAddress("bhushan.mahajan@galaxyweblinks.in");
	$mail->AddAddress("gwltesting1@outlook.com");	
    //$mail->AddAddress("priyankaagrgwl30.6@gmail.com");			
	//$mail->AddAddress("design.team@galaxyweblinks.co.in");
	//$mail->AddCC("gwltesting@yahoo.com");
//	$mail->AddCC("hameed.sheikh@galaxyweblinks.in");
//	$mail->AddCC("sabir710@hotmail.com");
	//$mail->AddCC("rani.sharda@nhls.com");
	//$mail->AddCC("testing.iphone7077@gmail.com");
	//$mail->AddCC("galaxyweblinksgwl@gmail.com");
	//$mail->AddCC("testqa.31s@gmail.com");
	//$mail->AddCC("jettspeter@gmail.com");
	//$mail->AddCC("iosdevice.gwl@gmail.com");
	//$mail->AddCC("johnson.holly100@gmail.com");
	//$mail->AddCC("harish.patidar@me.com");
	

//	$mail->AddCC("anshul.udapure@galaxyweblinks.in");
	
	
	
//	$mail->AddCC("sumit.kathuria@galaxyweblinks.co.uk");
	
//	$mail->AddCC("yashica.agrawal@galaxysoftware.co.in");
//	$mail->AddCC("abhishek.tiwari@galaxyweblinks.co.in");
//	$mail->AddCC("abhishek.sharma@galaxyweblinks.co.uk");
//	$mail->AddCC("shubham.jain@galaxyweblinks.in");
	
//	$mail->AddCC("arif4985@hotmail.com");
//	$mail->AddCC("jain.vikram@gmail.com");

// 	$mail->AddAddress("daniellehutchens7@gmail.com");
//	$mail->AddAddress("arif.hussain@galaxyweblinks.in");
//	$mail->AddCC("varun@galaxyweblinks.com");
//	$mail->AddCC("myles@galaxyweblinks.com");
//	$mail->AddCC("ashok.patel@galaxyweblinks.in");
//	$mail->AddCC("rani.sharda@galaxyweblinks.com");


//	$mail->AddAddress("arif.hussain@galaxyweblinks.in");
//	$mail->AddCC("anand@galaxyweblinks.com");
//  $mail->AddAddress("narendra.khajja@galaxyweblinks.com","wellnesia");
	
//	$mail->AddBCC("sabirsalim.khan@galaxyweblinks.co.in");


	$mail->WordWrap = 50;         
	
	
	
	$mail->IsHTML(true);                              
	$mail->Subject  =  'mcp-new';
	$mail->Body     =  file_get_contents('mct.html');
	$mail->AltBody  =  "";



	if(!$mail->Send())
	{														  
			$msg="Error";
	}else
	{
			$msg="Email has been sent.";
	}
 }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Wellnesia Home Page</title>
<link href="landing/css/style.css" type="text/css" rel="stylesheet" media="all" />
<!--[if IE 9]>
<style type="text/css">.btn_bg{padding:8px 0 8px;}</style>

<![endif]-->
<script>
function chekEmail()
{
	document.getElementById('err_msg').innerHTML = '';
	email=document.getElementById("email").value;
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(email))
		return true;
	else{
		document.getElementById('err_msg').innerHTML = 'Please input a valid email address';
		return false;;
	}
}
</script>
</head>
<body>
<div id="container">
<div id="main_container">
<div id="header">
<div class="logo"><a href="#"><img src="landing/images/logo.png" /></a></div>
<div class="coming_soon_txt">COMING SOON !</div>
</div>
<div class="mid_container">
<div style="float:left">
<div class="text">Enter your email to join our invite list new</div>
<form name="form1" id="form1" action="" method="post" onsubmit="return chekEmail();">
<input type="text" class="input_bg" name="email" id="email"  value="Enter your email address here" onfocus="if (this.value == 'Enter your email address here') {this.value = '';}" onblur="if (this.value == 'Enter your email address here') {this.value = 'Enter your email address here';}" />
<input type="submit" value="SUBMIT" class="btn_bg" />
</form>
</div>
<div style="margin-left: 20px;color:#FF0000" id="err_msg"><?php echo $msg; ?></div>
<div class="blog">
<div class="blog_txt">FOLLOW OUR BLOG </div>
<div class="blg_img"><a target="_blank" href="http://twitter.com/Wellnesia"><img src="landing/images/twt.png" /></a></div>
<div class="blg_img"><a target="_blank" href="http://www.facebook.com/wellnesia"><img src="landing/images/fb.png" /></a></div>
</div>
</div>
</div>

<div class="footer">
<div class="footer_content">for more details, please join our invite list and learn about our exclusive offers</div>
</div>
<div class="shadow"><img src="landing/images/shadow.png" /></div>
</div>
</body>
</html>
