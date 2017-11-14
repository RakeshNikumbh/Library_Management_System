$(function(){
    
            display("none");
            $("#srbid").keyup(function(){
                display("id");
            });
            $("#srlid").keyup(function(){
                display("lid");
            });
            //search by name operation
            $("#srbid").keypress(function(e){
                    
                    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                    {
                            $("#srcid").addClass("has-error");
                            $("#srcbid").attr("placeholder","Only Number Allowed");
                            e.preventDefault();
                    }
                    else
                    {
                            $("#srcid").removeClass("has-error");
                            $("#srbid").attr("placeholder","Search By Book Id");
                    }
            });
            $("#srlid").keypress(function(e){
                    
                    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                    {
                            $("#srclid").addClass("has-error");
                            $("#srlid").attr("placeholder","Only Number Allowed");
                            e.preventDefault();
                    }
                    else
                    {
                            $("#srclid").removeClass("has-error");
                            $("#srlid").attr("placeholder","Search By Library Id");
                    }
            });
            $("#upsuccess").click(function(){
                    
                    $('#myModalchange').modal('hide');
                    display("none");
            });
    
            $("#stdyear").change(function(){
                    var src = $("#stdyear").val();
                    if(src == "bid")
                    {
                            display("none");
                            $("#srcid").removeClass("hidden");
                            $("#srclid").addClass("hidden");
                    }
                    else if(src == "lid")
                    {
                            display("none");
                            $("#srclid").removeClass("hidden");
                            $("#srcid").addClass("hidden");
                    }
                    else if(src == "sub")
                    {
                        display("sub");
                    }
                    else if(src == "ren")
                    {
                        display("ren");
                    }
                    else if(src == "toren")
                    {
                        display("toren");
                    }
                    else if(src == "mead")
                    {
                        display("mead");
                    }
                    else if(src == "none")
                    {
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

        //for issue date
        var td=new Date();
        var dd = td.getDate(),mm=td.getMonth()+1,yy=td.getFullYear();
        if(dd<10){dd='0'+dd;}
        if(mm<10){mm='0'+mm;}
        document.getElementById("idate").value=dd+"/"+mm+"/"+yy;

        $("#btnchng").click(function(){

                $("#myModalchange").modal("show");
        });
        $('input[type=radio][name=day]').change(function() {
                var td=new Date();
                td.setDate(td.getDate()+parseInt(this.value));

                var dd = td.getDate(),mm=td.getMonth()+1,yy=td.getFullYear();
                if(dd<10){dd='0'+dd;}
                if(mm<10){mm='0'+mm;}

                document.getElementById("rdate").value=dd+"/"+mm+"/"+yy;

                $("#myModalchange").modal("hide");
        });
    });
    function success()
    {
        $("#myModalrenew").modal("hide");
        display("none");
    }
    function sub()
    {
            var mysql = require("mysql");
            var cn = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: null,
                    database: "db_library"
            });
            cn.connect();

            $sql = "Update tbl_issue Set Ibstatus=0 where Iid='"+ $("#iid").val() +"'";
            cn.query($sql,function(error,results){

            });

            $sql = "Update tbl_book Set Bqty=Bqty+1 where Bid='"+ $("#bid").val() +"'";
            cn.query($sql,function(error,results){
                    
            });

            $sql = "Update tbl_student Set Spandpay=Spandpay+ "+ $("#pnlt").val() +" where Lid='"+ $("#lid").val() +"'";
            cn.query($sql,function(error,results){
                
            });

            cn.end();
            display("none");

            $("#errmsg").text("Book Successfully Submited!!");
            $("#alert1").removeClass("alert-danger");
            $("#alert1").addClass("alert-success");
            $("#myModalerr").modal("show");  
    }
    function renew()
    {
        if($("#rdate").val() == '')
        {
                $("#errmsg").text("Renew Date Is Not Valid!!");
                $("#alert1").removeClass("alert-success");
                $("#alert1").addClass("alert-danger");
                $("#myModalerr").modal("show");
        }
        else 
        {
            var mysql = require("mysql");
            var cn = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: null,
                    database: "db_library"
            });

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

            cn.connect();

            $sql = "Update tbl_issue Set Isdate='" + idate + "',Rdate='" + rdate + "' where Iid='"+ $("#iid").val() +"'";
            cn.query($sql,function(error,results){

            });
            cn.end();
            display("none");
            $("#errmsg").text("Book Successfully Renewed!!");
            $("#alert1").removeClass("alert-danger");
            $("#alert1").addClass("alert-success");
            $("#myModalerr").modal("show");
        }
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
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid Order By i.Iid";
            }
            else if(msg == "id")
            {
                    $("#data > tr").remove();
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid where i.Bid Like 'B"+ $("#srbid").val() +"%' Order By i.Iid";
            }
            else if(msg == "lid")
            {
                    $("#data > tr").remove();
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid where i.Lid Like '%"+ $("#srlid").val() +"%' Order By i.Iid";
            }
            else if(msg == "sub")
            {
                    $("#data > tr").remove();
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid where i.Ibstatus=0 Order By i.Iid";
            }
            else if(msg == "ren")
            {
                    $("#data > tr").remove();
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid where i.Ibstatus=1 And DATEDIFF(CURDATE(),i.Rdate) < 0 Order By i.Iid";
            }
            else if(msg == "toren")
            {
                    $("#data > tr").remove();
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid where i.Ibstatus=1 And DATEDIFF(CURDATE(),i.Rdate) > 0 Order By i.Iid";
            }
            else if(msg == "meadd")
            {
                    $("#data > tr").remove();
                    $sql = "Select i.*,DATE_FORMAT(i.Isdate,'%d-%m-%Y') As idate,DATE_FORMAT(i.Rdate,'%d-%m-%Y') As rdate,DATEDIFF(CURDATE(),i.Rdate) As ddif,b.Bpnlty from tbl_issue i Inner Join tbl_book b On i.Bid = b.Bid where i.Iisby="+localStorage.getItem("uid")+" Order By i.Iid";
            }
            cn.query($sql,function(error,results){
                
                if(results.length == 0)
                {
                        $("#data > h2").remove();
                        $("#data > tr").remove();
                        $("#data").append("<h2 align='center' style='color:rgba(201, 48, 44, 0.64);margin-top:20px;'>No Record Found</h2>");
                }
                else
                {
                        $("#data > h2").remove();
                        $("#data > tr").remove();
                        for(var i=0;i<results.length;i++)
                        {
                                if(results[i].Ibstatus == 0)
                                {
                                        $("#data").append("<tr><td style='width:11%;'>"+ results[i].Iid +"</td><td style='width: 13.2%;'>"+ results[i].Iisby +"</td><td style='width: 11%;'>"+ results[i].Bid +"</td><td style='width: 12%;'>"+ results[i].Lid + "</td><td style='width: 14%;'>"+ results[i].idate +"</td><td style='width: 14%;'>"+ results[i].rdate + "</td><td style='width: 14%;'>"+ results[i].Bpnlty + "</td><td style='width:16%'><input type='button' class='btn btn-success btn-md' onclick='sts("+ (results[i].Iid).substr(2,(results[i].Iid).length) +","+ (results[i].ddif * results[i].Bpnlty) +",0)' style='width:100px;' value='Submited' disabled></td></tr>");
                                }
                                else if(results[i].ddif > 0 )
                                {
                                        $("#data").append("<tr><td style='width:11%;'>"+ results[i].Iid +"</td><td style='width: 13.2%;'>"+ results[i].Iisby +"</td><td style='width: 11%;'>"+ results[i].Bid +"</td><td style='width: 12%;'>"+ results[i].Lid + "</td><td style='width: 14%;'>"+ results[i].idate +"</td><td style='width: 14%;'>"+ results[i].rdate + "</td><td style='width: 14%;'>"+ results[i].Bpnlty + "</td><td style='width:16%'><input type='button' class='btn btn-success btn-md' onclick='sts("+ (results[i].Iid).substr(2,(results[i].Iid).length) +","+ (results[i].ddif * results[i].Bpnlty) +",0)' style='width:100px;' value='Renew'></td></tr>");
                                }
                                else
                                {
                                        $("#data").append("<tr><td style='width:11%;'>"+ results[i].Iid +"</td><td style='width: 13.2%;'>"+ results[i].Iisby +"</td><td style='width: 11%;'>"+ results[i].Bid +"</td><td style='width: 12%;'>"+ results[i].Lid + "</td><td style='width: 14%;'>"+ results[i].idate +"</td><td style='width: 14%;'>"+ results[i].rdate + "</td><td style='width: 14%;'>"+ results[i].Bpnlty + "</td><td style='width:16%'><input type='button' class='btn btn-info btn-md' onclick='sts("+ (results[i].Iid).substr(2,(results[i].Iid).length) +","+ (results[i].ddif * results[i].Bpnlty) +",1)' style='width:100px;' value='Renewed'></td></tr>");
                                }
                        }
                }
                    
            });
            cn.end();
    
            $("#data").hide();
            $("#data").fadeIn(500);
    }
    function sts(id,pnlt,sts)
    {
        var mysql = require("mysql");
        var cn = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: null,
                database: "db_library"
        });
        cn.connect();
        
        $sql = "Select * from tbl_issue where Iid='IS"+ id +"'";
        cn.query($sql,function(error,results){

                document.getElementById("iid").value=results[0].Iid;
                document.getElementById("bid").value=results[0].Bid;
                document.getElementById("lid").value=results[0].Lid;
        });
        if(sts == 1)
        {
                $("#rnw").attr("hidden","hidden");
                document.getElementById("pnlt").value=0;
        }
        else
        {
                document.getElementById("pnlt").value=pnlt;
                $("#rnw").removeAttr("hidden");
        }
        $("#myModalrenew").modal("show");
    }
    function err(msg)
    {
        $("#myModalerr").modal('show');
        $("#errmsg").text(msg);
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