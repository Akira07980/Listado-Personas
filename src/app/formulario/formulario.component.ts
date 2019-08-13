import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Persona} from '../personas.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;
  

  constructor() { }

  ngOnInit() {
  }
  onAgregarPersonas(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona1);

  }

}
   