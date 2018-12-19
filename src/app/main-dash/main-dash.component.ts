import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../modeles/food.interface';
@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [ 
  
          { title: 'Burgers', cols: 2, rows: 1, id: 'brg' },
          { title: 'Galettes/crepes', cols: 2, rows: 1, id: 'glt' },
          { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' }
        ];
      
          burgers: Food [];
             pizzas: Food [];
galettes: Food [];

  constructor(private qls: QuickLunchService) {}

  
    ngOnInit () {
      this.burgers = this.qls.getBurgers();
      this.pizzas = this.qls.getPizzas();
      this.galettes = this.qls.getGalettes();
    }
  }

