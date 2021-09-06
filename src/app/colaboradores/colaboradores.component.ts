import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from '../services/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  public colaboradores: any;
  constructor(private _service: ColaboradoresService) { }

  ngOnInit(): void {
    this._service.getColaboradores().subscribe(
      (dados) => {
        this.colaboradores = dados;
        console.log(this.colaboradores);

      });
  }

}
