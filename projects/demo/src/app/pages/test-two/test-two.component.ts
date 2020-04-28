import { OwnDataSource } from '../own-data-source';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent {

  settings = {
    mode: 'external',
    hideSubHeader: false,
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    },
  };

  source: OwnDataSource;

  constructor(http: HttpClient) {
    this.source = new OwnDataSource(http, {
      endPoint: 'https://jsonplaceholder.typicode.com/photos'
    });
  }

  onCreate($event) {
    console.log('onCreate', $event);
  }

  onEdit($event) {
    console.log('onEdit', $event);
  }
}
