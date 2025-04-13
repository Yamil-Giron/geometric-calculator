import { Component, OnInit } from '@angular/core';
import { FiguraGeometrica } from '../figura-geometrica/figura-geometrica';
import { IonInput, IonItem, IonContent, IonButton, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonButton, IonContent, IonItem, IonInput, FormsModule ]
})
export class Circulo extends FiguraGeometrica implements OnInit{
  public radio: number= 0;
  public perimetro: number = 0;
  constructor() { 
    super('Circulo');
  }
  override calcularPerimetro(): number {
    this.perimetro = Number((2 * Math.PI * this.radio).toFixed());
    return this.perimetro;
  }
  ngOnInit() {}
}
