$("document").ready(function(){

        $("#bdate").datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true
        });

        $("#refre").click(function(){
                window.location.href="./add_subaddmin.html";
        });
});
document.addEventListener("click",function(e){
        if(e.target.id == "showpass")
        {
                if($('#showpass').hasClass('ion-eye-disabled') == true)
                {
                        $('#showpass').removeClass('ion-eye-disabled');
                        $('#showpass').addClass('ion-eye');
                        $('#passwd').attr('type','text');
                }
                else
                {
                        $('#showpass').addClass('ion-eye-disabled');
                        $('#showpass').removeClass ('ion-eye');
                        $('#passwd').attr('type','password');
                }
        }
        if(e.target.id == "showcpass")
        {
                if($('#showcpass').hasClass('ion-eye-disabled') == true)
                {
                        $('#showcpass').removeClass('ion-eye-disabled');
                        $('#showcpass').addClass('ion-eye');
                        $('#cpasswd').attr('type','text');
                }
                else
                {
                        $('#showcpass').addClass('ion-eye-disabled');
                        $('#showcpass').removeClass ('ion-eye');
                        $('#cpasswd').attr('type','password');
                }
        }
});
//for max Id
    var no;
    var mysql = require("mysql");
    var cn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: null,
      database: "db_library"
    });
    
    cn.connect();
    
    var i;
    $sql = "SELECT AUTO_INCREMENT FROM information_schema.tables WHERE table_name = 'tbl_operator' AND table_schema = DATABASE()";
    cn.query($sql,function(error,results,fields){
      if(error) throw error;
      no=results[0].AUTO_INCREMENT;
      $("#uno").attr("value",""+ no +"");
    });

cn.end();

function check(msg,marg)
{
        $("#alert").fadeIn(1000);
        $("#alert").removeClass("hidden");  
        $("#errmsg").text(msg);
        $("#alert").css("margin-top",marg)
}
//focus out email validation
document.addEventListener("focusout",function(e){

        if(e.target.id == "oemail")
        {
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                        host: "localhost",
                        user: "root",
                        password: null,
                        database: "db_library"
                });
                cn.connect();
                
                $sql = "Select Oname id from tbl_operator where Oemail='" + $("#oemail").val() + "'";
                
                cn.query($sql,function(error,results){
                        
                        if(results[0].Oname != '')
                        {
                                check("Email Allready Exist!! Enter Unique Email Id",'330px');
                                $("#oemail").val("");
                        }
                });
                cn.end();
        }
        if(e.target.id == "mno")
        {
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                        host: "localhost",
                        user: "root",
                        password: null,
                        database: "db_library"
                });
                cn.connect();
                
                $sql = "Select Oname from tbl_operator where Omono='" + $("#mno").val() + "'";
                
                cn.query($sql,function(error,results){
                        
                        if(results[0].Oname != '')
                        {
                                check("Mobile Number Allready Exist!! Enter Unique Number",'280px');
                                $("#mno").val("");
                        }
                });
                cn.end();
        }
});
//form validation of Add New Subadmin
function validate()
{       var gend = $('input[type=radio][name=gender]:checked').val();
        var email = $("#oemail").val();
        var regex = /^\w+([-+.']\ w+)*@\w+([-. ]\w+)*\.\w+([-. ]\w+)*$/

        if($("#urname").val() == '' || $("#urname").val().length >50)
                check("User Name Is Not Valid!!",'130px');
        else if(gend == null)
                check("Gender Is Not Valid!!",'180px');
        else if($("#bdate").val() == '')
                check("Birthdate Is Not Valid!!",'230px');
        else if($("#mno").val() == '' || ($("#mno").val().length) != 10 || isNaN($("#mno").val()))
                check("Mobile Number Is Not Valid!!",'280px');
        else if(regex.test(email) == false )
                check("Email Is Not Valid!!",'330px');
        else if($("#passwd").val() == '' || $("#passwd").val().length < 4 || $("#passwd").val().length >= 13)
                check("Passwordr Is Not Valid Or Password Between 5 to 12 Chars!!",'380px');
        else if($("#cpasswd").val() != $("#passwd").val())
                check("Password Does Not Match!!",'430px');
        else
        {
                var date = $("#bdate").datepicker('getDate','mm/dd/yy');
                var d = new Date(date),
                flag=0,
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                
                var dat = [year, month, day].join('-');
                
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: null,
                  database: "db_library"
                });

                cn.connect();
                $sql = "INSERT INTO tbl_operator(Oname,Ogender,Obdate,Omono,Oemail,Opasswd,Ostatus) VALUES ('"+ $("#urname").val() +"','"+ gend +"','"+ [year, month, day].join('-') +"','"+ $("#mno").val() +"','"+ email +"','"+ $("#passwd").val() +"',1)";
                cn.query($sql,function(error,results,fields){

                });
            cn.end();
            $('#myModal').modal('show');
            document.getElementById("frm").reset();
        }
}