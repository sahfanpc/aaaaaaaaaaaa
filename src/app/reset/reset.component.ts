import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
 token:any
  constructor(private router:Router,private db:UserService,private fb:FormBuilder,private activeroute:ActivatedRoute) { }
 resetform = this.fb.group(
    {
      password: ['', [Validators.required]]
    })
  ngOnInit(): void {
      this.token = this.activeroute.snapshot.queryParamMap.get('token')
    console.log(this.token)
  }
  submit(data: any) {
    console.log(data.password)
  const token=this.token
    if (this.resetform.valid) {
      this.db.Reset(token,data).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl('login')
          }
        }, (result) => {
          alert(result.error.message)
        }
      )

    } else {
      alert('not valid')
    }
    
}
}
