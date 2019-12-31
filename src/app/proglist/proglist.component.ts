import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proglist',
  templateUrl: './proglist.component.html',
  styleUrls: ['./proglist.component.css']
})
export class ProglistComponent implements OnInit {
  list;
  revenue=[];
  constructor(private s:CommonService,private http:HttpClient) {

    this.http.get("http://localhost:3000/proglist")
    .subscribe(
      (data)=>{
        this.list=data;
        this.list.map(el=>{this.revenue.push((el.endtime-el.starttime)*el.rate)})
        this.list.map((el,idx)=>{el["rev"]=this.revenue[idx]})
        // this.list[0]["rev"]=this.revenue[0]
        // console.log( this.list[1])

    })
  }
  
   del(j){
     this.http.post("http://localhost:3000/del",j)
     .subscribe();
     


   }


  ngOnInit() {
  }
  
 

  

}
