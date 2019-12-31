import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl} from '@angular/forms';
import { CommonService } from "../common.service";

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  
  constructor(private http:HttpClient,private s:CommonService ) {
  }

  ngOnInit() {
  }

  //getting values from form
  data = new FormGroup({
   Name: new FormControl(''),
    ClientPhoneNumber: new FormControl(''),
    Email: new FormControl(''),
    password:new FormControl(''),
    rate: new FormControl(''),
    starttime: new FormControl(''),
    endtime:new FormControl(''),
  });
  
  revenue=this.data.value.starttime-this.data.value.endtime
  
  
  // console.log(revenue)

  //insert the value to database
  add(){
    // console.log(this.data.value.starttime)
      this.http.post("http://localhost:3000/data",this.data.value)
      .subscribe(
        (data:any)=>{
        alert(data.mess);
        // console.log(data)
      }, error => {
          console.log(error);
      }
      )

      this.s.list.push(this.data.value)
      console.log( this.s.list)
    }

    fun(){
      console.log(this.revenue)
    }

}
