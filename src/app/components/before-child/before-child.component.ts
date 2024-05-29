import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-before-child',
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
      <ion-card-subtitle> {{ title }} </ion-card-subtitle>
    </ion-card-header>
    <ion-item lines="none">
      <ion-input
        label="Update Child"
        labelPlacement="stacked"
        type="text"
        placeholder="Enter a title"
        [(ngModel)]="title"
        (ionInput)="updateTitle($event)"
      />
    </ion-item>
  `,
  styles: ``,
})
export class BeforeChildComponent {
  @Input() title: string = '';
  @Output() titleChange = new EventEmitter<string>();

  updateTitle(event: CustomEvent): void {
    const newTitle = event.detail.value;
    this.titleChange.emit(newTitle);
  }
}
