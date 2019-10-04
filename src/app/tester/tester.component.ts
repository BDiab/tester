
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tester',
    template: ` 
  <div *ngFor="let item of TreeData" style="padding-left:20px"> 
      <ion-grid no-padding >
          <ion-row>
              <ion-col style="margin:auto" >
                    <div float-right>
                        <ion-icon icon-end *ngIf="item.Children?.length" (click)="toggleChildren(item)" name="add-circle" tappable></ion-icon>   
                    </div>    
               </ion-col>
               <ion-col size="11">
                  <ion-item style="padding:0">
                      <ion-label style="font-size: 15px;font-weight: 500"> {{item.FileName}}</ion-label>
                  </ion-item>
              </ion-col>
          </ion-row>
      </ion-grid>
    <app-tester [TreeData]="item.Children" *ngIf="item.visible"></app-tester>
  </div>
  `
})

export class TesterComponent {

    @Input() TreeData: any[];

    toggleChildren(node: any) {
        node.visible = !node.visible;
    }

    constructor() { }
}
