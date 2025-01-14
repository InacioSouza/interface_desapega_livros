import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDetailComponent } from './livro-detail.component';

describe('LivroDetailComponent', () => {
  let component: LivroDetailComponent;
  let fixture: ComponentFixture<LivroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
