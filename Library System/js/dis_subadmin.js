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
function display(msg)
{
        var mysql = require("mysql");
        var cn = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: null,
                database: "db_library"
        });
        cn.connect();
        
        if(msg == "none")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Obdate,'%d-%m-%Y') As date from tbl_operator";
        }
        else if(msg == "name")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Obdate,'%d-%m-%Y') As date from tbl_operator where Oname Like '%"+ $("#srcname").val() +"%'";
        }
        else if(msg == "id")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Obdate,'%d-%m-%Y') As date from tbl_operator where Oid Like '%"+ $("#srcid").val() +"%'";
        }
        else if(msg == "block")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Obdate,'%d-%m-%Y') As date from tbl_operator where Ostatus=0";
        }
        else if(msg == "unblock")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Obdate,'%d-%m-%Y') As date from tbl_operator where Ostatus=1";
        }
        cn.query($sql,function(error,results){

                if(results.length == 0)
                {
                        $("#data > h2").remove();
                        $("#data").append("<h2 align='center' style='color:rgba(201, 48, 44, 0.64);margin-top:20px;'>No Record Found</h2>");
                }
                else
                {
                        $("#data > h2").remove();
                        for(var i=0;i<results.length;i++)
                        {
                                if(results[i].Ostatus == 1)
                                {
                                        $("#data").append("<tr><td style='width: 7%;'>"+ results[i].Oid +"</td><td style='width: 13.3%;'>"+ results[i].Oname +"</td><td style='width: 8.2%;'>"+ results[i].Ogender +"</td><td style='width: 10.2%;'>"+ results[i].date +"</td><td style='width: 10.1%;'>"+ results[i].Omono +"</td><td style='width: 19.8%;'>"+ results[i].Oemail +"</td><td style='width:13%'>"+ results[i].Opasswd +"</td><td style='width: auto;'><input type='button' class='btn btn-primary btn-md' onclick='change("+ results[i].Oid +")' style='width:100px;' value='Change'></td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='del("+ results[i].Oid +","+ results[i].Ostatus +")' style='width:100px;' value='Block'></td></tr>");
                                }
                                else
                                {
                                        $("#data").append("<tr><td style='width: 7%;'>"+ results[i].Oid +"</td><td style='width: 13.3%;'>"+ results[i].Oname +"</td><td style='width: 8.2%;'>"+ results[i].Ogender +"</td><td style='width: 10.2%;'>"+ results[i].date +"</td><td style='width: 10.1%;'>"+ results[i].Omono +"</td><td style='width: 19.8%;'>"+ results[i].Oemail +"</td><td style='width:13%'>"+ results[i].Opasswd +"</td><td style='width: auto;'><input type='button' disabled class='btn btn-primary btn-md' onclick='change("+ results[i].Oid +")' style='width:100px;' value='Change'></td><td style='width: auto;'><input type='button' class='btn btn-success btn-md' onclick='del("+ results[i].Oid +","+ results[i].Ostatus +")' style='width:100px;' value='Unblock'></td></tr>");
                                }
                        }
                }
                
        });
        cn.end();

        $("#data").hide();
        $("#data").fadeIn(500);
}
//display all the Sub Admin
$("Document").ready(function(){

        display("none");

        //search by name operation
        $("#srcname").keyup(function(){
                display("name");
        });
        $("#srcid").keyup(function(){
                display("id");
        });

        $("#stdyear").change(function(){
                if($("#stdyear").val() == "sid")
                {
                        $("#srid").removeClass("hidden");
                        $("#srcnm").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                        display("none");
                }
                else if($("#stdyear").val() == "sname")
                {
                        $("#srid").addClass("hidden");
                        $("#srcnm").removeClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                        display("none");
                }
                else if($("#stdyear").val() == "block")
                {
                        $("#srcnm").addClass("hidden");
                        $("#srid").addClass("hidden");
                        $("#block").removeClass("hidden");
                        $("#unblock").addClass("hidden");
                        display("block");
                }
                else if($("#stdyear").val() == "unblock")
                {
                        $("#srcnm").addClass("hidden");
                        $("#srid").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").removeClass("hidden");
                        display("unblock");
                }
        });

        $("#srcid").keypress(function(e){
                
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        $("#srciderr").addClass("has-error");
                        $("#srcid").attr("placeholder","Only Number Allowed");
                        e.preventDefault();
                }
                else
                {
                        $("#srciderr").removeClass("has-error");
                        $("#srcid").attr("placeholder","Search By User Id");
                }
        });
        $("#upsuccess").click(function(){
                
                $('#myModalchange').modal('hide');
                display("none");
        });

        $("#bdate").datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true
        });

        $("#delsucces").click(function(){
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: null,
                  database: "db_library"
                });

                cn.connect();
                if($("#delosts").val() == 1)
                {
                        $sql = "Update tbl_operator Set Ostatus=0 where Oid="+ $("#deloid").val() +"";
                        $("#updeldiv > h4").remove();
                        $("#updeldiv").append("<h4 class='alert alert-danger' align='center' id='updelmsg'></h4>");
                        $("#updelmsg").text("Sub Admin Successfully Block.");
                }
                else
                {
                        $sql = "Update tbl_operator Set Ostatus=1 where Oid="+ $("#deloid").val() +"";
                        $("#updeldiv > h4").remove();
                        $("#updeldiv").append("<h4 class='alert alert-success' align='center' id='updelmsg'></h4>");
                        $("#updelmsg").text("Sub Admin Successfully Unblock.");
                }
                cn.query($sql,function(error,results,fields){

                });
                cn.end();
                $('#myModalup').modal('show');
        });
});

