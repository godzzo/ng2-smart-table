import { TestFourthComponent } from './test-fourth/test-fourth.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { Routes } from '@angular/router';

import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'test-one',
    component: TestOneComponent,
  },
  {
    path: 'test-two',
    component: TestTwoComponent,
  },
  {
    path: 'test-three',
    component: TestThreeComponent,
  },
  {
    path: 'test-fourth',
    component: TestFourthComponent,
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule),
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule),
  },
  {
    path: 'examples',
    loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule),
  },
];
