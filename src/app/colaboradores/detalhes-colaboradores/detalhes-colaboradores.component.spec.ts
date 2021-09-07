import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesColaboradoresComponent } from './detalhes-colaboradores.component';

describe('DetalhesColaboradoresComponent', () => {
  let component: DetalhesColaboradoresComponent;
  let fixture: ComponentFixture<DetalhesColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesColaboradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
