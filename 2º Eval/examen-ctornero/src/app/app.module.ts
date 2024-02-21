import { NgModule } from '@angular/core';

//Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Declarations
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { TareasComponent } from './tareas/tareas.component';
import { PanelComponent } from './panel/panel.component';
import { TareaFinalizarComponent } from './tarea-finalizar/tarea-finalizar.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    TareasComponent,
    PanelComponent,
    TareaFinalizarComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
