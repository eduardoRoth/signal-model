import { Component, input, model } from '@angular/core';
import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
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
    IonCheckbox,
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
        [(ngModel)]="title"
      />
    </ion-item>
    <ion-item>
      <ion-checkbox [(ngModel)]="readOnlyInput"></ion-checkbox>
    </ion-item>
  `,
  styles: ``,
})
export class SignalChildComponent {
  readOnlyInput = model.required<boolean>();
  title = model.required<string>();
}
