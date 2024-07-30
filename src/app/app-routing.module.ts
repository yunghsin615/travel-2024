import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { MyFavsComponent } from './my-favs/my-favs.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-list', pathMatch: 'full' },
  { path: 'data-list', component: DataListComponent },
  { path: 'my-favs', component: MyFavsComponent },
  { path: '**', redirectTo: 'data-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
