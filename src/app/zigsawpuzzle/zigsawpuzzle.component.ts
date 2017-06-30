import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-zigsawpuzzle',
  templateUrl: './zigsawpuzzle.component.html',
  styleUrls: ['./zigsawpuzzle.component.css']
})
export class ZigsawpuzzleComponent implements OnInit {
    
    private  zindex;
    private  imgPath;
    private  gamelevel;
    private  gamelevelObj;
    private  globalTimer;
    private  totalSeconds;
    private  shuffleRandon;
    private  startGamePopup;
    public _self
    constructor() { 
        this.zindex = 2;
        this.imgPath = "../assets/images/pavan.JPG";
        this.gamelevel = "easy";
        this.gamelevelObj = {"easy":"5-3","medium":"6-4","hard":"8-6"};
        this.globalTimer;
        this.totalSeconds=0;
        this.shuffleRandon=true;
        this.startGamePopup = true;
    }

    ngOnInit() {
    }
    
    startGame(stage){
        this.gamelevel = stage;
        console.log("start= " + this.gamelevel);
        this.startGamePopup = false;
        
        this.plotImg();
        //console.log(row +" == "+ col);
        //loadGame();
    }
    
    plotImg(){
		var row = Number(this.gamelevelObj[this.gamelevel].split("-")[0]);
		var col = Number(this.gamelevelObj[this.gamelevel].split("-")[1]);
        var imgWidth =  $("#arayGigswaPuzzle .sourceImg").width();
	    var imgHeight = $("#arayGigswaPuzzle .sourceImg").height();        
        var columnWidth = imgWidth/row;
	    var columnHeigh = imgHeight/col;	
		//console.log(columnWidth +" == "+ columnHeigh);
        var addJigswaContainer = "<div class='jigswaPuzzle'></div>";	
        $("#arayGigswaPuzzle").append(addJigswaContainer);		
        $(".jigswaPuzzle").css({"width":imgWidth+"px", "height":imgHeight+"px"});
        $("#arayGigswaPuzzle").css({"width":columnWidth*(row+2.3)+"px", "height":columnHeigh*(col+1.3)+"px"});
        this.setSquare(columnWidth,columnHeigh,row,col, this.imgPath);	
        
    }
    
     setSquare(colW,colH,row,column,bgPath){
                var leftPos=0;
                var topPos=0;
                var _self = this;
                for(var i=0;i<column;i++){
                    for(var j =0;j<row;j++){
                        var dropDiv = "<div class='column dropzone' style='width:"+colW +"px;height:"+colH +"px; left:"+leftPos+"px; top:"+topPos+"px;' data-cr='"+i+"_"+j+"'></div>";		
                        var strDrag = "<div class='column draggable' style='width:"+colW +"px;height:"+colH +"px; left:"+leftPos+"px; top:"+topPos+"px; background-image:url("+bgPath+");background-position:"+-1*leftPos+"px"+" "+-1*topPos+"px"+";'data-cr='"+i+"_"+j+"'data-orgX='"+ leftPos +"'data-orgY='"+ topPos +"'></div>";				
                        strDrag += dropDiv
                        $(".jigswaPuzzle").append(strDrag);
                        leftPos +=colW; 
                    }
                    leftPos = 0;
                    topPos +=colH;
                }	
                //removeDuplicate();
                setTimeout(function(){
                    _self.shuffleDraggableItem();	
                }, 1000);
            }
    
