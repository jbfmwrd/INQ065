
function customize() {

  // Customize Sign-On Screen
  if (detectScreen('D_1_22','             Sign On', 
                   'D_2_47','System  . . . . . :',
                   'D_3_47','Subsystem . . . . :',
                   'D_4_47','Display . . . . . :')) {
    hideElements('D_1_22', 'D_2_47', 'D_3_47', 'D_4_47', 'D_2_69', 'D_3_69', 'D_4_69', 
                 'D_8_16', 'D_9_16', 'D_10_16', 'I_8_52', 'I_9_52', 'I_10_52', 'D_24_39');
    changeElementValue('D_6_16', '&nbsp;&nbsp;&nbsp;&nbsp;User:');
    changeElementClass('D_6_16', 'BigText');
    changeElementValue('D_7_16', 'Password:');
    changeElementClass('D_7_16', 'BigText');
    setDOMAttribute("D_7_16", "transparent", true);   
    setDOMAttribute("D_6_16", "transparent", true);

    var loginButton = newElement(11, 42, 'button', 'Login', 'login_button');
    loginButton.onclick = function() { pressKey('Enter') };
    moveElement('quit_button', 11, 50);
    changeElementValue('quit_button', 'Exit');
    
    getObj('D_6_16').style.top="157px"; // User Label
    getObj('D_6_16').style.left="63px"
    getObj('D_7_16').style.top="196px"; // Password Label
    getObj('D_7_16').style.left="63px"
    getObj('I_6_52').style.top="154px"; // User Textbox
    getObj('I_6_52').style.left="335px";
    getObj('I_7_52').style.top="193px"; // Password Textbox
    getObj('I_7_52').style.left="335px";
    
    var backdrop = newElement(5, 15, "img", "/profoundui/userdata/genie skins/Fox/login1.jpg", "backdrop_image");
    backdrop.style.zIndex = 5;
    
    var msg = get('D_24_0');
    if (msg!=='' && pui.genie.alertMsg==='') {
      pui.genie.alertMsg = msg;
      if (pui.genie.alertMsg.substr(0,3) == 'CPF') pui.genie.alertMsg = pui.genie.alertMsg.substr(8);
      if (pui.genie.alertMsg.substr(0,1) == '-') pui.genie.alertMsg = pui.genie.alertMsg.substr(1);
    }
    hideElement('D_24_0');        
  }
  /*
  // Customize 132x27 mode
  if (pui.genie.displaySize==132 && !pui.genie.config.useAjax) {
    pui.genie.middleDiv.style.height = "640px";
    getObj("5250").style.position = "absolute";
    var position = (screen.width - 1060) / 2;
    if (position < 0) position = 0;
    getObj("5250").style.left = position + "px";
  }
  else {
    if (pui.genie.middleDiv !== null) {
      pui.genie.middleDiv.style.height = "";
      pui.genie.middleDiv.style.width = "";
      getObj("5250").style.position = "relative";
      getObj("5250").style.left = "";
      getObj("5250").style.width = "";
    }
  }
  */
  
}

// Auto Update Left-Align - JB
function resizeArea()
{
  //Get Variables
  if (pui.genie.middleDiv !== null) {
    var div5250 = getObj("5250");
  }
  if (pui.genie.window1 !== null){
	var win1 = get("window1");
  }
  
  
  //Update Center of Window
  if (div5250 !== null) {
    var windowWidth = pui.getWindowSize().width;
    
    if (pui.genie.displaySize == 132) {
      pui.genie.middleDiv.style.height = "640px";
      var position = (windowWidth - 950) / 2;
      if (position < 180) {
        position = 180
      }
      div5250.style.left = position + "px";
    }
    else {
      pui.genie.middleDiv.style.height = "560px";
      div5250.style.position = "absolute";
      var position2 = (windowWidth - 620) / 2;
      if (position2 < 180) {
        position2 = 180;
      }
      div5250.style.left = position2 + "px";
    }
		
	//Handle INQ065t Accounts Recievable Information    
    if (win1 !== null){
	  if (pui.genie.displaySize == 132) {
        win1.style.left = position - 100 + "px";
      }
      else {
        win1.style.left = position2 - 100 + "px";
      }
    }
  }
  
  
}
  
//Function added for Purchase order form
 function address_selected(parm) {
  changeElementValue(I_14_12,parm.POSUP2);
  changeElementValue(I_15_12,parm.POSUP3);
  changeElementValue(I_16_12,parm.POSUP4);
}
// Function Added for Eng Menu
function subdiv_selected(parm) {
  changeElementValue(I_4_21,parm.SBNAME);
}
// Function Added for Eng Menu sub
function subdiv1_selected(parm) {
  changeElementValue(I_5_18,parm.SBNAME);
}
 // Function Added for Eng Menu sub Unit
function subunt_selected(parm) {
  changeElementValue(I_3_28,parm.SPUNIT);
}
 
