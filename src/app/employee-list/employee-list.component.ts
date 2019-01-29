import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee-list';
import { employeeService } from './employee-list.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[employeeService]
})
export class EmployeeListComponent implements OnInit {
	toggle:boolean=true;
	
	
	widsize=50;
	heisize=50;
	allat:string='abc def';
		employees:IEmployee[];

	
constructor(private employeeService: employeeService){
	

   
} 
ngOnInit(){
	  this.employees = this.employeeService.getEmployees(); 
}


   onclick1():void {	
this.toggle=!this.toggle;
	
}
getTotalEmployeeCount():number {
	return this.employees.length;
}

getTotalMaleEmployeeCount():number {
	return this.employees.filter(e =>e.gender=='male').length;
}

getTotalFemaleEmployeeCount():number {
	return this.employees.filter(e =>e.gender=='female').length;
}

}
