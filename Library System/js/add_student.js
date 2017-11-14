$(function(){
    //for Library Id
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
    $sql = "SELECT AUTO_INCREMENT FROM information_schema.tables WHERE table_name = 'tbl_student' AND table_schema = DATABASE()";
    cn.query($sql,function(error,results,fields){
      if(error) throw error;
      no=results[0].AUTO_INCREMENT;
      $("#lid").attr("value",""+ no +"");
    });

    var td=new Date();
    var dd = td.getDate(),mm=td.getMonth()+1,yy=td.getFullYear() + 1;
  
    if(dd<10){dd='0'+dd;}
    if(mm<10){mm='0'+mm;}

    document.getElementById("valid").value=dd+"/"+mm+"/"+yy;

    $("#stdyear").change(function(){
        var yr=$("#stdyear").val();
        if(yr == 'FY')
        {
                $("#stdsem1").text("Sem 1");
                $("#stdsem2").text("Sem 2");
                $("input[id=sem2]").prop('value','2');
                $("input[id=sem1]").prop('value','1');
        }
        else if(yr == 'SY')
        {
                $("#stdsem1").text("Sem 3");
                $("#stdsem2").text("Sem 4");
                $("input[id=sem2]").prop('value','4');
                $("input[id=sem1]").prop('value','3');
        }
        else if(yr == 'TY')
        {
                $("#stdsem1").text("Sem 5");
                $("#stdsem2").text("Sem 6");
                $("input[id=sem2]").prop('value','6');       
                $("input[id=sem1]").prop('value','5');
        }
    });

    $("#refre").click(function(){
        window.location.href="./add_stud.html";
    });
});
//for validation of update form
function check(msg,marg)
{
        $("#alert").fadeIn(1000);
        $("#alert").removeClass("hidden");  
        $("#errmsg").text(msg);
        $("#alert").css("margin-top",marg)
}
document.addEventListener("focusout",function(e){
        if(e.target.id == "cont")
        {
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                        host: "localhost",
                        user: "root",
                        password: null,
                        database: "db_library"
                });
                cn.connect();
                
                $sql = "Select Sname from tbl_student where Scont='" + $("#cont").val() + "'";
                
                cn.query($sql,function(error,results){
                        
                        if(results[0].Sname != '')
                        {
                                check("Contact Number Allready Exist!! Enter Unique Number.",'430px');
                                $("#cont").val("");
                        }
                });
                cn.end();
        }
});
function validate()
{      
        if($("#sname").val() == '' || $("#sname").val().length >20)
                check("User Name Is Not Valid!!","130px");
        else if($("#valid").val() == '')
                check("Validity Date Is Not Valid!!","180px");
        else if($("#stdyear").val() == '')
                check("Student Year Is Not Valid!!","230px");
        else if($("#stdsem").val() == '')
                check("Student Semester Is Not Valid!!","280px");
        else if($("#stdlist").val() == '')
                check("Student Stream Is Not Valid!!","330px");
        else if($("#stddiv").val() == '')
                check("Student Division Is Not Valid!!","380px");
        else if($("#cont").val() == '' || ($("#cont").val().length) != 10 || isNaN($("#cont").val()))
                check("Mobile Number Is Not Valid!!","430px");
        else
        {       
                var sm=$('input[type=radio][name=stdsem]:checked').val();
                var d = $("#valid").val();
                
                flag=0,
                month = d.substr(3,2),
                day = d.substr(0,2),
                year = d.substr(6,4);
        
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                
                
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: null,
                  database: "db_library"
                });

                cn.connect();
                $sql = "INSERT INTO tbl_student(Sadid,Schid,Sname,Svalid,Sstd,Ssem,Sdiv,Scont,Sisscnt,Spandpay,Sstatus) VALUES ("+ localStorage.getItem("uid") +","+ localStorage.getItem("uid") +",'"+ $("#sname").val() +"','"+ [year, month, day].join('-') +"','"+ $("#stdyear").val()+$("#stdlist").val() +"','"+ sm +"','"+ $("#stddiv").val() +"','"+ $("#cont").val() +"',0,0,1)";
                cn.query($sql,function(error,results,fields){

                });
            cn.end();
            $('#myModal').modal('show');
            document.getElementById("frm").reset();
        }
}