import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  someData = 'hello';
  medias: string[] = [];
  imageFolder = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) { }

  getJSON() {
    this.http.get( 'assets/package.json').subscribe( data => {
      console.log(data);
      this.someData = data.license;
    });
  }
  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe( data => {
      console.log(data);
      this.medias = data;
    });
  }
  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
