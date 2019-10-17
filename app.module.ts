import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { CompChild1Component } from './comp2/comp-child1/comp-child1.component';
import { CompChild2Component } from './comp2/comp-child2/comp-child2.component';
import { TestComponent } from './test/test.component';
import { FormsModule} from '@angular/forms';
import { TestingCompComponent } from './testing-comp/testing-comp.component';
import { TestingComp1Component } from './testing-comp/testing-comp1/testing-comp1.component';
//import { TestserviceService } from './testservice.service';
import { MprojectItemsComponent } from './mproject-items/mproject-items.component';
import { MprojectCartComponent } from './mproject-cart/mproject-cart.component';
import { AppserviceService } from './appservice.service';
import { HttpClientModule} from '@angular/common/http';
import { AppcartService } from './appcart.service';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CompChild1Component,
    CompChild2Component,
    TestComponent,
    TestingCompComponent,
    TestingComp1Component,
    MprojectItemsComponent,
    MprojectCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppserviceService,AppcartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
