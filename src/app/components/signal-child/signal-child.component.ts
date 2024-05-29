import { Component, model } from '@angular/core';
import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [
    FormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  ],
  template: `
    <ion-card-header>
      <ion-card-title> Child </ion-card-title>
      <ion-card-subtitle>
        {{ title() }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-item lines="none">
      <ion-input
        label="Update Child"
        labelPlacement="stacked"
        type="text"
        placeholder="Enter a title"
        [ngModel]="title()"
        (ngModelChange)="title.set($event)"
      />
    </ion-item>
  `,
  styles: ``,
})
export class SignalChildComponent {
  title = model.required<string>();
}
