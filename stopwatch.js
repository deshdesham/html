var hr=0;
var min=0;
var sec=0;
var count=0;
let watch=false;

function start(){
    watch=true;
    stopwatch();
}

function stop(){
    watch=false;

}

function reset(){
    watch=false;
    hr=0;
    min=0;
    sec=0;
    count=0;

        document.querySelector(".hr").innerHTML="00";
        document.querySelector(".min1").innerHTML="00";
        document.querySelector(".sec1").innerHTML="00";
        document.querySelector(".couter").innerHTML="00";
}

function stopwatch(){
    if(watch==true){
        count++;
        if(count==100){
            count=0;
            sec=sec+1;
        }
            if(sec==60){
                sec=0;
                min=min+1;
            }
                if(min==60){
                    min=0;
                    hr=hr+1;
                }
                var hrstring=hr;
                var minstring=min;
                var secstring=sec;
                var countstring=count;
                
                if(hr<10){
                    hrstring="0"+hrstring;
                }
                if(min<10){
                    minstring="0"+minstring;
                }
                if(sec<10){
                    secstring="0"+secstring;
                }
                if(count<10){
                    countstring="0"+countstring;
                }

        document.querySelector(".hr").innerHTML=hrstring;
        document.querySelector(".min1").innerHTML=minstring;
        document.querySelector(".sec1").innerHTML=secstring;
        document.querySelector(".couter").innerHTML=countstring;

        setTimeout("stopwatch()",10);
            }
}