import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  sideBar: boolean = false;
  toggleSideBar = () => (this.sideBar = !this.sideBar); // Toggle sidebar when click on button

  ngOnInit(): void {}
}
