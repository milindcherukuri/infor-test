import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  name:string;
  selecttag: string;
  gender: string;
  desc: string;
  constructor() {
      this.name = "milind";
  }


  dbc(app:Array<string>){
    this.name = app[0];
    this.selecttag = app[1];
    this.gender = app[2];
    this.desc = app[3];
  }
}
