import { Component, inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModules } from 'src/app/modules/ionic.module';

@Component({
  selector: 'app-folder1',
  templateUrl: './folder1.page.html',
  styleUrls: ['./folder1.page.scss'],
  standalone: true,
  imports: [IonicModules]
})

export class Folder1Page implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}

