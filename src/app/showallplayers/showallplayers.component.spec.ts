import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallplayersComponent } from './showallplayers.component';

describe('ShowallplayersComponent', () => {
  let component: ShowallplayersComponent;
  let fixture: ComponentFixture<ShowallplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
