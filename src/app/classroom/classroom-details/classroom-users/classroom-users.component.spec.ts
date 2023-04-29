import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomUsersComponent } from './classroom-users.component';

describe('ClassroomUsersComponent', () => {
  let component: ClassroomUsersComponent;
  let fixture: ComponentFixture<ClassroomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
