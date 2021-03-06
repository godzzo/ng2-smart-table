import { RemoteCompleterFilterComponent } from './remote-completer-filter.component';
import { DummyExampleColumnFilterComponent } from './dummy-example-column-filter.component';
import { Component } from '@angular/core';

@Component({
  selector: 'advanced-example-filters',
  template: `
    <h1>Filter Controls - Select, Autocomplete, Checkbox</h1>
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class TestThreeComponent {

  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Yes',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      passed: {
        title: 'Passed',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: 'clear',
          },
        },
      },
    },
  };

  constructor() {

    this.settings.columns['name'] = {
      title: 'Full Name',
      filter: {
        type: 'custom',
        component: DummyExampleColumnFilterComponent,
        config: {
          selectText: 'Select...',
          list: [
            { value: 'Glenna Reichert', title: 'Glenna Reichert' },
            { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
            { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
          ],
        },
      },
    };

    this.settings.columns['name'] = {
      title: 'Full Name',
      filter: {
        type: 'custom',
        component: RemoteCompleterFilterComponent,
        config: {
          url: 'http://localhost:8080/api/lpUsers/filterLpUsers',
          lookupField: 'name_like',
          titleField: 'name',
          resultPath: '_embedded.lpUsers'
        },
      },
    };
    /*
    this.settings.columns['name'] = {
      title: 'Full Name',
      filter: {
        type: 'completer',
        config: {
          completer: {
            data: this.data,
            searchFields: 'name',
            titleField: 'name',
          },
        },
      },
    };*/

    this.settings.columns['email'] = {
      title: 'Email',
      filter: {
        type: 'completer',
        config: {
          completer: {
            data: this.data,
            searchFields: 'email',
            titleField: 'email',
          },
        },
      },
    };
  }
}
