import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  numberToDisplay = '';
   standard = {
    firstName: 'Benjamain' ,
    lastName: 'Glouton' ,
    role:'Accueil' ,
    award: '',
    phoneNumber: '02-99-99-99-01'
   };

   sommelier = {
    firstName: 'Fares' ,
    lastName: 'Salem' ,
    role:'Sommelier' ,
    award: 'Meilleur Ouvrier de france 2015',
    phoneNumber: '02-99-99-99-98'
   };

   boucher = {
    firstName: 'sebestien' ,
    lastName: 'Glodhyn' ,
    role:'Boucher' ,
    award: 'meilleur ouvrier de france 2002',
    phoneNumber: '02-99-99-99-01'
   };
  constructor() { }

  ngOnInit() {
  }
displayBig(telephoneNumber) {
  console.log(telephoneNumber);
  this.numberToDisplay = telephoneNumber;
}

}
