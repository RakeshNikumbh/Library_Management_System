//INSERT INTO tbl_issue(Iid,Bid,Lid,Isdate,Rdate,Istatus) VALUES ('IS1','B1',1001,'2017-11-10','2017-11-25',1);
$(function(){
        
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
        $sql = "Select Iid from tbl_issue Order By Iid DESC LIMIT 1";
        cn.query($sql,function(error,results,fields){
                
                no=parseInt((results[0].Iid).substr(2,(results[0].Iid).length));
                $("#iid").attr("value","IS"+ (no+1) +"");
        });
        cn.end();

        localStorage.removeItem("selected");
        localStorage.removeItem("selected1");

        //for Select The Book

        $("#stdyear").change(function(){
                var src = $("#stdyear").val();
                if(src == "lid")
                {
                        display("none");
                        $("#srcid").removeClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#srcycd").addClass("hidden");
                }
                else if(src == "name")
                {
                        display("none");
                        $("#srcsname").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        $("#srcycd").addClass("hidden");
                }
                else if(src == "valid")
                {
                        display("none");
                        $("#srcvalid").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcycd").addClass("hidden");
                }
                else if(src == "yrdgre")
                {
                        display("none");
                        $("#srcycd").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                }
                else if(src == "none")
                {
                        $("#srcycd").addClass("hidden");
                        $("#srcid").addClass("hidden");
                        $("#srcsname").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        display("none");
                }
        });

        $("#srcbid").keyup(function(){
                display("id");
        });

        $("#srcbname").keyup(function(){
                display("name");
        });

        $("#srcathname").keyup(function(){
                display("authname");
        });

        $(".srclist").css("display","none");
        $(".srcsem").css("display","none");

        $("#srcyrr").change(function(){
                if($("#srcyrr").val() == "none")
                {
                        $(".srclist").css("display","none");
                        $(".srcsem").css("display","none");
                        display("none");
                }
                else
                {
                        $(".srclist").css("display","");
                        if($("#srclist").val() == "none")
                        {
                                $(".srcsem").css("display","none");
                                display("srcyrd");
                        }
                        else
                        {
                                $(".srcsem").css("display","");
                                if($("#srcsem").val() == "none")
                                        display("srclst");
                                else
                                        display("srcsm");
                        }
                }
        });
        $("#srclist").change(function(){
                if($("#srclist").val() == "none")
                {
                        display("srcyrd");
                        $(".srcsem").css("display","none");
                }
                else
                {
                        $(".srcsem").css("display","");
                        if($("#srcsem").val() == "none")
                                display("srclst");
                        else
                                display("srcsm");
                }
        });
        $("#srcsem").change(function(){
                if($("#srcsem").val() == "none")
                        display("srclst");
                else
                        display("srcsm");
        });

        //for Select The Student

        $("#stdyear1").change(function(){
                var src = $("#stdyear1").val();
                if(src == "lid")
                {
                        display1("none");
                        $("#srcid1").removeClass("hidden");
                        $("#srcsname1").addClass("hidden");
                        $("#srcvalid1").addClass("hidden");
                        $("#srcycd1").addClass("hidden");
                }
                else if(src == "name")
                {
                        display1("none");
                        $("#srcsname1").removeClass("hidden");
                        $("#srcid1").addClass("hidden");
                        $("#srcvalid1").addClass("hidden");
                        $("#srcycd1").addClass("hidden");
                }
                else if(src == "valid")
                {
                        display1("none");
                        $("#srcvalid1").removeClass("hidden");
                        $("#srcid1").addClass("hidden");
                        $("#srcsname1").addClass("hidden");
                        $("#srcycd1").addClass("hidden");
                }
                else if(src == "yrdgre")
                {
                        display1("none");
                        $("#srcycd1").removeClass("hidden");
                        $("#srcid1").addClass("hidden");
                        $("#srcsname1").addClass("hidden");
                        $("#srcvalid1").addClass("hidden");
                }
                else if(src == "none")
                {
                        $("#srcycd1").addClass("hidden");
                        $("#srcid1").addClass("hidden");
                        $("#srcsname1").addClass("hidden");
                        $("#srcvalid1").addClass("hidden");
                        display1("none");
                }
        });

        //for search students
        $("#srcd").keyup(function(){
                display1("id");
        });

        $("#srcnm").keyup(function(){
                display1("name");
        });

        $("#srcval").change(function(){
                display1("validdate");
        });

        $("#srcval").datepicker({
                format: 'mm/yyyy',
                startView:'years',
                minViewMode:'months',
                autoclose: true
        });

        $("#svalrefresh").click(function(){
                $("#srcval").val("");
                display1("none");
        });

        $(".srclist1").css("display","none");
        $(".srcsem1").css("display","none");
        $(".srcdiv1").css("display","none");

        $("#srcyrr1").change(function(){
                if($("#srcyrr1").val() == "none")
                {
                        $(".srclist1").css("display","none");
                        $(".srcsem1").css("display","none");
                        $(".srcdiv1").css("display","none");
                        display1("none");
                }
                else
                {
                        $(".srclist1").css("display","");
                        if($("#srclist1").val() == "none")
                        {
                                $(".srcsem1").css("display","none");
                                $(".srcdiv1").css("display","none");
                                display1("srcyrd");
                        }
                        else
                        {
                                $(".srcsem1").css("display","");
                                if($("#srcsem1").val() == "none")
                                {
                                        $(".srcdiv1").css("display","none");
                                        display1("srclst");
                                }
                                else
                                {

                                        $(".srcdiv1").css("display","");
                                        if($("#srcdiv1").val() == "none")
                                                display1("srcsm");
                                        else
                                                display1("srcdv");
                                }
                        }
                }
        });
        $("#srclist1").change(function(){
                if($("#srclist1").val() == "none")
                {
                        $(".srcsem1").css("display","none");
                        $(".srcdiv1").css("display","none");
                        display1("srcyrd");
                }
                else
                {
                        $(".srcsem1").css("display","");
                        if($("#srcsem1").val() == "none")
                        {
                                $(".srcdiv1").css("display","none");
                                display1("srclst");
                        }
                        else
                        {

                                $(".srcdiv1").css("display","");
                                if($("#srcdiv1").val() == "none")
                                        display1("srcsm");
                                else
                                        display1("srcdv");
                        }
                }
        });
        $("#srcsem1").change(function(){
                if($("#srcsem1").val() == "none")
                {
                        $(".srcdiv1").css("display","none");
                        display1("srclst");
                }
                else
                {

                        $(".srcdiv1").css("display","");
                        if($("#srcdiv1").val() == "none")
                                display1("srcsm");
                        else
                                display1("srcdv");
                }
        });

        $("#srcdiv1").change(function(){
                if($("#srcdiv1").val() == "none")
                        display1("srcsm");
                else
                        display1("srcdv");
        });

        //for issue date
        var td=new Date();
        var dd = td.getDate(),mm=td.getMonth()+1,yy=td.getFullYear();
        if(dd<10){dd='0'+dd;}
        if(mm<10){mm='0'+mm;}
        document.getElementById("idate").value=dd+"/"+mm+"/"+yy;

        //change Renew Date
        $("#btnchng").click(function(){
                $("#myModalchange").modal("show");
        });

        $('input[type=radio][name=day]').change(function() {
                var td=new Date();
                td.setDate(td.getDate()+parseInt(this.value));

                var dd = td.getDate(),mm=td.getMonth()+1,yy=td.getFullYear() + 1;
                if(dd<10){dd='0'+dd;}
                if(mm<10){mm='0'+mm;}

                document.getElementById("rdate").value=dd+"/"+mm+"/"+yy;

                $("#myModalchange").modal("hide");
        });

        $("#refre").click(function(){
                window.location.href="./book_issue.html";
        });
});

