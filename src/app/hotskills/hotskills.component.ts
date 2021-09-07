import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotskillService } from '../services/hotskill.service';

@Component({
  selector: 'app-hotskills',
  templateUrl: './hotskills.component.html',
  styleUrls: ['./hotskills.component.css']
})
export class HotskillsComponent implements OnInit {
  public hotskills: any;
  constructor(
    private _service: HotskillService,
    private _router: Router) { }

  ngOnInit(): void {
    this._service.getHotskills().subscribe(
      (dados) => {
        this.hotskills = dados;
      });
  }
}
