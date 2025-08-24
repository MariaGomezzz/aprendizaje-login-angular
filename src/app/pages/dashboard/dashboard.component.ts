import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Variable para simular el estado de inicio de sesión del usuario
  userLoginOn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
