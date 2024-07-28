import { Component, inject, OnInit } from '@angular/core';

import { IonicModules } from 'src/app/modules/ionic.module';

@Component({
  selector: 'app-folder2',
  templateUrl: './folder2.page.html',
  styleUrls: ['./folder2.page.scss'],
  standalone: true,
  imports: [IonicModules]
})
export class Folder2Page implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }
}
