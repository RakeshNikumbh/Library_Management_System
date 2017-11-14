$(function(){
    
            display("none");
    
            //search by name operation
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

            $("#stdyear").change(function(){
                var src = $("#stdyear").val();
                if(src == "lid")
                {
                        display("none");
                        $("#srcid").removeClass("hidden");
                        $("#srcvalid").addClass("hidden");
                }
                else if(src == "valid")
                {
                        display("none");
                        $("#srcvalid").removeClass("hidden");
                        $("#srcid").addClass("hidden");
                }
                else if(src == "meadrec")
                {
                        $("#srcid").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        display("meadrec");
                }
                else if(src == "none")
                {
                        $("#srcid").addClass("hidden");
                        $("#srcvalid").addClass("hidden");
                        display("none");
                }
        });
            $("#srcval").datepicker({
                    format: 'mm/yyyy',
                    startView:'years',
                    minViewMode:'months',
                    autoclose: true
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
                    $sql = "Select *,DATE_FORMAT(Pdate,'%d-%m-%Y') As date from tbl_payment";
            }
            else if(msg == "id")
            {
                    $("#data > tr").remove();
                    $sql = "Select *,DATE_FORMAT(Pdate,'%d-%m-%Y') As date from tbl_payment where Lid Like '%"+ $("#srcd").val() +"%'";
            }
            else if(msg == "validdate")
            {
                    $("#data > tr").remove();
                    $sql = "Select *,DATE_FORMAT(Pdate,'%d-%m-%Y') As date from tbl_payment where DATE_FORMAT(Pdate,'%m/%Y') = '"+ $("#srcval").val() +"'";
            }
            else if(msg == "meadrec")
            {
                    $("#data > tr").remove();
                    $sql = "Select *,DATE_FORMAT(Pdate,'%d-%m-%Y') As date from tbl_payment where Pisid="+ localStorage.getItem("uid") +"";
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
                                $("#data").append("<tr><td style='width: 120px;'>"+ results[i].Pid +"</td><td style='width: 20%;'>"+ results[i].Pisid +"</td><td style='width: 20%;'>"+ results[i].Lid +"</td><td style='width: 120px;'>&#x20B9; "+ results[i].Pamt +"</td><td style='width: 115px;'>"+ results[i].date +"</td></tr>");
                            }
                    }
                    
            });
            cn.end();
    
            $("#data").hide();
            $("#data").fadeIn(500);
    }