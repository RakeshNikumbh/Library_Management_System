$(document).ready(function(){
  
  //Settings Of background color or Image set through selection
  if(typeof(localStorage.getItem("bgimg")) != 'undefined')
    {
      $("body").css({"background-image":"url('" + localStorage.getItem("bgimg") + "')","background-size":"cover"});
    }

  if(typeof(localStorage.getItem("bgcolor")) != 'undefined')
    {
      $("body").css("background-color",localStorage.getItem('bgcolor'));
    }

  //show hide password
  $('#shpw').click(function(){
    if($('#shpw').hasClass('ion-eye-disabled') == true)
    {
      $('#shpw').removeClass('ion-eye-disabled');
      $('#shpw').addClass('ion-eye');
      $('#passwd').attr('type','text');
    }
    else
    {
      $('#shpw').addClass('ion-eye-disabled');
      $('#shpw').removeClass ('ion-eye');
      $('#passwd').attr('type','password');
    }
  });
});

//background color or Image set through selection
document.addEventListener("change",function(e){
  
    if(event.target.id == "bgimg")
    {
      chngbgimg($("#bgimg").val());
    }

    function changebg(ul)
    {
      localStorage.removeItem("bgcolor");
      $("body").css("background-color","");
      localStorage.setItem("bgimg",ul);
      //$("body").css({"background-image":"url('" + localStorage.getItem("bgimg") + "')","background-size":"cover"});

      $('body')
      .animate({opacity: 0}, 'slow', function() {
          $(this)
              .css({"background-image": "url('" + localStorage.getItem("bgimg") + "')","background-size":"cover","transation":"0.5s"})
              .animate({opacity: 1},'slow');
      });
    }

    function chngbgimg(sel)
    {
      var clr = ['./Img/Backgrounds/AJstyles.jpg','./Img/Backgrounds/Brock Lesner.jpg','./Img/Backgrounds/Batista.jpg','./Img/Backgrounds/Roman Reigns.jpg','./Img/Backgrounds/Undertecker.jpg'];
      
        if(sel == 'Background-1')
        {
          changebg(clr[0]);
        }
        else if(sel == 'Background-2')
        {
          changebg(clr[1]);
        }
        else if(sel == 'Background-3')
        {
          changebg(clr[2]);
        }
        else if(sel == 'Background-4')
        {
          changebg(clr[3]);
        }
        else if(sel == 'Background-5')
        {
          changebg(clr[4]);
        }
        else if(sel == 'Plain')
        {
          changebg(null);
        }
    }
});

document.addEventListener("click",function(e){
  if(e.target.id == "Submit")
  {
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('passwd').value;
    var flag=0;
    //if all validation success then check in database
  
    var mysql = require("mysql");
    var cn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: null,
      database: "db_library"
    });
    cn.connect();
  
    $sql = "Select Oid,Oname from tbl_operator where Oemail='" + uname + "' And Opasswd='" + pass + "' And Ostatus=1";
    
    cn.query($sql,function(error,results){
      
      if(results[0].Oname != '')
      {
        flag=1;
        localStorage.setItem("uname",results[0].Oname);
        localStorage.setItem("uid",results[0].Oid);
        window.location.href="Home.html";
      }
    });
    cn.end();
    if(flag==0)
    {
      $("#alert").fadeIn(1000);
      $("#alert").removeClass("hidden");
      return false;
    }
  }
});