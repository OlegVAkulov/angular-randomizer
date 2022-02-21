import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {User} from './user';
import { stringify } from 'querystring';
   
@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
})
export class AppComponent implements OnInit { 

    users: User [] = [];
    // users: [];

    yellowTeam: string="yellow";
    redTeam: string="red";
    blueTeam: string="blue";
 
    constructor(private http: HttpClient){}

    // ngOnInit(){
          
    //     // this.http.get('assets/users.json').subscribe((data:any) => this.users=data.total);
    //     // this.http.get<User>('http://35.203.40.103:8080/randomizer/start-random').subscribe(data => {this.users=JSON.parse(JSON.stringify(data));})

    //     this.http.get<any>('assets/users.json').subscribe(data => {
    //       this.users = data.total;
    //   })   
    // }

  //   demo: string = `<div>
  //   <p>I am Yogesh</p>
  //  <h1>My First Heading</h1>
  //  <p>My first paragraph.</p>
  //    </div>`

  // demo: string = this.http.get<string>('assets/users.json')

  demo : string;
  // const regex = /body>\s*(.*)\s*<\/body/; 
  // regex = "body>\s*(.*)\s*<\/body";




    ngOnInit()    {
      this.http.get('http://35.203.40.103:8080/randomizer/start-random', {
        headers: new HttpHeaders({
          'Content-Type': 'text/html;charset=UTF-8'
        }),
        responseType: 'text'
      } ).subscribe( response => {
        const regex = /body>\s*(.*)\s*<\/body/;
        var match = regex.exec(response);
        // console.log(JSON.parse(JSON.stringify(match[1].replace(/&#034;/gi, '"'))));
        this.users = <User[]>JSON.parse(match[1].replace(/&#034;/gi, '"'));
        // JSON.stringify
      })
    }



      // this.http.get
      // this.http.get<any>('http://35.203.40.103:8080/randomizer/start-random')
      // .subscribe(
      //     data=>
      //   {
      //     this.demo = data;
      //   }
      // )
      // const regex = /body>\s*(.*)\s*<\/body/;
      // var match = regex.exec(this.demo);
      // console.log(match[1]);
      // ngOnInit()    {
      //   this.http.get<any>('http://35.203.40.103:8080/randomizer/start-random')
      //   .subscribe(
      //       data=>
      //     {
      //       this.demo = JSON.parse(JSON.stringify(data));
      //       console.log("fff");
      //     }
      //   )

    // demo : string [];

    // ngOnInit()    {
      
    //   this.http.get<any>('http://35.203.40.103:8080/randomizer/start-random')
    //   .subscribe(
    //       data=>
    //     {
    //       this.demo = data.total;
    //     }
    //   )
  // }
}