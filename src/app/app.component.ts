import { Component } from '@angular/core';
import { Persona } from './personas.model';
import { LoggingService } from './LoggingService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "America")];

  constructor(private LoggingService :LoggingService){}

onPersonaAgregada(persona:Persona){
this.LoggingService.enviaMensajeaaConsola("Se agrego la persona "+persona.nombre + " al arreglo"); 
this.personas.push(persona);

}
}
