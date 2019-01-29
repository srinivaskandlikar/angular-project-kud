import { Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
	name:string='srinivas kandlikar';
  columnspan:number=2;
  fname:string='srinivas';
  lname:string='kandlikar';
  gender:string='male';
  age:number=25;
  showDetails: boolean = false;
  all:string='abc def';
  imgpath:string='http://www.pragimtech.com/Images/Logo.JPG';
  width:number=200;
showimage:boolean=false;
isdisabled:boolean=true;
allclasses:string='abcbgcolor abccolr';
isBold:boolean=true;
fontSize:number=30;
isItalic:boolean=true;
showalldetails:boolean=false;


allabc():string{
	return this.fname +this.lname;
}
/*calling a method*/
  

toggleDetails1():void {
	this.showDetails=!this.showDetails; 
}

onclick():void {
	console.log('im clicked');
}

btnclick():void{
  console.log('im clicked ');
}
 toggledetailsall():void {
  this.showalldetails = !this.showalldetails;
 }
 
 
 addStyles(){
	  let styles = {
		'font-size.px': this.fontSize,
		'font-style': this.isItalic,
		'font-weight': this.isBold ? 'bold' :'normal'
		
	 };
	 return styles;
	 
 }

}

