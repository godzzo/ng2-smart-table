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
      id: {title: 'ID'},
      reqPlace: {title: 'req_place'},
      reqType: {title: 'req_type'},
      publicateDate: {title: 'publicate_date'},
      isExpire: {title: 'is_expire'},
      expireDate: {title: 'expire_date'},
      title: {title: 'title'},
      subTitle: {title: 'sub_title'},
      lead: {title: 'lead'}
    }
  };

  source: OwnDataSource;

  constructor(http: HttpClient) {
    // page=${page}&size=${take}&sort=${order},${orderDirection}
    this.source = new OwnDataSource(http, {
      endPoint: '/api/issues',
      sortFieldKey: 'sort',
      sortDirKey: 'sortDir',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      filterFieldKey: 'filter',
      totalKey: 'page.totalElements',
      dataKey: '_embedded.issues'
    });
  }

  onCreate($event) {
    console.log('onCreate', $event);
  }

  onEdit($event) {
    console.log('onEdit', $event);
  }
}
