import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { SignalChildComponent } from '../../components/signal-child/signal-child.component';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.page.html',
  styleUrls: ['./signal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
    RouterLink,
    SignalChildComponent,
    IonIcon,
  ],
})
export class SignalPage {
  parentTitle = signal<string>('');
  checkmark = signal<boolean>(false);
  constructor() {
    addIcons({
      checkmarkCircleOutline,
      closeCircleOutline,
    });
  }

  changeEvent(title: string) {
    console.log(`Signal: ${title}`);
  }
}
