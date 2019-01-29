import { Injectable } from '@angular/core';
import { IEmployee } from './employee-list';


@Injectable()


export class employeeService {
	getEmployees(): IEmployee[] {
		return [	
		
      { code:'emp001', name:'srinivas', gender:'male', annualsalary:6000, dob:'01-01-1994' ,url:'https://indiagateway.net/images/urp.png'},
      { code:'emp002', name:'kandlikar', gender:'male', annualsalary:5000, dob:'01-01-1994',url:'https://indiagateway.net/images/urp.png' },
      { code:'emp003', name:'staffy', gender:'female', annualsalary:5000, dob:'01-21-2015',url:'https://indiagateway.net/images/urp.png' }, 
      { code:'emp004', name:'raveena', gender:'female', annualsalary:5000, dob:'11-01-2015' ,url:'https://indiagateway.net/images/urp.png'}, 
      { code:'emp005', name:'dhruv', gender:'male', annualsalary:5000, dob:'11-01-2008' ,url:'https://indiagateway.net/images/urp.png'},
      { code:'emp006', name:'sandhya', gender:'female', annualsalary:50000, dob:'11-01-1975',url:'https://indiagateway.net/images/urp.png' },
      { code:'emp007', name:'aashu', gender:'female', annualsalary:1000, dob:'02-07-2006',url:'https://indiagateway.net/images/urp.png'}
		];
		
	}

	
}