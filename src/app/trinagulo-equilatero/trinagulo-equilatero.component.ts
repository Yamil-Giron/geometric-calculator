import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonItem, IonInput, IonContent, IonButtons } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../triangulo/triangulo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './trinagulo-equilatero.component.html',
  styleUrls: ['./trinagulo-equilatero.component.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonInput, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrianguloEquilatero extends TrianguloEscaleno {
  public lado: number = 0;
  public override perimetro: number = 0;

  constructor() {
    super();
  }

  override calcularPerimetro(): number {
    console.log('Valor de lado antes del cálculo:', this.lado);
    this.perimetro = this.lado * 3;
    console.log('Perímetro calculado:', this.perimetro);
    return this.perimetro;
  }
  
  
}

