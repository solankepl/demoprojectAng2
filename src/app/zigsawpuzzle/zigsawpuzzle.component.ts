import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


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
    private colArr;
    private rowArr;
    private columnWidth;
    private columnHeigh;
    public _self;
    
    
    @ViewChild('sourceImg') elementView:ElementRef;
    
    constructor() { 
        this.zindex = 2;
        this.imgPath = "../assets/images/pavan.JPG";
        this.gamelevel = "easy";
        this.gamelevelObj = {"easy":"5-3","medium":"6-4","hard":"8-6"};
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
            this.columnWidth = this.elementView.nativeElement.offsetWidth / row;
            this.columnHeigh = this.elementView.nativeElement.offsetHeight / col; 
            this.colArr = this.numberConvertIntoArray(col);
            this.rowArr = this.numberConvertIntoArray(row);
    console.log(this.colArr);
    console.log(this.rowArr)
        
       //console.log(columnWidth +"== columnWidth ==" +columnHeigh);
    }
    
    numberConvertIntoArray(num){   
        let newArr = []; 
        for(let i = 0; i< num; i++){
            newArr.push(i); 
        }
         return newArr;  
    }

}
