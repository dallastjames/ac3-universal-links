import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestConnectionPage } from './test-connection.page';

const routes: Routes = [
  {
    path: '',
    component: TestConnectionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestConnectionPageRoutingModule {}
