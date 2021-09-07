import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ColaboradoresService } from './services/colaboradores.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './services/dashboard.service';
import { ShortNumber } from './pipes/short-number.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalhesColaboradoresComponent } from './colaboradores/detalhes-colaboradores/detalhes-colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    ColaboradoresComponent,
    ShortNumber,
    DetalhesColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ColaboradoresService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
