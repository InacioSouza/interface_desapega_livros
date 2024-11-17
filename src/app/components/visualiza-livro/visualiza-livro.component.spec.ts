import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaLivroComponent } from './visualiza-livro.component';

describe('VisualizaLivroComponent', () => {
  let component: VisualizaLivroComponent;
  let fixture: ComponentFixture<VisualizaLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
