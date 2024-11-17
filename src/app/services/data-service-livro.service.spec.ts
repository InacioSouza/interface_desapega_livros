import { TestBed } from '@angular/core/testing';

import { DataLivroService } from './data-livro.service';

describe('DataServiceLivroService', () => {
  let service: DataLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
