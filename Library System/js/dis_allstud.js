$(function(){

        display("none");

        //search by name operation
        $("#srcnm").keyup(function(){
                display("name");
        });
        $("#srcd").keyup(function(){
                display("id");
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

        $("#srcval").datepicker({
                format: 'mm/yyyy',
                startView:'years',
                minViewMode:'months',
                autoclose: true
        });

        $("#valid").datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true
        });

        $("#stdyear").change(function(){
                var src = $("#stdyear").val();
                if(src == "lid")
                {
                        display("none");
                        $("#srcid").removeClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#srcycd").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                }
                else if(src == "name")
                {
                        display("none");
                        $("#srcsname").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#srcycd").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                }
                else if(src == "valid")
                {
                        display("none");
                        $("#srcvalid").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcycd").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                }
                else if(src == "yrdgre")
                {
                        display("none");
                        $("#srcycd").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                }
                else if(src == "block")
                {
                        $("#srcycd").addClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#block").removeClass("hidden");
                        $("#unblock").addClass("hidden");
                        display("block");
                }
                else if(src == "unblock")
                {
                        $("#srcycd").addClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").removeClass("hidden");
                        display("unblock");
                }
                else if(src == "meadrec")
                {
                        $("#srcycd").addClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                        display("meadrec");
                }
                else if(src == "none")
                {
                        $("#srcycd").addClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#block").addClass("hidden");
                        $("#unblock").addClass("hidden");
                        display("none");
                }
        });
        $("#srcval").change(function(){
                if($("#srcval").val() == "")
                        display("none");
                else
                        display("validdate");
        });
        $("#svalrefresh").click(function(){
                $("#srcval").val("");
                display("none");
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
                        $sql = "Update tbl_student Set Sstatus=0,Schid="+localStorage.getItem("uid")+" where Lid="+ $("#deloid").val() +"";
                        $("#updeldiv > h4").remove();
                        $("#updeldiv").append("<h4 class='alert alert-danger' align='center' id='updelmsg'></h4>");
                        $("#updelmsg").text("Sub Admin Successfully Block.");
                        $("#"+ $("#deloid").val()).attr("disabled","disabled");
                }
                else if($("#delosts").val() == 0)
                {
                        $sql = "Update tbl_student Set Sstatus=1,Schid="+localStorage.getItem("uid")+" where Lid="+ $("#deloid").val() +"";
                        $("#updeldiv > h4").remove();
                        $("#updeldiv").append("<h4 class='alert alert-success' align='center' id='updelmsg'></h4>");
                        $("#updelmsg").text("Sub Admin Successfully Unblock.");
                        $("#"+ $("#deloid").val() +"").attr("enabled","enabled");
                }
                else if($("#delosts").val() == 2)
                {
                        $sql = "Update tbl_student Set Spandpay=0 where Lid="+ $("#deloid").val() +"";
                        cn.query($sql,function(error,results,fields){

                        });
                        $sql = "Insert Into tbl_payment(Lid,Pamt,Pdate,Pstatus) values("+ $("#deloid").val() +","+ localStorage.getItem("amt") +",CURDATE(),1)";
                        localStorage.removeItem("amt");
                        $("#updeldiv > h4").remove();
                        $("#updeldiv").append("<h4 class='alert alert-success' align='center' id='updelmsg'></h4>");
                        $("#updelmsg").text("Amount Successfully Paid.");
                        $("#"+ $("#deloid").val() +"").attr("enabled","enabled");
                }
                cn.query($sql,function(error,results,fields){

                });
                cn.end();
                $('#myModalup').modal('show');
                
        });
        //search for year div semester
        
        $(".srclist").css("display","none");
        $(".srcsem").css("display","none");
        $(".srcdiv").css("display","none");

        $("#srcyrr").change(function(){
                if($("#srcyrr").val() == "none")
                {
                        msgsrc();
                        $(".srclist").css("display","none");
                        $(".srcsem").css("display","none");
                        $(".srcdiv").css("display","none");
                }
                else
                {
                        $(".srclist").css("display","");
                        if($("#srclist").val() == "none")
                        {
                                display("srcyrd");
                        }
                        else
                        {
                                if($("#srcsem").val() == "none")
                                {
                                        $(".srclist").css("display","");
                                        display("srclst");
                                }
                                else
                                {
                                        if($("#srcdiv").val() == "none")
                                                display("srcsm");
                                        else
                                                display("srcdv");
                                }
                        }
                }
        });
        $("#srclist").change(function(){
                if($("#srclist").val() == "none")
                {
                        display("srcyrd");
                        $(".srcsem").css("display","none");
                        $(".srcdiv").css("display","none");
                }
                else
                {
                        $(".srcsem").css("display","");
                        if($("#srcsem").val() == "none")
                                display("srclst");
                        else
                        {
                                if($("#srcdiv").val() == "none")
                                        display("srcsm");
                                else
                                        display("srcdv");
                        }
                }
        });
        $("#srcsem").change(function(){
                if($("#srcsem").val() == "none")
                {
                        $(".srcdiv").css("display","none");
                        display("srclst");
                }
                else
                {
                        $(".srcdiv").css("display","");
                        if($("#srcdiv").val() == "none")
                                display("srcsm");
                        else
                                display("srcdv");
                }
        });
        $("#srcdiv").change(function(){
                if($("#srcdiv").val() == "none")
                        display("srcsm");
                else
                        display("srcdv");
        });
        $("#btnsrcyrd").click(function(){

                if($("#srcyrr").val() == "none")
                {
                        
                        $("#updeldiv > h4").remove();
                        $("#updeldiv").append("<h4 class='alert alert-danger' align='center' id='updelmsg'></h4>");
                        $("#updelmsg").text("Search Criteria Is Not Proper.");
        
                        $('#myModalup').modal('show');
                }
                else
                {
                        if($("#srclist").val() == "none")
                                display("srcyrd");
                        else
                        {
                                if($("#srcsem").val() == "none")
                                        display("srclst");
                                else
                                {
                                        if($("#srcdiv").val() == "none")
                                                display("srcsm");
                                        else
                                                display("srcdv");
                                }
                        }
                }
        });
        function msgsrc()
        {
                $("#updeldiv > h4").remove();
                $("#updeldiv").append("<h4 class='alert alert-danger' align='center' id='updelmsg'></h4>");
                $("#updelmsg").text("Search Criteria Is Not Proper.");
        
                $('#myModalup').modal('show');
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
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student";
        }
        else if(msg == "name")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sname Like '%"+ $("#srcnm").val() +"%'";
        }
        else if(msg == "id")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Lid Like '%"+ $("#srcd").val() +"%'";
        }
        else if(msg == "validdate")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where DATE_FORMAT(Svalid,'%m/%Y') = '"+ $("#srcval").val() +"'";
        }
        else if(msg == "srcyrd")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr").val() +"%'";
        }
        else if(msg == "srclst")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr").val() + $("#srclist").val() +"'";
        }
        else if(msg == "srcsm")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr").val() + $("#srclist").val() +"' And Ssem = "+ $("#srcsem").val() +"";
        }
        else if(msg == "srcdv")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr").val() + $("#srclist").val() +"' And Ssem = "+ $("#srcsem").val() +" And Sdiv = '"+ $("#srcdiv").val() +"'";
        }
        else if(msg == "block")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where  Sstatus=0";
        }
        else if(msg == "unblock")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstatus=1";
        }
        else if(msg == "meadrec")
        {
                $("#data > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sadid="+localStorage.getItem("uid")+"";
        }
        cn.query($sql,function(error,results){

                if(results.length == 0)
                {
                        $("#data > h2").remove();
                        $("#data").append("<h2 align='center' style='color:rgba(201, 48, 44, 0.64);margin-top:20px;'>No Record Found</h2>");
                }
                else
                {
                    var str="";
                        $("#data > h2").remove();
                        for(var i=0;i<results.length;i++)
                        {
                            str=(results[i].Sstd).substr(0,2);
                            var year = "";
                            if(str == "FY")
                            {
                                year="First Year";
                            }
                            else if(str == "SY")
                            {
                                year="Second Year";
                            }
                            else if(str == "TY")
                            {
                                year="Third Year";
                            }

                            year=year + " " +(results[i].Sstd).substr(2,(results[i].Sstd).length-2);
                                if(results[i].Sstatus == 1)
                                {
                                        $("#data").append("<tr><td style='width: 10%;'>"+ results[i].Lid +"</td><td style='width: 15%;'>"+ results[i].Sname +"</td><td style='width: 11.5%;'>"+ results[i].date +"</td><td style='width: 14%;'>"+ year +"</td><td style='width: 11%;'>"+ results[i].Ssem + " Sem" +"</td><td style='width: 10%;'>"+ results[i].Sdiv + " Division" +"</td><td style='width: 7%;'>"+ results[i].Sisscnt +"</td><td style='width:13%'>"+ results[i].Scont +"</td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='pay("+ results[i].Lid +","+ results[i].Spandpay +")' style='width:80px;' value='&#x20B9; "+ results[i].Spandpay +"'></td><td style='width: auto;'><input id=" + results[i].Lid + " type='button' class='btn btn-primary btn-md' onclick='change("+ results[i].Lid +")' style='width:100px;' value='Change'></td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='del("+ results[i].Lid +","+ results[i].Sstatus +")' style='width:100px;' value='Block'></td></tr>");
                                }
                                else
                                {
                                        $("#data").append("<tr><td style='width: 10%;'>"+ results[i].Lid +"</td><td style='width: 15%;'>"+ results[i].Sname +"</td><td style='width: 11.5%;'>"+ results[i].date +"</td><td style='width: 14%;'>"+ year +"</td><td style='width: 11%;'>"+ results[i].Ssem + " Sem" +"</td><td style='width: 10%;'>"+ results[i].Sdiv + " Division" +"</td><td style='width: 7%;'>"+ results[i].Sisscnt +"</td><td style='width:13%'>"+ results[i].Scont +"</td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='pay("+ results[i].Lid +","+ results[i].Spandpay +")' style='width:80px;' value='&#x20B9; "+ results[i].Spandpay +"'></td><td style='width: auto;'><input id=" + results[i].Lid + " type='button' class='btn btn-primary btn-md' onclick='change("+ results[i].Lid +")' style='width:100px;' value='Change' disabled></td><td style='width: auto;'><input type='button' class='btn btn-success btn-md' onclick='del("+ results[i].Lid +","+ results[i].Sstatus +")' style='width:100px;' value='Unblock'></td></tr>");
                                }
                        }
                }
                
        });
        cn.end();

        $("#data").hide();
        $("#data").fadeIn(500);
}
function pay(id,amt)
{
        document.getElementById("deloid").value=id;
        localStorage.setItem("amt",amt);
        if(amt == 0)
        {
                $("#updeldiv > h4").remove();
                $("#updeldiv").append("<h4 class='alert alert-success' align='center' id='updelmsg'></h4>");
                $("#updelmsg").text("No Need To Pay Ammount.");
                $("#"+ $("#deloid").val() +"").attr("enabled","enabled");
                $('#myModalup').modal('show');
        }
        else
        {
                document.getElementById("delosts").value=2;
                $("#delrec > h4").remove();
                $("#delrec").append("<h4 align='center'><span class='alert alert-danger' id='delrec'>Are You Want To Pay Amount &#x20B9; "+ amt +" As Panelty Of "+ id +" Member ?</span></h4>");
                $('#myModaldel').modal('show');
        }
}
function change(id)
{
            var no;
            var flag=0;
            var mysql = require("mysql");
            var cn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: null,
            database: "db_library"
            });
            
            cn.connect();
            
            var i;
            $sql = "Select *,DATE_FORMAT(Svalid, '%m/%d/%Y') As date from tbl_student where Lid="+ id +"";
            cn.query($sql,function(error,results,fields){
            if(error) throw error;

                document.getElementById("lid").value=results[0].Lid;    
                
                document.getElementById("sname").value=results[0].Sname;
                
                $("#valid").datepicker('setDate',new Date(results[0].date));
                var year=(results[0].Sstd).substr(0,2);

                if(year == "FY")
                {
                        document.getElementById("stdyr").value="First Year";
                        $("#stdsem1").text("Sem 1");
                        $("#stdsem2").text("Sem 2");
                        $("input[id=sem2]").prop('value','2');
                        $("input[id=sem1]").prop('value','1');
                }
                else if(year == "SY")
                {
                        document.getElementById("stdyr").value="Second Year";
                        $("#stdsem1").text("Sem 3");
                        $("#stdsem2").text("Sem 4");
                        $("input[id=sem2]").prop('value','4');
                        $("input[id=sem1]").prop('value','3');
                }
                else if(year == "TY")
                {
                        document.getElementById("stdyr").value="Third Year";
                        $("#stdsem1").text("Sem 5");
                        $("#stdsem2").text("Sem 6");
                        $("input[id=sem2]").prop('value','6');       
                        $("input[id=sem1]").prop('value','5');
                }

                for(var i=1;i<7;i++)
                {
                        if(results[0].Ssem == i)
                        {
                                $('input[type=radio][name=stdsem][value='+ i +']').prop("checked",true);
                        }
                
                }
                
                var crs =(results[0].Sstd).substr(2,(results[0].Sstd).length);
                document.getElementById("stcours").value=crs;
                document.getElementById("stdiv").value=results[0].Sdiv;
                document.getElementById("cont").value=results[0].Scont;
                $('#myModalchange').modal('show');
            });
            cn.end();
}
document.addEventListener("change",function(e){
        if(e.target.id == "stdyrr")
        {
                var yr =$("#stdyrr").val();
                if(yr == 'FY')
                {
                        document.getElementById("stdyr").value="First Year";
                        $("#stdsem1").text("Sem 1");
                        $("#stdsem2").text("Sem 2");
                        $("input[id=sem2]").prop('value','2');
                        $("input[id=sem1]").prop('value','1');
                }
                else if(yr == 'SY')
                {
                        document.getElementById("stdyr").value="Second Year";
                        $("#stdsem1").text("Sem 3");
                        $("#stdsem2").text("Sem 4");
                        $("input[id=sem2]").prop('value','4');
                        $("input[id=sem1]").prop('value','3');
                }
                else if(yr == 'TY')
                {
                        document.getElementById("stdyr").value="Third Year";
                        $("#stdsem1").text("Sem 5");
                        $("#stdsem2").text("Sem 6");
                        $("input[id=sem2]").prop('value','6');       
                        $("input[id=sem1]").prop('value','5');
                }
        }
        else if(e.target.id == "stdlist")
        {
                document.getElementById("stcours").value=$("#stdlist").val();
        }
        else if(e.target.id == "stddiv")
        {
                document.getElementById("stdiv").value=$("#stddiv").val();
        }
});
function validate()
{
        if($("#sname").val() == '' || $("#sname").val().length >20)
        {
                $("#myModalerr").modal('show');
                $("#errmsg").text("Blank Student Name Not Allowed");
        }
        else if($("#cont").val() == '' || ($("#cont").val().length) != 10 || isNaN($("#cont").val()))
        {
                $("#myModalerr").modal('show');
                $("#errmsg").text("Contact Number Not Allowed");
        }
        else
        {       
                var sm=$('input[type=radio][name=stdsem]:checked').val();
                var d = $("#valid").val();
                
                var month = d.substr(3,2),
                day = d.substr(0,2),
                year = d.substr(6,4);
        
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                var dat = [year, month, day].join('-')
                var yr;
                if($("#stdyr").val() == "First Year")
                        yr="FY";
                else if($("#stdyr").val() == "Second Year")
                        yr="SY";
                else if($("#stdyr").val() == "Third Year")
                        yr="TY";

                var mysql = require("mysql");
                var cn = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: null,
                  database: "db_library"
                });

                cn.connect();
                $sql = "Update tbl_student Set Schid="+ localStorage.getItem("uid") +",Sname='"+ $("#sname").val() +"',Svalid='"+ dat +"',Sstd='"+ yr +$("#stdlist").val() +"',Ssem='"+ sm +"',Sdiv='"+ $("#stddiv").val() +"',Scont='"+ $("#cont").val() +"' where Lid="+ $("#lid").val() +"";
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