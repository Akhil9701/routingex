import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  btnSubmitClick(empFrm) {
    let frmValid: boolean
    frmValid=empFrm.valid
    if (frmValid == true)
      alert('Login success')
    else
      alert("Invalid id & password ")
  }

  ngOnInit() {
  }

}
  