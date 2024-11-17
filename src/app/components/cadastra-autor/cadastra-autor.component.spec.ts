import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAutorComponent } from './cadastra-autor.component';

describe('CadastraAutorComponent', () => {
  let component: CadastraAutorComponent;
  let fixture: ComponentFixture<CadastraAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
