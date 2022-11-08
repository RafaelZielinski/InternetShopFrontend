import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullpageadmin',
  templateUrl: './fullpageadmin.component.html',
  styleUrls: ['./fullpageadmin.component.scss']
})
export class FullpageAdminComponent implements OnInit {

  categorys = ['Kategoria1',
  'Kategoria2', 'Kategoria3', 'Kategoria4'
,'Kategoria5' ]
  constructor() { }

  ngOnInit(): void {
  }

}
