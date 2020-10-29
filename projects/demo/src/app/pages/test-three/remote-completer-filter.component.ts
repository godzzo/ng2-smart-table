import { DefaultFilter } from 'ng2-smart-table';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';

import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'remote-completer-filter',
  template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().dataService"
                   [minSearchLength]="column.getFilterConfig().minSearchLength || 0"
                   [pause]="column.getFilterConfig().pause || 0"
                   [placeholder]="column.getFilterConfig().placeholder || 'Start typing...'"
                   (selected)="onSelect($event)">
    </ng2-completer>
  `,
})
export class RemoteCompleterFilterComponent  extends DefaultFilter implements OnInit, OnChanges {

  completerContent = new Subject<any>();

  constructor(private completerService: CompleterService) {
    super();
  }

  onSelect(item) {
    console.log('onSelect', item);

    this.completerContent.next(item);
  }

  ngOnInit() {
    const config = this.column.getFilterConfig();

    config.dataService = this.completerService.remote(
      config.url,
      null, // For local filtering - NOT NEEDED!!!
      config.titleField
    );

    config.dataService.urlFormater((term: any) => {
      return `${config.url}?${config.lookupField}=${term}`;
    });

    // config.dataService.descriptionField(config.descriptionField); // Maybe for details on popup list

    config.dataService.dataField(config.resultPath); // Extract the Result Array

    this.changesSubscription = this.completerContent
      .pipe(
        map((ev: any) => (ev && ev.title) || ev || ''),
        distinctUntilChanged(),
        debounceTime(this.delay)
      )
      .subscribe((search: string) => {
        console.log('completerContent', search);

        this.query = search;
        this.setFilter();
      });
  }

  inputTextChanged(event: string) {
    // workaround to trigger the search event when the home/end buttons are clicked
    // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
    // so here it gets called manually
    if (event === '') {
      this.completerContent.next(event);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query) {
      this.query = changes.query.currentValue;
      // this.inputControl.setValue(this.query);
    }
  }
}
