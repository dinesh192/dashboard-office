import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollaboratorComponent } from './list-collaborator.component';

describe('ListCollaboratorComponent', () => {
  let component: ListCollaboratorComponent;
  let fixture: ComponentFixture<ListCollaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCollaboratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
