import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBirthdayComponent } from './widget-birthday.component';

describe('WidgetBirthdayComponent', () => {
  let component: WidgetBirthdayComponent;
  let fixture: ComponentFixture<WidgetBirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetBirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
