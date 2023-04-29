import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomPostsComponent } from './classroom-posts.component';

describe('ClassroomPostsComponent', () => {
  let component: ClassroomPostsComponent;
  let fixture: ComponentFixture<ClassroomPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
