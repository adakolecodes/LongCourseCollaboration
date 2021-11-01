document.getElementById("jambscore").style.display ='none';

function showOrHide(){
    var jambstatus = document.getElementById("jambstatus").value;
    
    if(jambstatus = "Yes"){
        document.getElementById("jambscore").style.display ='block';
    }else () {
        document.getElementById("jambscore").style.display ='none';
    }
}