import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula-alta/pelicula-alta.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './pages/pelicula-listado/pelicula-listado.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { EdicionActorComponent } from './componentes/edicion-actor/edicion-actor.component';
import { EliminarActorComponent } from './componentes/eliminar-actor/eliminar-actor.component';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    PeliculaListadoComponent,
    DetallePeliculaComponent,
    TablaActorComponent,
    TablaPeliculaComponent,
    CabeceraComponent,
    TablaPaisesComponent,
    DetalleActorComponent,
    EdicionActorComponent,
    EliminarActorComponent,
    ActorPeliculaComponent,
    DetallePaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
