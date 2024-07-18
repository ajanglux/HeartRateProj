import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder2',
  templateUrl: './folder2.page.html',
  styleUrls: ['./folder2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Folder2Page implements OnInit {
  public appPages = [
    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Measure Vital Signs', url: '/folder/Vital Signs', icon: 'heart' },
    { title: 'Results', url: '/folder1/Results', icon: 'archive' },
    // { ltitle: 'Logout', url: '/folder/', icon: '' },

  ];

  constructor() { }

  ngOnInit() {
  }

}
