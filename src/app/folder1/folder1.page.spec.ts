import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Folder1Page } from './folder1.page';

describe('Folder1Page', () => {
  let component: Folder1Page;
  let fixture: ComponentFixture<Folder1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Folder1Page],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Folder1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
