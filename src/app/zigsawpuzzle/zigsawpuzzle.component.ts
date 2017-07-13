import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


declare var $:any;

@Component({
  selector: 'app-zigsawpuzzle',
  templateUrl: './zigsawpuzzle.component.html',
  styleUrls: ['./zigsawpuzzle.component.css']   
})
export class ZigsawpuzzleComponent implements OnInit {
    
    private zindex;
    private imgPath;
    private gamelevel;
    private gamelevelObj;
    private globalTimer;
    private totalSeconds;
    private shuffleRandon;
    private startGamePopup;
    private colArr;
    private rowArr;
    private columnWidth;
    private columnHeigh;
    private imageWidth;
    private imageHeight;
    private widthDragArea;
    private heightDragArea;
    public _self;
    
    
    @ViewChild('sourceImg') elementView:ElementRef;
    
    constructor() { 
        this.zindex = 2;
        this.imgPath = "../assets/images/pavan.JPG";
        this.gamelevel = "easy";
        this.gamelevelObj = {"easy":"3-3","medium":"5-3","hard":"7-5"};
        this.globalTimer;
        this.totalSeconds=0;
        this.shuffleRandon=true;
        this.startGamePopup = true;
        this.colArr =[];
        this.rowArr=[];
    }

    ngOnInit() {
        
    }
    
    startGame(stage){
        this.gamelevel = stage;
       // console.log("start= " + this.gamelevel);
        this.startGamePopup = false;
       
        this.plotImg();
        
    }
    
    plotImg() {
        let col = this.gamelevelObj[this.gamelevel].split("-")[0];
        let row = this.gamelevelObj[this.gamelevel].split("-")[1];
            this.imageWidth = this.elementView.nativeElement.offsetWidth;
            this.imageHeight = this.elementView.nativeElement.offsetHeight;
            this.widthDragArea =  this.imageWidth  + 450;
            this.heightDragArea =  this.imageHeight +100;
            this.columnWidth = this.imageWidth / row;
            this.columnHeigh = this.imageHeight / col; 
            this.colArr = this.numberConvertIntoArray(col);
            this.rowArr = this.numberConvertIntoArray(row);
      
            setTimeout(() => {
                this.shuffleDraggableItem();
            }, 1000);      
      
    }
    
    numberConvertIntoArray(num){   
        let newArr = []; 
        for(let i = 0; i< num; i++){
            newArr.push(i); 
        }
         return newArr;  
    }
    
    shuffleDraggableItem(){
       let dragElements = document.querySelectorAll('.draggable');
        let _self = this;   
        for(var i = 0; i < dragElements.length; i++) {
                let drag = dragElements[i];

                $(drag).draggable({
                    containment: '#arayGigswaPuzzle',
                    start: function (event, ui) {
                        $(this).css("z-index", this.zindex++);
                    }
                }); 

                let setX = this.getRandomNum(this.imageWidth);
                let setY = this.getRandomNum(this.imageHeight);                
                this.setAnimation($(drag), setX, setY);
           }
        
        
         let dropElements = document.querySelectorAll('.dropzone');
            for (var i = 0; i < dropElements.length; i++) {
                let drop = dropElements[i];
                $(drop).droppable({
                    accept: '.jigswaPuzzle div',
                    drop: _self.handleDrop,
                    //out: handleOut	
                });
            }

        
    }
    
    
    handleDrop(event, ui) {
        let dropNumber = $(this).attr('data-cr');
        let dragNumber = ui.draggable.attr('data-cr');
        let dragL = $(this).css("left");
        let dragT = $(this).css("top");
        let dropL = ui.draggable.css("left");
        let dropT = ui.draggable.css("top");
        //let _self = this;
        $(ui.draggable).draggable({
            revert: function (event, ui) {
                if (dragNumber === dropNumber) {
                    $(this).css({
                        "left": dragL,
                        "top": dragT
                    });
                    $(this).draggable('disable');
                    $(this).css("z-index", "1");
                    /*if(dragL == (dropL-5)){
                        console.log(ui.draggable);  
                     }*/
                   // checkAns();
                }
            }

        })
    }
    
    public checkAns() {
        let dragElements = document.querySelectorAll('.draggable');
        let showAns = false;
        for (var i = 0; i < dragElements.length; i++) {
            let drag = dragElements[i];
            if ($(drag).hasClass("ui-draggable-disabled")) {
                showAns = true;
            } else {
                showAns = false;
                break;
            }
        }
        if (showAns) {
            console.log("end game");
            //timerStop();
            //cheackWin();
        }
    }
    
    
    
    
    setAnimation(obj, xPos, yPos) {
        obj.animate({
            left: xPos,
            top: yPos
        }, 1000, 'easeInOutElastic', function () {
            // Animation complete.
            //timerStart();
        });
    }
    
    getRandomNum(maxNum){
      return Math.floor((Math.random()*maxNum));
    }
    

}
