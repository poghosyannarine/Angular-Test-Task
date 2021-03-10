import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  public personalData: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    allowed: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.personalData.valueChanges.subscribe(res => {
      if (this.personalData.valid) {
        this.router.navigate(['chosen-articles']);
        console.log(res);
      }
    });
  }

}
