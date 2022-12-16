import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Building } from 'src/app/model/building';

@Component({
  selector: 'app-builing-form',
  templateUrl: './builing-form.component.html',
  styleUrls: ['./builing-form.component.scss']
})
export class BuilingFormComponent implements OnInit {

  model: Building = new Building(0, 'nnaammee', 'ddeesscc');

  submitted = false;

  onSubmit() {
    this.submitted = true;

  }

  constructor() { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = new Building(42, '', '');
  }

  name = new FormControl('', [Validators.required, Validators.min(2)]);
  desc = new FormControl('sd', [Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Nazwa jest obowiązkowa';
    }
    return 'hw'
  }


}
