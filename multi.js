function selAll(){
    var chk=document.f1.selall.checked;
    alert(chk);
    alert(document.f1.vehicle.length);
    for(i=0;i<document.f1.vehicle.length;i++){
        document.f1.vehicle[i].checked=chk;
    }
}