import { DummyExampleColumnFilterComponent } from './test-three/dummy-example-column-filter.component';
import { RemoteCompleterFilterComponent } from './test-three/remote-completer-filter.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { ExamplesModule } from './examples/examples.module';
import { CustomFilterComponent } from './../../../../ng2-smart-table/src/lib/components/filter/custom-filter.component';
import { CustomRenderComponent } from './examples/custom-edit-view/custom-render.component';
import { CustomEditorComponent } from './examples/custom-edit-view/custom-editor.component';
import { TestFourthComponent } from './test-fourth/test-fourth.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { TestOneModule } from './test-one/test-one.module';
import { TestTwoComponent } from './test-two/test-two.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
    Ng2CompleterModule,
    SharedModule,

    TestOneModule,

    ExamplesModule,
  ],
  declarations: [
    TestTwoComponent,
    TestThreeComponent,
    TestFourthComponent,

    RemoteCompleterFilterComponent,
    DummyExampleColumnFilterComponent,
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
    CustomFilterComponent,
  ],
})
export class PagesModule {
}
