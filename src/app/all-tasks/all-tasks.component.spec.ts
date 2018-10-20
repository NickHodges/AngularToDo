import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTasksComponent } from './all-tasks.component';

describe('AllTasksComponent', () => {
  let component: AllTasksComponent;
  let fixture: ComponentFixture<AllTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
