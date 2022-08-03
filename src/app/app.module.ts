import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { PeopleService } from './shared/services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListPeopleComponent,
    ListApiComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule],

  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
