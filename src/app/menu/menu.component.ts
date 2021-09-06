import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public route: string = "";

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.route = this._router.url.replace("/", "");
  }

  navigate(url: string) {
    this._router.navigateByUrl(url);
  }

}
