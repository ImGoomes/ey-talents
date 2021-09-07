import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradoresService } from '../services/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  public colaboradores: any;
  constructor(
    private _service: ColaboradoresService,
    private _router: Router) { }

  ngOnInit(): void {
    this._service.getColaboradores().subscribe(
      (dados) => {
        this.colaboradores = dados;
      });
  }

  detalhes(colaborador: any) {
    localStorage.setItem('colaborador', JSON.stringify(colaborador));
    this._router.navigateByUrl('/detalhes')
  }

}
