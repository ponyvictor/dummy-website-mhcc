/*
JICS THEME SCRIPT - CBU
*/
// Execute on DOM Ready
$(function(){
  
 $("#errorMessage:empty").remove();
  // bgrotate();
  // csPortletHeaders(); 
  sideBarDropDowns()
  //setLoginFormVisuals();
  hidefoot();
  //quicklinkexpand();
  loginBox();
   Tabs();
   error();
   //sidebarexpand();
}); 

// Execute on Window Resize
$(window).resize(function(){
  Tabs();
});


/*-------------------Function Definitions----------------------*/

function error(){
					
			if($("#errorMessage").length){
			$("#errorMessage").insertAfter($("#sideBar"))
			};}





function loginBox() {
    var loginBox = $('<div id="loginBox"></div>');
	$("#userWelcome ul").before('<br />');
	$(".searchPanel .sideSection").removeClass("sideSection");
    loginBox.append($('#welcomeBackBar'));
    $('#masthead').prepend(loginBox);
	$("label[for='password']").before($("label[for='userName']"));
	$('#lnkForgot').insertAfter($("label[for='password']"));
	$('#lnkForgot').append('<br />');
	$("#password").before($("#userName"));
	
	loginBox.append($('.searchPanel'));
	/*$("#userLogin").wrap("<div id='userLoginBox'></div>");
	$("#userLoginBox").insertBefore("#searchAutoCompleteResults");*/

}

function bgrotate() {
    // Get a random number between 1
	var images = ['bg1.jpg'];
	$('#masthead').css({'background-image': 'url(http://cin-kaiserm/ICSFileServer/Themes/CBU/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
}
function setLoginFormVisuals() {
	if ($("#userLogin").length) {
		/*$('#userLogin').append('<a href="https://accounts.park.edu/idm/" class="forgetpass" target="_blank" style="font-size: 60%; display:block; height:auto; width: 80px; margin-left: 148px; margin-top: 1px;">Forgot Password?</a>');*/
		var $pwd = $('#password');
		if ($('#password_fake').length == 0) {
			$pwd.hide().after('<input id="password_fake" value="Password" style="color: #777;" />');
		}
		$('#userName')
			.val('Username')
			.css({'color': '#777'})
			.keypress(function() {
				if (this.value == 'Username') {
					$(this).val('')
						.css({'color':'#000', 'font-style':'normal'});
				}
			})
			.blur(function () {
				if (this.value == '') {
					this.value = 'Username';
					$(this).css({'color': '#777'});
				}
			})
			.select();
		$('#password_fake').focus(function() {
			$('#password').show().focus();
			$('#password_fake').hide();
		});
		$pwd.blur(function() {
			if ($('#password').val().length == 0) {
				$('#password').hide();
				$('#password_fake').show();
			}
		});
		$('#btnLogin')
			.mousedown(function() {
				$(this).addClass('loginDown');
			})
			.mouseup(function() {
				$(this).removeClass('loginDown');
			})
			.mouseout(function() {
				$(this).removeClass('loginDown');
			});
	}
}
function MoveError(){
}


function csPortletHeaders() {
  $('.pHead div').hide();
  // Show Portlet Head icons on mouseover
  $(".pHead").mouseover(function(){$("div",this).show();}).mouseout(function(){$("div",this).hide();});
  // Move edit icon to Portlet Head
  $("div[id*=divEditOrAdd]").each(function(){$(this).appendTo($(this).closest('.portlet').find('.pHead div'));$(this).css({'display':'block','margin':'0 32px 0 0','width':'100px'})});
}

function Tabs() {
  csTabOverflow();
  $('#more').mouseenter(function(){showMore();});
  $('#more').mouseleave(function(){hideMore();});
}

function showMore(){
  $('#moreList').css('display','block');
}

function hideMore(){
	
  $('#moreList').css('display','none');
}

function hidefoot(){
	$('#foot').remove();
}

function csTabOverflow()
{
  try
  {
    //Move all tabs to tab container
    $('#moreList li').each(function(){
      $('#headerTabs ul').append($(this));
    });
    
  	$('#moreList').empty();
	$('#more').remove();
    //Check width and move as needed
    tabTotalWidth = 0;
	var moreList= $('<ul id="moreList" />');
    var flag=0;
	$('#headerTabs ul li').each(function(){
      tabTotalWidth += $(this).width();
	  tabTotalWidth += 30;
      if (tabTotalWidth+100>($('#headerTabs').width()))
      {
		//$(this).removeClass('selected'); //Un-Comment this if you don't want to highlight a drop-down if it's selected.
		moreList.append($(this));
		flag++;
      }
    });
	//Now that we have a UL object that is all full of our overlow tabs, and we've left room for a "MORE" Option, lets append another <li> to the headerTabs UL and then append our newly built submenu to this
	if (flag > 0){
		$('#more').css('display','block');
		$('#headerTabs ul').append("<li id='more'><a>more</a></li>");
 		$('#more').append(moreList);
		$('#moreList').css('display','none');
	}
  } catch(e){}
}
function sideBarDropDowns() {
  if ($('li.currentPage ul').length>0){ 
    $('li.currentPage').prepend('<a id="xpndPrtlts" href="javascript:void(0);" title="View Portlets" >view</a>');
    $('#xpndPrtlts').click(function(){
      $('li.currentPage ul').toggle();
      if($('li.currentPage ul').is(':visible')){
        $(this).addClass('expanded');
      }else{
       $(this).removeClass('expanded');      
    }
    });  
    //If portlet is clicked, expand portlet list
    $('li.currentPage ul li a').each(function(){
      if (location.href.indexOf($(this).attr('href'),0)>-1){
        $('li.currentPage ul').show();
        $(this).addClass('selected');
      }else{
     	// $('li.currentPage ul').hide().removeClass('expanded');
      }
    }
	);

  }
}