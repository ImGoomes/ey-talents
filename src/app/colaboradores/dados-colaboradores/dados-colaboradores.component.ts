import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColaboradoresService } from 'src/app/services/colaboradores.service';

@Component({
  selector: 'app-dados-colaboradores',
  templateUrl: './dados-colaboradores.component.html',
  styleUrls: ['./dados-colaboradores.component.css']
})
export class DadosColaboradoresComponent implements OnInit {
  public colaborador: any;
  public dadosForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _service: ColaboradoresService,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.colaborador = JSON.parse(localStorage.getItem('colaborador')!);

    this.dadosForm = this._fb.group({
      Name: ['', Validators.required],
      Gender: ['', Validators.required],
      Salary: ['', Validators.required],
      HiringDate: ['', Validators.required],
      Localization: ['', Validators.required],
      Occupation: ['', Validators.required],
      Rank: ['', Validators.required],
      Smu: ['', Validators.required],
      Lead: ['', Validators.required],
      Promotion: ['', Validators.required],
      Status: ['', Validators.required],
      Observations: ['', null],
    });

    //Desabilitando campos
    this.dadosForm.controls['HiringDate'].disable();
    this.dadosForm.controls['Promotion'].disable();

    this.dadosForm.patchValue({
      Name: this.colaborador.name,
      Gender: this.colaborador.gender === 'f' ? 'Feminino' : 'Masculino',
      Salary: this.colaborador.salary,
      HiringDate: this.colaborador.hiringDate,
      Localization: this.colaborador.localization,
      Occupation: this.colaborador.occupation,
      Rank: this.colaborador.rank,
      Smu: this.colaborador.smu,
      Lead: this.colaborador.lead,
      Promotion: this.colaborador.promotion,
      Status: this.colaborador.status,
      Observations: this.colaborador.observations
    });
  }

  onSubmit() {
    if (this.dadosForm.valid) {
      this.dadosForm.disable();

      this.colaborador.name = this.dadosForm.controls['Name'].value;
      this.colaborador.gender = this.dadosForm.controls['Gender'].value;
      this.colaborador.salary = this.dadosForm.controls['Salary'].value;
      this.colaborador.localization = this.dadosForm.controls['Localization'].value;
      this.colaborador.occupation = this.dadosForm.controls['Occupation'].value;
      this.colaborador.rank = this.dadosForm.controls['Rank'].value;
      this.colaborador.smu = this.dadosForm.controls['Smu'].value;
      this.colaborador.lead = this.dadosForm.controls['Lead'].value;
      this.colaborador.observations = this.dadosForm.controls['Observations'].value;
      this.colaborador.status = this.dadosForm.controls['Status'].value;
      localStorage.setItem('colaborador', JSON.stringify(this.colaborador))

      this._service.updateColaboradores(JSON.stringify(this.colaborador), this.colaborador.id)
        .subscribe((user) => {
          this._toastr.success('Dados atualizados!', 'Os dados do ' + this.colaborador.name + ' foram atualizados com sucesso.');
          this._router.navigateByUrl('/detalhes')
        }, erro => {
          this._toastr.error('Verifique suas credenciais!', 'Email ou senha incorretos.');
          this.dadosForm.enable();
        });
    }
  }
}