function change(id)
{
            
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
            $sql = "Select *,DATE_FORMAT(Obdate, '%m/%d/%Y') As date from tbl_operator where Ostatus=1 And Oid="+ id +"";
            cn.query($sql,function(error,results,fields){
            if(error) throw error;
                document.getElementById("uno").value=results[0].Oid;    
                
                document.getElementById("urname").value=results[0].Oname;
                
                if(results[0].Ogender == "Male")
                {
                        $('input[type=radio][name=gender][value=Male]').prop("checked",true);
                }
                else if(results[0].Ogender == "Female")
                {
                        $('input[type=radio][name=gender][value=Female]').prop("checked",true);
                }

                $("#bdate").datepicker('setDate',new Date(results[0].date));
                document.getElementById("mno").value=results[0].Omono;
                document.getElementById("oemail").value=results[0].Oemail;
                document.getElementById("passwd").value=results[0].Opasswd;
                document.getElementById("cpasswd").value=results[0].Opasswd;
            });
    
            cn.end();
            $('#myModalchange').modal('show');
}
function del(id,status)
{     
        document.getElementById("deloid").value=id;
        document.getElementById("delosts").value=status;
        
        $("#delrec > h4").remove();
        if(status == 1)
        {
                $("#delrec").append("<h4 align='center'><span class='alert alert-danger' id='delrec'>Are You Want To Block The Record No  "+ id +" ?</span></h4>");
        }
        else
        {
                $("#delrec").append("<h4 align='center'><span class='alert alert-success' id='delrec'>Are You Want To Unblock The Record No "+ id +" ?</span></h4>");
        }
        $('#myModaldel').modal('show');
}
//for validation of update form
function check(msg,marg)
{
        $("#alert").fadeIn(1000);
        $("#alert").removeClass("hidden");  
        $("#errmsg").text(msg);
        $("#alert").css("margin-top",marg)
        $('#myModalerr').modal('show');
}
function validate()
{     
        var gend = $('input[type=radio][name=gender]:checked').val();
        var email = $("#oemail").val();
        var regex = /^\w+([-+.']\ w+)*@\w+([-. ]\w+)*\.\w+([-. ]\w+)*$/

        if($("#urname").val() == '' || $("#urname").val().length >50)
                check("User Name Is Not Valid!!");
        else if(gend == null)
                check("Gender Is Not Valid!!");
        else if($("#bdate").val() == '')
                check("Birthdate Is Not Valid!!");
        else if($("#mno").val() == '' || ($("#mno").val().length) != 10 || isNaN($("#mno").val()))
                check("Mobile Number Is Not Valid!!");
        else if(regex.test(email) == false )
                check("Email Is Not Valid!!");
        else if($("#passwd").val() == '' || $("#passwd").val().length < 4 || $("#passwd").val().length >= 13)
                check("Passwordr Is Not Valid Or Password Between 5 to 12 Chars!!");
        else if($("#cpasswd").val() != $("#passwd").val())
                check("Password Does Not Match!!");
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
                $sql = "Update tbl_operator Set Oname='"+ $("#urname").val() +"',Ogender='"+ gend +"',Obdate='"+ dat +"',Omono='"+ $("#mno").val() +"',Oemail='"+ email +"',Opasswd='"+ $("#passwd").val() +"' where Oid="+ $("#uno").val() +"";
                cn.query($sql,function(error,results,fields){

                });
            cn.end();
            $("#updeldiv > h4").remove();
            $("#updeldiv").append("<h4 class='alert alert-success' align='center' id='updelmsg'></h4>");
            $("#updelmsg").text("Record Successfully Updated.");
            $('#myModalup').modal('show');
            document.getElementById("frm").reset();
        }
}