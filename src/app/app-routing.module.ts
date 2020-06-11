import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioGuard } from './guards/usuario-guard.service';

export const ROUTES: Routes = [
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [UsuarioGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
