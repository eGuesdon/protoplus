import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class RootComponent {
  
  welcomeMsg : string = 'Bienvenu sur Proto';
  welcomeMsgPlus : string = '+' ;

}