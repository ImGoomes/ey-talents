import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-colaboradores',
  templateUrl: './detalhes-colaboradores.component.html',
  styleUrls: ['./detalhes-colaboradores.component.css']
})
export class DetalhesColaboradoresComponent implements OnInit {
  colaborador: any;

  constructor() { }

  ngOnInit(): void {
    const colab = JSON.parse(localStorage.getItem('colaborador')!);
    localStorage.clear();
    this.colaborador = colab;
  }

}
