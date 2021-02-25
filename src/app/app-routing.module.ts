import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
      RouterModule.forChild([
          {
              path: '',
              component: AppComponent,
              children: [
                  {
                    path: 'kpis-tree',
                    loadChildren: () => import('./kpis-tree/kpis-tree.module')
                    .then(m => m.KpisTreeModule)
                  }
              ]
          }
      ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
