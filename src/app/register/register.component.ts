import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  text: string | undefined;
  text1: string | undefined;
   text2: string | undefined;

  constructor(private router: Router, private fb: FormBuilder, private db: UserService) { }
  registerform = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(4)]],
    lname: ['', [Validators.required, Validators.maxLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    phonecode: ['', [Validators.required]],
    number: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    conformpassword: ['', [Validators.required]]
  })
  ngOnInit(): void {
  }
  getstart(data: any) {
      if (this.registerform.valid) {
        if ((data.password) == (data.conformpassword)) {
        const result = this.db.Register(data).subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.text2 = result.message
             setTimeout(() => {
               this.text2 = undefined
              //  this.router.navigateByUrl('otp1')
            }, 3000);
          }
          // this.router.navigateByUrl('otp')
        }, (result) => {
          // alert(result.error.message)
          this.text2 = result.error.message
           setTimeout(() => {
              this.text2=undefined
            }, 3000);
        })

} else {
          this.text1 = "not fount"
         setTimeout(() => {
              this.text1=undefined
            }, 3000);
      }
      } else {
        this.text = "not valid" 
         setTimeout(() => {
              this.text=undefined
            }, 3000);
        
      }
   
  }

}
