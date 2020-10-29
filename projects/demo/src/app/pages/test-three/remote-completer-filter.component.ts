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
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `,
})
export class RemoteCompleterFilterComponent  extends DefaultFilter implements OnInit, OnChanges {

  completerContent = new Subject<any>();

  constructor(private completerService: CompleterService) {
    super();
  }

  ngOnInit() {
    const config = this.column.getFilterConfig();

    config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
    config.dataService.descriptionField(config.descriptionField);

    this.changesSubscription = this.completerContent
      .pipe(
        map((ev: any) => (ev && ev.title) || ev || ''),
        distinctUntilChanged(),
        debounceTime(this.delay)
      )
      .subscribe((search: string) => {
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
