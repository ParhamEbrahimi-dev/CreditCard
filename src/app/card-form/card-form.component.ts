import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: false,
  
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm:FormGroup;

  constructor(){
    this.cardForm=new FormGroup({
      name : new FormControl("Parham Ebrahimi")
    })
  }
}
