import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = [
    { name: '首頁' , url: ''},
    { name: '關於我們', url: 'introduction' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
