import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  card=[];
  constructor(private http:HttpClient) { 

    this.http.get("http://localhost:3000/afterlogin")
      .subscribe(
        (data)=>{
        console.log(data)
        this.card.push(data)
      }
      )
  }


  ngOnInit() {
  }
 
  ngonchange(){
    
  }

 

}
