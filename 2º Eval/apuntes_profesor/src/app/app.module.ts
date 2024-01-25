import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo3v1Component } from './ejemplo3v1/ejemplo3v1.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo4v1Component } from './ejemplo4v1/ejemplo4v1.component';
import { Ejemplo4v2Component } from './ejemplo4v2/ejemplo4v2.component';
import { Ejemplo4v3Component } from './ejemplo4v3/ejemplo4v3.component';
import { Ejemplo4v4Component } from './ejemplo4v4/ejemplo4v4.component';
import { Ejemplo4v5Component } from './ejemplo4v5/ejemplo4v5.component';
import { IndiceComponent } from './indice/indice.component';
import { Ejemplo3v2Component } from './ejemplo3v2/ejemplo3v2.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SeeArticleComponent } from './see-article/see-article.component';
import { DeleteArticuloComponent } from './delete-articulo/delete-articulo.component';
import { FilterComponent } from './filter/filter.component';
import { ArticuloFiltradoComponent } from './articulo-filtrado/articulo-filtrado.component';


@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo3v1Component,
    Ejemplo4Component,
    Ejemplo4v1Component,
    Ejemplo4v2Component,
    Ejemplo4v3Component,
    Ejemplo4v4Component,
    Ejemplo4v5Component,
    IndiceComponent,
    Ejemplo3v2Component,
    Ejemplo5Component,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    NewArticleComponent,
    SeeArticleComponent,
    DeleteArticuloComponent,
    FilterComponent,
    ArticuloFiltradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


