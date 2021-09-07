import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-colaboradores',
  templateUrl: './detalhes-colaboradores.component.html',
  styleUrls: ['./detalhes-colaboradores.component.css']
})
export class DetalhesColaboradoresComponent implements OnInit {
  colaborador: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    const colab = JSON.parse(localStorage.getItem('colaborador')!);
    localStorage.clear();
    this.colaborador = colab;
  }

  alterarDados(colaborador:any){
    localStorage.setItem('colaborador', JSON.stringify(colaborador));
    this._router.navigateByUrl('/dadosColaborador')
  }

}