function selectbid()
{
    $("#myModalup").modal("show");
    display("none");
    
}
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
                $sql = "Select * from tbl_book where Bstatus=1";
        }
        else if(msg == "name")
        {
                $("#data > tr").remove();
                $sql = "Select * from tbl_book where Bname Like '%"+ $("#srcbname").val() +"%' And Bstatus=1";
        }
        else if(msg == "id")
        {
                $("#data > tr").remove();
                $sql = "Select * from tbl_book where Bid Like 'B%"+ $("#srcbid").val() +"%' And Bstatus=1";
        }
        else if(msg == "authname")
        {
                $("#data > tr").remove();
                $sql = "Select * from tbl_book where Bauther Like '%"+ $("#srcathname").val() +"%' And Bstatus=1";
        }
        else if(msg == "srcyrd")
        {
                $("#data > tr").remove();
                $sql = "Select * from tbl_book where Bcourse Like '"+ $("#srcyrr").val() +"%' And Bstatus=1";
        }
        else if(msg == "srclst")
        {
                $("#data > tr").remove();
                $sql = "Select * from tbl_book where Bcourse Like '"+ $("#srcyrr").val() + $("#srclist").val() +"' And Bstatus=1";
        }
        else if(msg == "srcsm")
        {
                $("#data > tr").remove();
                $sql = "Select * from tbl_book where Bcourse Like '"+ $("#srcyrr").val() + $("#srclist").val() +"' And Bsem = "+ $("#srcsem").val() +" And Bstatus=1";
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
                            str=(results[i].Bcourse).substr(0,2);
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

                            year=year + " " +(results[i].Bcourse).substr(2,(results[i].Bcourse).length-2);
                                if(results[i].Bstatus == 1)
                                {
                                    if( localStorage.getItem("selected") == results[i].Bid)
                                        $("#data").append("<tr><td style='width: 7%;'>"+ results[i].Bid +"</td><td style='width: 15%;'>"+ results[i].Bname +"</td><td style='width: 13%;'>"+ year +"</td><td style='width: 8%;'>"+ results[i].Bsem + " Sem" +"</td><td style='width: 12%;'>"+ results[i].Bauther +"</td><td style='width: 10%;'>&#x20B9; "+ results[i].Bprice + "</td><td style='width:13%'>"+ results[i].Bqty +"</td><td style='width:13%'>"+ results[i].Bpnlty +"</td><td style='width: auto;'></td><td style='width: auto;'><input type='button' class='btn btn-success btn-md' onclick='sel("+ (results[i].Bid).substr(1,(results[i].Bid).length) +","+ results[i].Bstatus +")' style='width:100px;' value='Selected' disabled></td></tr>");    
                                    else
                                        $("#data").append("<tr><td style='width: 7%;'>"+ results[i].Bid +"</td><td style='width: 15%;'>"+ results[i].Bname +"</td><td style='width: 13%;'>"+ year +"</td><td style='width: 8%;'>"+ results[i].Bsem + " Sem" +"</td><td style='width: 12%;'>"+ results[i].Bauther +"</td><td style='width: 10%;'>&#x20B9; "+ results[i].Bprice + "</td><td style='width:13%'>"+ results[i].Bqty +"</td><td style='width:13%'>"+ results[i].Bpnlty +"</td><td style='width: auto;'></td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='sel("+ (results[i].Bid).substr(1,(results[i].Bid).length) +","+ results[i].Bstatus +")' style='width:100px;' value='Select'></td></tr>");
                                }
                        }
                }
                
        });
        cn.end();

        $("#data").hide();
        $("#data").fadeIn(500);
}
function selectlid()
{
        $("#myModalup1").modal("show");
        display1("none");
}
function display1(msg)
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
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstatus=1";
        }
        else if(msg == "name")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sname Like '%"+ $("#srcnm").val() +"%' And Sstatus=1";
        }
        else if(msg == "id")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Lid Like '%"+ $("#srcd").val() +"%' And Sstatus=1";
        }
        else if(msg == "validdate")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where DATE_FORMAT(Svalid,'%m/%Y') = '"+ $("#srcval").val() +"' And Sstatus=1";
        }
        else if(msg == "srcyrd")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr1").val() +"%' And Sstatus=1";
        }
        else if(msg == "srclst")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr1").val() + $("#srclist1").val() +"' And Sstatus=1";
        }
        else if(msg == "srcsm")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr1").val() + $("#srclist1").val() +"' And Ssem = "+ $("#srcsem1").val() +" And Sstatus=1";
        }
        else if(msg == "srcdv")
        {
                $("#data1 > tr").remove();
                $sql = "Select *,DATE_FORMAT(Svalid,'%d-%m-%Y') As date from tbl_student where Sstd Like '"+ $("#srcyrr1").val() + $("#srclist1").val() +"' And Ssem = "+ $("#srcsem1").val() +" And Sdiv = '"+ $("#srcdiv1").val() +"' And Sstatus=1";
        }
        cn.query($sql,function(error,results){

                if(results.length == 0)
                {
                        $("#data1 > h2").remove();
                        $("#data1").append("<h2 align='center' style='color:rgba(201, 48, 44, 0.64);margin-top:20px;'>No Record Found</h2>");
                }
                else
                {
                    var str="";
                        $("#data1 > h2").remove();
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
                                if( localStorage.getItem("selected1") == results[i].Lid)
                                        $("#data1").append("<tr><td style='width: 13%;'>"+ results[i].Lid +"</td><td style='width: 16%;'>"+ results[i].Sname +"</td><td style='width: 11.5%;'>"+ results[i].date +"</td><td style='width: 15%;'>"+ year +"</td><td style='width: 11%;'>"+ results[i].Ssem + " Sem" +"</td><td style='width: 10%;'>"+ results[i].Sdiv + " Division" +"</td><td style='width:13%'>"+ results[i].Scont +"</td><td style='width: auto;'><input type='button' class='btn btn-success btn-md' onclick='sel1("+ results[i].Lid +","+ results[i].Sstatus +")' style='width:100px;' value='Selected' disabled></td></tr>");
                                else
                                        $("#data1").append("<tr><td style='width: 13%;'>"+ results[i].Lid +"</td><td style='width: 16%;'>"+ results[i].Sname +"</td><td style='width: 11.5%;'>"+ results[i].date +"</td><td style='width: 15%;'>"+ year +"</td><td style='width: 11%;'>"+ results[i].Ssem + " Sem" +"</td><td style='width: 10%;'>"+ results[i].Sdiv + " Division" +"</td><td style='width:13%'>"+ results[i].Scont +"</td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='sel1("+ results[i].Lid +","+ results[i].Sstatus +")' style='width:100px;' value='Select'></td></tr>");
                        }
                }
                
        });
        cn.end();

        $("#data1").hide();
        $("#data1").fadeIn(500);
}
function sel(id,status)
{
        localStorage.removeItem("selected");
        localStorage.setItem("selected","B"+ id);

        document.getElementById("bid").value="B"+ id;


        $("#myModalup").modal("hide");
        $("#btnbid").attr("value","Change");
        $("#btnbid").removeClass("btn-danger");
        $("#btnbid").addClass("btn-success");
}
function sel1(id,status)
{
        localStorage.removeItem("selected1");
        localStorage.setItem("selected1",id);

        document.getElementById("lid").value=id;


        $("#myModalup1").modal("hide");
        $("#btnlid").attr("value","Change");
        $("#btnlid").removeClass("btn-danger");
        $("#btnlid").addClass("btn-success");
}
function check(msg,marg)
{
        $("#alert").fadeIn(1000);
        $("#alert").removeClass("hidden");  
        $("#errmsg").text(msg);
        $("#alert").css("margin-top",marg)
}
function validate()
{
        if($("#bid").val() == '')
                check("Book Id Is Not Valid!!","145px");
        else if($("#lid").val() == '')
                check("Student Id Is Not Valid!!","207px");
        else if($("#idate").val() == '')
                check("Issue Date Is Not Valid!!","260px");
        else if($("#rdate").val() == '')
                check("Issue Date Is Not Valid!!","320px");
        else
        {       
                var d = $("#idate").val();
                
                month = d.substr(3,2),
                day = d.substr(0,2),
                year = d.substr(6,4);
        
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                var idate=[year, month, day].join('-');
                
                d = $("#rdate").val();
                
                month = d.substr(3,2),
                day = d.substr(0,2),
                year = d.substr(6,4);
        
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                var rdate=[year, month, day].join('-');

                var mysql = require("mysql");
                var cn = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: null,
                  database: "db_library"
                });

                cn.connect();
                $sql = "INSERT INTO tbl_issue(Iid,Iisby,Bid,Lid,Isdate,Rdate,Ibstatus,Istatus) VALUES ('"+ $("#iid").val() +"','"+ localStorage.getItem("uid") +"','"+ $("#bid").val() +"',"+ $("#lid").val() +",'"+idate+"','"+rdate+"',1,1);";
                cn.query($sql,function(error,results,fields){

                });

                $sql = "Update tbl_student Set Sisscnt=Sisscnt+1 where Lid="+ $("#lid").val() +"";
                cn.query($sql,function(error,results,fields){
                });

                $sql = "Update tbl_book Set Bqty=Bqty-1 where Bid='"+ $("#bid").val() +"'";
                cn.query($sql,function(error,results,fields){
                });

            cn.end();
            $('#myModal').modal('show');
            document.getElementById("frm").reset();
        }
}
