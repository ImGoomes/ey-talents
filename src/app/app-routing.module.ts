import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { DadosColaboradoresComponent } from './colaboradores/dados-colaboradores/dados-colaboradores.component';
import { DetalhesColaboradoresComponent } from './colaboradores/detalhes-colaboradores/detalhes-colaboradores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotskillsComponent } from './hotskills/hotskills.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  },
  {
    path: 'colaboradores',
    component: ColaboradoresComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'colaboradores',
        component: ColaboradoresComponent,
      }
    ]
  },
  {
    path: 'detalhes',
    component: DetalhesColaboradoresComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'detalhes',
        component: DetalhesColaboradoresComponent,
      }
    ]
  },
  {
    path: 'dadosColaborador',
    component: DadosColaboradoresComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dadosColaborador',
        component: DadosColaboradoresComponent,
      }
    ]
  },
  {
    path: 'hotskills',
    component: HotskillsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'hotskills',
        component: HotskillsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
