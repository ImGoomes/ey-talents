import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosColaboradoresComponent } from './dados-colaboradores.component';

describe('DadosColaboradoresComponent', () => {
  let component: DadosColaboradoresComponent;
  let fixture: ComponentFixture<DadosColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosColaboradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
