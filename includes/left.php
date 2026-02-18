<div class="grid6">
<div class="product-list ui-corner-all">
<a href="https://goodboxes.in/online-enquiry.php"><h1 class="site-color bg-grey">Enquiry</h1></a>
<!--table border="0" cellspacing="5" cellpadding="0" width="184"  id="table6" >
      <form action="./mail-right.php" method="post" name="cont" onSubmit="return 
        <tr>
          <td width="94%" background="images/box_mid.jpg"><p align="center" style="text-decoration: none; margin-left:5px">
              <input name="Name"  onfocus="focme(this,'Name')" onBlur="callme(this,'Name')" value="Name" size="28" style="border: 1px solid #C0C0C0; font-family:Verdana; font-size:8pt; float:left">
          </td>
        </tr>
        <tr>
          <td width="94%" background="images/box_mid.jpg"><p align="center" style="text-decoration: none; margin-left:5px">
              <input  onfocus="focme(this,'Mobile No.')" onBlur="callme(this,'Mobile No.')" value="Mobile No." name="Mobile_No" id="Mobile_No" size="28" style="border: 1px solid #C0C0C0; font-family:Verdana; font-size:8pt; float:left">
          </td>
        </tr>
        <tr>
          <td width="94%" background="images/box_mid.jpg"><p align="center" style="text-decoration: none; margin-left:5px">
              <input  onfocus="focme(this,'Email Id.')" onBlur="callme(this,'Email Id.')" value="Email Id." name="EMail" size="28" style="border: 1px solid #C0C0C0; font-family:Verdana; font-size:8pt; float:left">
          </td>
        </tr>
        <tr>
          <td width="94%"  align="right" background="images/box_mid.jpg"><p align="left" style="text-decoration: none; margin-left:5px">
              <textarea rows="5"onfocus="focme(this,'Message')" onblur="callme(this,'Message')" name="Message"  value="Message"  cols="30" style="height:48;border: 1px solid #C0C0C0; font-family:Verdana; font-size:8pt; width:185px">Message</textarea></p>
          </td>
        </tr>
		<tr><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr>
          <td width="94%" background="images/box_mid.jpg">
           <div align="center">   <input type="submit" value="Send" name="Submit"  class="button bg-color1" ></div>
          </td>
        </tr>
        
      </form>
    </table-->
</div>
				


<div class="space"></div>
</div>
<!--div class="product-list ui-corner-all">
</div>

<div class="space"></div!-->

<script>
function ValidateNo( NumStr, String )
{
	for( var Idx = 0; Idx < NumStr.length; Idx ++ )
	{
		 var Char = NumStr.charAt( Idx );
		 var Match = false;

		for( var Idx1 = 0; Idx1 < String.length; Idx1 ++)
		{
		 if( Char == String.charAt( Idx1 ) )
		 Match = true;
		}

		if ( !Match )
		return false;
 	}
   	return true;
}

function callme(a,b)
{
if (a.value=='')
{a.value=b};
}
 function focme(a,b)
{
if (a.value==b)
{a.value=''};
}
 function validate()
 {if ((document.cont.Name.value=='')||(document.cont.Name.value=='Name'))
 {alert('Please enter the Name');
  document.cont.Name.focus()
 return false;}
 if ((document.cont.Mobile_No.value=='')||(document.cont.Mobile_No.value=='Mobile No.'))
 {alert('Please enter the Mobile No.');
  document.cont.Mobile_No.focus()
 return false;}
 
  if (!ValidateNo(document.getElementById('Mobile_No').value,'0123456789')) 
	{		 
	   alert("Please enter the Digits.");
	   document.cont.Mobile_No.focus();
	   return false;
	} 

 if ((document.cont.EMail.value=='')||(document.cont.EMail.value=='Email Id.'))
 {alert('Please enter the EMail');
  document.cont.EMail.focus()
 return false;}
 elem=document.cont.EMail;
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){}else{
		alert('Please enter the valid Email Id.');
		elem.focus();
		return false;
	}

  if ((document.cont.Message.value=='')||(document.cont.Message.value=='Message'))
 {alert('Please enter the Message');
  document.cont.Message.focus()
 return false;}
 }
</script>