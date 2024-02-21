import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TareasComponent } from './tareas/tareas.component';
import { PanelComponent } from './panel/panel.component';
import { TareaFinalizarComponent } from './tarea-finalizar/tarea-finalizar.component';
import { GuardPasswordGuard } from './Guards/guard-password.guard';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'panel', canActivate:[GuardPasswordGuard], component: PanelComponent },
  { path: 'delete/:id', component: TareaFinalizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
