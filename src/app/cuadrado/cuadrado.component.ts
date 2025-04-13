import { Component, OnInit } from '@angular/core';
import { FiguraGeometrica } from '../figura-geometrica/figura-geometrica';
import { IonInput, IonContent, IonItem, IonButton, IonCard, IonImg } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.scss'],
  imports: [IonImg, IonCard, IonButton, IonItem, IonInput, IonContent, CommonModule, FormsModule],
  standalone: true,
})
export class Cuadrado extends FiguraGeometrica implements OnInit{
  public lado: number= 0;
  public perimetro: number = 0;
  constructor() { 
    super('Cuadrado');
  }
  override calcularPerimetro(): number {
    this.perimetro = Number((4 * this.lado).toFixed(3));
    return this.perimetro;
  }
  ngOnInit() {}
}
