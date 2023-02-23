import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  text2: string | undefined;
  
  constructor(private router:Router,private db:UserService,private fb:FormBuilder) { }
 loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  })
  ngOnInit(): void {
  }
  login(data:any) {
   if (this.loginform.valid) {
        const result = this.db.Login(data).subscribe((result: any) => {
          if (result) {
            // alert(result.message)
            this.text2 = result.message
             setTimeout(() => {
               this.text2 = undefined
               this.router.navigateByUrl('complete1')
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
     alert("not valid")
      
        
      }
   
  }

}

