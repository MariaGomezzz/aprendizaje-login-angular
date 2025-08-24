import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // Variable para simular el estado de inicio de sesión del usuario
  userLoginOn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
