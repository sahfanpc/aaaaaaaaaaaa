import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
 
  constructor(private router:Router,private db:UserService, private fb:FormBuilder) { }
 forgotform = this.fb.group(
    {
      email: ['', [Validators.required]]
    })
  ngOnInit(): void {
  }
  submit(data: any) {
    console.log(data.email)
    if (this.forgotform.valid) {
      let result = this.db.Submit(data).subscribe((result: any) => {
        if (result) {
          this.router.navigateByUrl('email')
          alert(result.message)
          
        }
        }, (result) => {
          alert(result.error.message)
        })
    } else {
      alert('not valid')
  }
}
}
