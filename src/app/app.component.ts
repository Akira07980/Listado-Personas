import { Component } from '@angular/core';
import { Persona } from './personas.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "America")];


onPersonaAgregada(persona:Persona){
this.personas.push(persona);

}
}
