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
        $sql = "Select Bid from tbl_book Order By Bid DESC LIMIT 1";
        cn.query($sql,function(error,results,fields){
                
                no=parseInt((results[0].Bid).substr(1,(results[0].Bid).length));
                $("#bid").attr("value","B"+ (no+1) +"");
        });
        cn.end();
        $("#prc").keypress(function(e){
        
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        check("Only Number Valid Is Not Valid!!","380px");
                        e.preventDefault();
                }
                else if($("#prc").val().length > 2)
                {
                        check("Length Must Less Than Or Equal 3!!","380px");
                        e.preventDefault();
                }
                else
                        $("#alert").addClass("hidden");
        });

        $("#qty").keypress(function(e){
        
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        check("Only Number Valid Is Not Valid!!","380px");
                        e.preventDefault();
                }
                else if($("#qty").val().length > 2)
                {
                        check("Length Must Less Than Or Equal 3!!","380px");
                        e.preventDefault();
                }
                else
                        $("#alert").addClass("hidden");
        });
        $("#pnlty").keypress(function(e){
        
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
                {
                        check("Only Number Valid Is Not Valid!!","430px");
                        e.preventDefault();
                }
                else if($("#pnlty").val().length > 1)
                {
                        check("Length Must Less Than Or Equal 2!!","430px");
                        e.preventDefault();
                }
                else
                        $("#alert").addClass("hidden");
        });
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
        window.location.href="./add_book.html";
    });
});

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
        if($("#bname").val() == '' || $("#bname").val().length >20)
                check("Book Name Is Not Valid!!","130px");
        else if($("#auth").val() == '')
                check("Auther Name Is Not Valid!!","330px");
        else if($("#prc").val() == '' || $("#prc").val().length>3)
                check("Price Is Not Valid Is Not Valid!!","380px");
        else if($("#qty").val() == '' || $("#qty").val().length > 3)
                check("Quantity Is Not Valid Is Not Valid!!","380px");
        else if($("#pnlty").val() == "" || $("#pnlty").val().length > 2)
                check("Panelty Price Is Not Valid!!","430px");
        else
        {       
                var sm=$('input[type=radio][name=stdsem]:checked').val();
                
                var mysql = require("mysql");
                var cn = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: null,
                  database: "db_library"
                });

                cn.connect();
                $sql = "INSERT INTO tbl_book(Bid,Badid,Bchid,Bname,Bcourse,Bsem,Bauther,Bprice,Bqty,Bpnlty,Bstatus) VALUES ('"+ $("#bid").val() +"','"+ localStorage.getItem("uid") +"','"+ localStorage.getItem("uid") +"','"+ $("#bname").val() +"','"+ ($("#stdyear").val() + $("#stdlist").val()) +"',"+ sm +",'"+ $("#auth").val() +"',"+ $("#prc").val() +","+ $("#qty").val() +","+ $("#pnlty").val() +",1)";
                cn.query($sql,function(error,results,fields){

                });
            cn.end();
            $('#myModal').modal('show');
            document.getElementById("frm").reset();
        }
}