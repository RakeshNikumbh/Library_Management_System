
document.write("<nav class='navbar navbar-inverse'>");
document.write("<div class='container-fluid'>");
document.write("<div class='navbar-header'>");
document.write("<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>");
document.write("<span class='icon-bar'></span><span class='icon-bar'></span>");
document.write("<span class='icon-bar'></span>");
document.write("</button>");
document.write("<a class='navbar-brand' href='Home.html'>");
document.write("</a>");
document.write("</div>");
document.write("<div class='collapse navbar-collapse' id='myNavbar'>");
document.write("<ul class='nav navbar-nav'>");

document.write("<li>");
document.write("<a class='navfont' style='width:100px;margin-left:25px;' href='./Home.html'><span class='ion-ios-home'></span> Home</a>");
document.write("</li>");

document.write("<li class='dropdown'>");
document.write("<a class='navfont dropdown-toggle' data-toggle='dropdown' style='width:170px;margin-left:20px;' href='#'><span class='ion-person'></span> Administator <span class='caret'></span></a>");

document.write("<ul class='dropdown-menu menu'>");
document.write("<li><a style='color: #9d9d9d;' href='./add_stud.html'><span class='ion-person-add'></span>  Add New Student</a></li>");
document.write("<li><a style='color: #9d9d9d;' href='./dis_stud.html'><span class='ion-person-stalker'></span>  Display All Students</a></li>");
document.write("<li><a style='color: #9d9d9d;' href='./add_book.html'><span class='ion-ios-book'></span>  Add New Book</a></li>");
document.write("<li><a style='color: #9d9d9d;' href='./dis_book.html'><span class='ion-ios-book'></span>  Display Books</a></li>");

document.write("</ul>");

document.write("</li>");

document.write("<li>");
document.write("<a class='navfont' style='width:150px;margin-left:20px;' href='./book_issue.html'><span class='ion-ios-book'></span> Book Issue</a>");
document.write("</li>");

document.write("<li class='dropdown'>");
document.write("<a class='navfont' dropdown-toggle' data-toggle='dropdown' style='width:170px;margin-left:20px;' href='#'><span class='ion-ios-book'></span> Book Return <span class='caret'></span></a>");

document.write("<ul class='dropdown-menu menu'>");
document.write("<li><a style='color: #9d9d9d;' href='./book_return.html'> Book Renew/Submit</a></li>");
document.write("<li><a style='color: #9d9d9d;' href='./dis_payments.html'> Display Payments</a></li>");
document.write("</ul>");

document.write("</li>");

if(localStorage.getItem("uid") == "1")
{
    document.write("<li>");

    document.write("<a class='navfont dropdown-toggle' data-toggle='dropdown' style='width:190px;margin-left:20px;' href='#'><span class='ion-person'></span> Sub Admin <span class='caret'></span></a>");
    document.write("<ul  style='width:190px;' class='dropdown-menu menu'>");
    document.write("<li><a style='color: #9d9d9d;' href='./add_subaddmin.html'><span class='ion-person-add'></span>  Add New SubAdmin</a></li>");
    document.write("<li><a style='color: #9d9d9d;' href='./dis_subadmin.html'><span class='ion-person-stalker'></span>  Display All SubAdmin</a></li>");
    
    document.write("</ul>");

    document.write("</li>");
}

document.write("</ul>");

document.write("<ul class='nav navbar-nav navbar-right'>");
document.write("<li style=''><a class='navfont' style='pointer-events:none;cursor:defualt;color:#008000;' href='./add_subaddmin.html'><i style=';margin-right:5px;' class='ion-person'></i>" + localStorage.getItem("uname") + "</a></li>");
document.write("<li><a class='navfont' id='logout' href='index.html'><i style='margin-right:5px;' class='ion-log-out'></i> Logout</a></li>");
document.write("</ul>");
document.write("</div>");
document.write("</div>");
document.write("</nav>");