    shuffleDraggableItem(){	
        var dragElements = document.querySelectorAll('.draggable');

        var maxL = $(".jigswaPuzzle").width()+($(".column").width()*0.5);
        var minL =  $(".column").width()*0.5;	
        var maxT = $(".jigswaPuzzle").height()//+$(".column").width();
        var minT = 0//$(".column").width();


        var setX = - ($(".column").width()+20);
        var setY = 0;
        var r = Number(this.gamelevelObj[this.gamelevel].split("-")[0]);
        var c = Number(this.gamelevelObj[this.gamelevel].split("-")[1]);

        var setLevelWiseWidth =2.7;
        var setLevelWiseHeight = 6;

        if(this.gamelevel=="medium"){
            setLevelWiseWidth = 3.9;
            setLevelWiseHeight = 4;
        }if(this.gamelevel=="hard"){
            setLevelWiseWidth = 6.5;
            setLevelWiseHeight = 2;
        }	

        var vWidth = dragElements.length-((c*2)+setLevelWiseWidth);		
        var horzantolX = $(".jigswaPuzzle").width()/vWidth;

  

        for (var i=0; i < dragElements.length; i++) {
                var drag = dragElements[i];		
                //$(drag).css({"left":randomX+"px","top":randomY+"px"});
                $(drag).draggable({
                    containment: '#arayGigswaPuzzle',				
                    start: function(event, ui) { $(this).css("z-index", this.zindex++); }								
                });

                if(this.shuffleRandon){
                     console.log(setX +" === "+setY);
                    this.setAnimation($(drag),setX,setY);			
                    if(i<c){
                        setY += $(".column").height()+setLevelWiseHeight;
                    }else if(i<=(dragElements.length-r)){
                        setX += horzantolX;
                    }else{
                        setY -= $(".column").height()+setLevelWiseHeight;
                    }
                }else{
                    var randomN;
                    var randomX = randomN = Math.floor(Math.random() * maxL) - minL;
                    var randomY =  randomN = Math.floor(Math.random() * maxT) - minT;
                        console.log(randomX +" === "+randomY);
                        //this.setAnimation($(drag),randomX,randomY);	
                }			
                $(drag).draggable('enable'); 
        }

        var dropElements = document.querySelectorAll('.dropzone');
        for (var i=0; i < dropElements.length; i++) {
            var drop = dropElements[i];
            $(drop).droppable({
                accept: '.jigswaPuzzle div',
                drop: this.handleDrop,	
                //out: handleOut	
            });
        }		
    }
    
    
    handleDrop(event, ui) {
        var _self = this;
        var dropNumber = $(this).attr('data-cr');
        var dragNumber = ui.draggable.attr('data-cr');
        var dragL = $(this).css("left");
        var dragT = $(this).css("top");
        var dropL = ui.draggable.css("left");
        var dropT = ui.draggable.css("top");

        $(ui.draggable).draggable({
            revert: function (event, ui) {
                if (dragNumber === dropNumber) {
                    $(this).css({
                        "left": dragL,
                        "top": dragT
                    });
                    $(this).draggable('disable');
                    $(this).css("z-index", "1");
                    //_self.checkAns();
                }
            }

        })
    }
    
    
    setAnimation(obj, xPos, yPos) {
        var _self = this;
        obj.animate({
            left: xPos,
            top: yPos
        }, 1000, 'easeInOutElastic', function () {
            // Animation complete.
            _self.timerStart();
        });
    }
    
     checkAns() {
        var dragElements = document.querySelectorAll('.draggable');
        var showAns = false;
        for (var i = 0; i < dragElements.length; i++) {
            var drag = dragElements[i];
            if ($(drag).hasClass("ui-draggable-disabled")) {
                showAns = true;
            } else {
                showAns = false;
                break;
            }
        }
        if (showAns) {
            this.timerStop();
           // this.cheackWin();
        }
    }
    
    timerStop() {
        clearInterval(this.globalTimer);
        this.globalTimer = null;
    }

     timerStart() {
        this.timerStop();
        this.globalTimer = setInterval(this.addTime, 1000);
    }

    addTime() {
        this.totalSeconds++;
        var seconds = this.totalSeconds % 60;//this.addZero(this.totalSeconds % 60);
        var minute = this.totalSeconds / 60;//this.addZero(parseInt(this.totalSeconds / 60));
        var hours = this.totalSeconds / 3600;//this.addZero(parseInt(this.totalSeconds / 3600));
        var curTime = minute + ":" + seconds + " ";
        $(".spanTxt").html(curTime);
    }

     addZero(val) {
        var valString = val + "";
        if (valString.length < 2) {
                return parseInt("0" + valString);
        } else {
            return valString;
        }
    }

}
