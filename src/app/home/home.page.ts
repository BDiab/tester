import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  Family: any;
  
  constructor( ) {
    this.Family = [{
      FileName: "Grandfather",
      Children: [
        {
          FileName: "Mom",
          Children: [
            {
              FileName: "Kid",
            },
            {
              FileName: "Kid2",
            }
          ]
        },
        {
          FileName: "Dad",
        }
      ]
    }]
  }

}
