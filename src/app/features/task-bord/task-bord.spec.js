import { TestBed } from '@angular/core/testing';
import { TaskBord } from './task-bord';

describe('TaskBord', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBord],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskBord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
