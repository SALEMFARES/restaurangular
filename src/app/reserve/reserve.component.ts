import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cc-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
 reservationForm: FormGroup;
 date = new Date();

 timeOptions = ["12:00","12:30", "13:00", "13:30","19:00", "19:30" , "20:00", "20:30"];
peopleOptions = [1,2,3,4,5,6,7,8];

isScheduleOK = false;
client = { firstName: '', lastName: '', email:'', phone:''};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
createForm() {
  this.reservationForm = this.fb.group({
    date: new Date(),
    time: "",
    people: 1
  });
}

saveReservation() {
  if(this.reservationForm.valid) {
    console.log(this.saveReservation);
    this.isScheduleOK = true;
  }
}
  finalizeReservation(form) {
    if (form.valid) {
      console.log('valid!')
    console.log(form.value);
    console.log(form);
}
  }}
