import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplayersComponent } from './updateplayers.component';

describe('UpdateplayersComponent', () => {
  let component: UpdateplayersComponent;
  let fixture: ComponentFixture<UpdateplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
