import { ServerDataSource } from 'ng2-smart-table';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-one',
  styleUrls: ['./test-one.component.scss'],
  templateUrl: 'test-one.component.html',
})
export class TestOneComponent {

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

  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, {
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
