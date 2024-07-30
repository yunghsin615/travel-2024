import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navList: { id: string; name: string }[] = [
    { id: 'data-list', name: '資料列表' },
    { id: 'my-favs', name: '我的最愛' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
