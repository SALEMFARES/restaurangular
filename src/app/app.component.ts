import { Component } from '@angular/core';
import { QuickLunchService } from './services/quick-lunch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor (private q: QuickLunchService) {

   }
  title = 'app';
public voiture = {
  couleur: 'rouge',
  marque: 'bmw'

};


}


