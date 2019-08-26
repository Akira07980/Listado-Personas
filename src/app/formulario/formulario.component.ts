import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Persona} from '../personas.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput: string;
  //apellidoInput: string;
  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('apellidoInput') apellidoInput:ElementRef;

  constructor(private LoggingService:LoggingService) { }

  ngOnInit() {
  }
  onAgregarPersonas(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.LoggingService.enviaMensajeaaConsola("Se envia Persona: "+persona1.nombre + " de apellido " + persona1.apellido);
    this.personaCreada.emit(persona1);

  }

}
   