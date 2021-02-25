import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTreeviewComponent } from './mui-treeview.component';

describe('MuiTreeviewComponent', () => {
  let component: MuiTreeviewComponent;
  let fixture: ComponentFixture<MuiTreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiTreeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
