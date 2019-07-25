import {Compensation} from "./Compensation";


export interface Job {

  jobTitle : String;
  employer : String;
  compensation : Compensation;
  applicationDeadline : String;
  location : String;
  description : String;
  qualifications : String[];
  responsibilities : String[];
  icon : String;


}
