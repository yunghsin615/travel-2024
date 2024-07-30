import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  constructor(private backSvc: BackendService) {}

  ngOnInit(): void {
    // this.getAllData();
  }

  getAllData() {
    let req = { page: 1 };
    this.backSvc.searchAll(req).subscribe((res) => {
      console.log('res', res);
    });
  }
}
