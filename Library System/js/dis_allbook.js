$(function(){
    
            display("none");
    
            //search by name operation
            $("#srcbid").keyup(function(){
                    display("id");
            });

            $("#srcbname").keyup(function(){
                    display("name");
            });
    
            $("#srcathname").keyup(function(){
                    display("authname");
            });

            $("#srcbid").keypress(function(e){
                    
                    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                    {
                            $("#srcid").addClass("has-error");
                            $("#srcbid").attr("placeholder","Only Number Allowed");
                            e.preventDefault();
                    }
                    else
                    {
                            $("#srcid").removeClass("has-error");
                            $("#srcbid").attr("placeholder","Search By User Id");
                    }
            });
            $("#upsuccess").click(function(){
                    
                    $('#myModalchange').modal('hide');
                    display("none");
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
                            $sql = "Update tbl_book Set Bstatus=0,Bchid="+localStorage.getItem("uid")+" where Bid Like '"+ $("#deloid").val() +"'";
                            $("#updeldiv > h4").remove();
                            $("#updeldiv").append("<h4 class='alert alert-danger' align='center' id='updelmsg'></h4>");
                            $("#updelmsg").text("Sub Admin Successfully Block.");
                            $("#"+ $("#deloid").val()).attr("disabled","disabled");
                    }
                    else
                    {
                            $sql = "Update tbl_book Set Bstatus=1,Bchid="+localStorage.getItem("uid")+" where Bid Like '"+ $("#deloid").val() +"'";
                            $("#updeldiv > h4").remove();
                            $("#updeldiv").append("<h4 class='alert alert-success' align='center' id='updelmsg'></h4>");
                            $("#updelmsg").text("Sub Admin Successfully Unblock.");
                            $("#"+ $("#deloid").val() +"").attr("enabled","enabled");
                    }
                    cn.query($sql,function(error,results,fields){
    
                    });
                    cn.end();
                    $('#myModalup').modal('show');
                    
            });

            //search for year semester
            $("#stdyrr").change(function(){
                var yr=$("#stdyrr").val();
                if(yr == 'FY')
                        document.getElementById("byear").value="First Year";
                else if(yr == 'SY')
                        document.getElementById("byear").value="Second Year";
                else if(yr == 'TY')
                        document.getElementById("byear").value="Third Year";
            });

            $("#stdlist").change(function(){
                    document.getElementById("bcourse").value=$("#stdlist").val();
            });

            $(".srclist").css("display","none");
            $(".srcsem").css("display","none");
    
            $("#srcyrr").change(function(){
                    if($("#srcyrr").val() == "none")
                    {
                            msgsrc();
                            $(".srclist").css("display","none");
                            $(".srcsem").css("display","none");
                    }
                    else
                    {
                            $(".srclist").css("display","");
                            display("srcyrd");
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
                            display("srclst");
                    }
            });
            $("#srcsem").change(function(){
                    if($("#srcsem").val() == "none")
                    {
                            display("srclst");
                    }
                    else
                    {
                            display("srcsm");
                    }
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

        $("#prc").keypress(function(e){
        
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        $("#prcqtyerr").addClass("has-error");
                        $("#prc").attr("placeholder","Only Number");
                        e.preventDefault();
                }
                else if($("#prc").val().length > 2)
                {
                        $("#prcqtyerr").addClass("has-error");
                        e.preventDefault();
                }
                else
                {
                        $("#prcqtyerr").removeClass("has-error");
                        $("#prc").attr("placeholder","price");
                }
        });

        $("#qty").keypress(function(e){
        
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        $("#prcqtyerr").addClass("has-error");
                        $("#qty").attr("placeholder","Only Number");
                        e.preventDefault();
                }
                else if($("#qty").val().length > 2)
                {
                        $("#prcqtyerr").addClass("has-error");
                        e.preventDefault();
                }
                else
                {
                        $("#prcqtyerr").removeClass("has-error");
                        $("#qty").attr("placeholder","Penalty Per Day");
                }
        });
        $("#pnlty").keypress(function(e){
        
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        $("#pnlterr").addClass("has-error");
                        $("#pnlty").attr("placeholder","Only Number");
                        e.preventDefault();
                }
                else if($("#pnlty").val().length > 1)
                {
                        $("#pnlterr").addClass("has-error");
                        e.preventDefault();
                }
                else
                {
                        $("#pnlterr").removeClass("has-error");
                        $("#pnlty").attr("placeholder","Quantity");
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
                    $sql = "Select * from tbl_book";
            }
            else if(msg == "name")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bname Like '%"+ $("#srcbname").val() +"%'";
            }
            else if(msg == "id")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bid Like 'B%"+ $("#srcbid").val() +"%'";
            }
            else if(msg == "authname")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bauther Like '%"+ $("#srcathname").val() +"%'";
            }
            else if(msg == "srcyrd")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bcourse Like '"+ $("#srcyrr").val() +"%'";
            }
            else if(msg == "srclst")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bcourse Like '"+ $("#srcyrr").val() + $("#srclist").val() +"'";
            }
            else if(msg == "srcsm")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bcourse Like '"+ $("#srcyrr").val() + $("#srclist").val() +"' And Bsem = "+ $("#srcsem").val() +"";
            }
            else if(msg == "block")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where  Bstatus=0";
            }
            else if(msg == "unblock")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Bstatus=1";
            }
            else if(msg == "meadrec")
            {
                    $("#data > tr").remove();
                    $sql = "Select * from tbl_book where Badid="+ localStorage.getItem("uid")+"";
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
                                        $("#data").append("<tr><td style='width: 7%;'>"+ results[i].Bid +"</td><td style='width: 13%;'>"+ results[i].Bname +"</td><td style='width: 13%;'>"+ year +"</td><td style='width: 8%;'>"+ results[i].Bsem + " Sem" +"</td><td style='width: 12%;'>"+ results[i].Bauther +"</td><td style='width: 10%;'>&#x20B9; "+ results[i].Bprice + "</td><td style='width:13%'>"+ results[i].Bqty +"</td><td style='width:13%'>"+ results[i].Bpnlty +"</td><td style='width: auto;'><input id=" + results[i].Bid + " type='button' class='btn btn-primary btn-md' onclick='change("+ (results[i].Bid).substr(1,(results[i].Bid).length) +")' style='width:100px;' value='Change'></td><td style='width: auto;'><input type='button' class='btn btn-danger btn-md' onclick='del("+ (results[i].Bid).substr(1,(results[i].Bid).length) +","+ results[i].Bstatus +")' style='width:100px;' value='Block'></td></tr>");
                                    }
                                    else
                                    {
                                        $("#data").append("<tr><td style='width: 7%;'>"+ results[i].Bid +"</td><td style='width: 13%;'>"+ results[i].Bname +"</td><td style='width: 13%;'>"+ year +"</td><td style='width: 8%;'>"+ results[i].Bsem + " Sem" +"</td><td style='width: 12%;'>"+ results[i].Bauther +"</td><td style='width: 10%;'>&#x20B9; "+ results[i].Bprice + "</td><td style='width:13%'>"+ results[i].Bqty +"</td><td style='width:13%'>"+ results[i].Bpnlty +"</td><td style='width: auto;'><input disabled id=" + results[i].Bid + " type='button' class='btn btn-primary btn-md' onclick='change("+ (results[i].Bid).substr(1,(results[i].Bid).length) +")' style='width:100px;' value='Change'></td><td style='width: auto;'><input type='button' class='btn btn-success btn-md' onclick='del("+ (results[i].Bid).substr(1,(results[i].Bid).length) +","+ results[i].Bstatus +")' style='width:100px;' value='Unblock'></td></tr>");
                                    }
                            }
                    }
                    
            });
            cn.end();
    
            $("#data").hide();
            $("#data").fadeIn(500);
    }
    function change(id)
    {
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: null,
                database: "db_library"
                });
                
                cn.connect();
                id="B" + id;
                
                var i;
                $sql = "Select * from tbl_book where Bid Like '"+ id +"'";
                cn.query($sql,function(error,results,fields){
    
                        document.getElementById("bid").value=results[0].Bid;    
                        
                        document.getElementById("bname").value=results[0].Bname;
                        
                        var year=(results[0].Bcourse).substr(0,2);
        
                        if(year == "FY")
                        {
                                document.getElementById("byear").value="First Year";
                                $("#stdsem1").text("Sem 1");
                                $("#stdsem2").text("Sem 2");
                                $("input[id=sem2]").prop('value','2');
                                $("input[id=sem1]").prop('value','1');
                        }
                        else if(year == "SY")
                        {
                                document.getElementById("byear").value="Second Year";
                                $("#stdsem1").text("Sem 3");
                                $("#stdsem2").text("Sem 4");
                                $("input[id=sem2]").prop('value','4');
                                $("input[id=sem1]").prop('value','3');
                        }
                        else if(year == "TY")
                        {
                                document.getElementById("byear").value="Third Year";
                                $("#stdsem1").text("Sem 5");
                                $("#stdsem2").text("Sem 6");
                                $("input[id=sem2]").prop('value','6');       
                                $("input[id=sem1]").prop('value','5');
                        }
        
                        for(var i=1;i<7;i++)
                        {
                                if(results[0].Bsem == i)
                                {
                                        $('input[type=radio][name=stdsem][value='+ i +']').prop("checked",true);
                                }
                        
                        }
                        
                        var crs =(results[0].Bcourse).substr(2,(results[0].Bcourse).length);
                        document.getElementById("bcourse").value=crs;
                        document.getElementById("auth").value=results[0].Bauther;
                        document.getElementById("prc").value=results[0].Bprice;
                        document.getElementById("qty").value=results[0].Bqty;
                        document.getElementById("pnlty").value=results[0].Bpnlty;

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
    function err(msg)
    {
        $("#myModalerr").modal('show');
        $("#errmsg").text(msg);
    }
    function validate()
    {
                if($("#bname").val() == '' || $("#bname").val().length >20)
                        err("Book Name Is Not Valid!!");
                else if($("#auth").val() == '')
                        err("Auther Name Is Not Valid!!");
                else if($("#prc").val() == '' || $("#prc").val().length>3)
                        err("Price Is Not Valid Is Not Valid!!");
                else if($("#qty").val() == '' || $("#qty").val().length > 3)
                        err("Quantity Is Not Valid Is Not Valid!!");
                else if($("#pnlty").val() == "" || $("#pnlty").val().length > 2)
                        err("Panelty Price Is Not Valid!!");
                else
                {       
                        var sm=$('input[type=radio][name=stdsem]:checked').val();
                        
                        var yr;
                        if($("#byear").val() == "First Year")
                                yr="FY";
                        else if($("#byear").val() == "Second Year")
                                yr="SY";
                        else if($("#byear").val() == "Third Year")
                                yr="TY";

                        var mysql = require("mysql");
                        var cn = mysql.createConnection({
                          host: "localhost",
                          user: "root",
                          password: null,
                          database: "db_library"
                        });
                        
                        cn.connect();
                        $sql = "update tbl_book set Bchid="+ localStorage.getItem("uid") +",Bname='"+ $("#bname").val() +"',Bcourse='"+ (yr + $("#bcourse").val()) +"',Bsem="+ sm +",Bauther='"+ $("#auth").val() +"',Bprice="+ $("#prc").val() +",Bqty="+ $("#qty").val() +",Bpnlty="+ $("#pnlty").val() +" where Bid Like '"+ $("#bid").val() +"'";
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
        id="B" + id;    
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