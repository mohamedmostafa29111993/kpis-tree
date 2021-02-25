import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuiTreeviewComponent } from './mui-treeview/mui-treeview.component';

const routes: Routes = [
  {
    path: "",
    component: MuiTreeviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisTreeRoutingModule { }


