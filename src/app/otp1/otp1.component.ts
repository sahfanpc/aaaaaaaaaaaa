import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-otp1',
  templateUrl: './otp1.component.html',
  styleUrls: ['./otp1.component.css']
})
export class Otp1Component implements OnInit {
  token: any;
  constructor(private router:Router, private fb:FormBuilder, private db:UserService,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activeroute.snapshot.queryParamMap.get('token')
    console.log(this.token)
  }
  verify() {
    this.db.Verify(this.token).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl('login')
        }
      }, (result) => {
        alert(result.error.message)
    }
  )
}
}
