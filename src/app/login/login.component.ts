import { Component, OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl} from '@angular/forms';
import {Router} from'@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() d="";

  constructor(private http:HttpClient,private r:Router) { 
    
  }

  ngOnInit() {
  }

 

//getting values from form
data = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
// d=this.data.email

   //insert the value to database
   add(){
     var v=[];
    console.log(this.data.value)
      this.http.post("http://localhost:3000/login",this.data.value)
      .subscribe(
        (data:any)=>{ 
        alert(data.mess);
         v.push(data.mess)
        // console.log(v)
      }, error => {
          console.log(error);
      } 
      )

      if(v[0]=="welcome"){
        this.r.navigate(['/dashbord'])   
      }
      console.log(v)
    }

}
