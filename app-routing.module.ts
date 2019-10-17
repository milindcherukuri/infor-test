import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MprojectCartComponent } from './mproject-cart/mproject-cart.component';
import { MprojectItemsComponent } from './mproject-items/mproject-items.component';
exports: [ RouterModule ]
const routes: Routes = [
  { path: '', component:MprojectItemsComponent },{path:'cart',component:MprojectCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }