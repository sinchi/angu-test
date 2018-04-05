import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {ConnectionBackend, Http,  HttpModule} from '@angular/http';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [TodoService, Http, ConnectionBackend]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
