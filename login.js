
    function valid()
     {
        var retnval=true;
        if(document.f1.t1.value==""){
            alert("Please Enter the user name??");
            document.f1.t1.focus();
            retnval=false; }
        else if(document.f1.t2.value==""){
            alert("Please Enter Password");
            document.f1.t2.focus();
            retnval=false;}
        return retnval;    
    }
