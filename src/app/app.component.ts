import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

/*  template:'<h1> hi srinivas kandlikar im from tamplete </h1>', */ /*one line template*/

/*  template:'<h1> hi srinivas kandlikar 
im from tamplete </h1>', */ /*throws an error should be in single line in single quotes*/

/*   template:`<h1> hi srinivas kandlikar 
im from tamplete </h1>`, */
 /*should use back tick for multiple line code in template */
    
	templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
 

}
