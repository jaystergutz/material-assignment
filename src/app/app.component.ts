import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle: String = "";
  format: String = "MMM d, y, h:mm:ss a";

  job = {
    jobTitle: "Web Designer",
    employer: "Yoda Inc.",
    // icon: "../../assets/img/sample_employer_icon.png",
    icon : "https://github.com/gjester18/material-assignment/blob/master/src/assets/img/sample_employer_icon.png?raw=true",
    compensation: {
      type: "Monthly",
      amount: 1500
    },
    applicationDeadline: "2018-11-01T09:00:00.000Z",
    location: "Mountain View",
    description: `We are a new Fast Casual Restaurant here in the Dhaka on the corner 
    of Gulshan ave! We have a few more positions left for energetic, enthusiastic web designer
     to work full time for the restaurant. Please carefully review the following qualifications and
     responsibilities before submitting an application.`,
    qualifications: ["3 years relevant work experience required",
      "High school or higher level of education",
      "Speak English",
      "Professional reference needed"],

    responsibilities: ["A web designer/developer is responsible for the design, layout and coding of a website.",
      "They are involved with the technical and graphical aspects of a website; how the site works and how it looks. ",
      "They can also be involved with the maintenance and update of an existing site."]
  };

  @ViewChild('jobTitle') jobTitle : ElementRef;
  interval : any;

  ngOnInit(){
    this.interval = setInterval(()=>{
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
    },100);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }


}
