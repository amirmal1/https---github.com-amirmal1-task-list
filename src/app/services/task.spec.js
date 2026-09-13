import { TestBed } from '@angular/core/testing';
import { Task } from './task';

describe('Task', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
