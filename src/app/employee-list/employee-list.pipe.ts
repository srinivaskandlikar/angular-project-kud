  import { Pipe ,PipeTransform } from '@angular/core';
  
  @Pipe({
	  name:'EmployeelistPipe',
  })
  
  
  export class EmployeelistPipe implements PipeTransform {  
	  transform(value:string, gender:string): string {
		  
		  if(gender == 'male') {
			  return 'Mr.' + value;
		    }
		  else {
			  return 'Miss.' + value;
		  }
	  }
	  
	  
  }