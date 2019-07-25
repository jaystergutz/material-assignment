import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnChanges {

  @Input() title : String;

  @ViewChild(MatToolbar) myToolBar : MatToolbar;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.title !== ""){
      this.myToolBar._elementRef.nativeElement.style.boxShadow = "0 0.5px 2px";

    }
    else{
      this.myToolBar._elementRef.nativeElement.style.boxShadow = "";
    }
  }



}
