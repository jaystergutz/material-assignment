import {Component, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";
import {HttpClient} from "@angular/common/http";
import {Job} from './domain/Job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  pageTitle: String = "";
  format: String = "MMM d, y, h:mm:ss a";


  @ViewChild('jobTitle') jobTitle : ElementRef;


  interval : any;
  job : Job;

  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){

    this.setupToolbarTitle();

    this.bootstrapData();
  }

  private bootstrapData() {
    this.httpClient.get("/assets/config/data.json").subscribe((responseData) =>{
      this.job = <Job>responseData;
    });
  }

  private setupToolbarTitle() {
    this.interval = setInterval(() => {
      let bounding = this.jobTitle.nativeElement.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.pageTitle = "";
      } else {
        this.pageTitle = this.job.jobTitle;
      }
    }, 100);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }


}
