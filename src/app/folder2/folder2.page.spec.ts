import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Folder2Page } from './folder2.page';

describe('Folder2Page', () => {
  let component: Folder2Page;
  let fixture: ComponentFixture<Folder2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Folder2Page],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Folder2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
