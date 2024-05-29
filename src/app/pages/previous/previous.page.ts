import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { BeforeChildComponent } from '../../components/before-child/before-child.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.page.html',
  styleUrls: ['./previous.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    BeforeChildComponent,
    IonButton,
    RouterLink,
  ],
})
export class PreviousPage {
  parentTitle = 'TITLE';
  constructor() {}

  changeEvent(title: string) {
    console.log(`Previous: ${title}`);
  }
}
