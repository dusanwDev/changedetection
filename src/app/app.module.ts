import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentRightComponent } from './parent-right/parent-right.component';
import { ChildRightComponent } from './parent-right/child-right/child-right.component';
import { GrandchildRightComponent } from './parent-right/child-right/grandchild-right/grandchild-right.component';
import { ParentLeftComponent } from './parent-left/parent-left.component';
import { ChildLeftComponent } from './parent-left/child-left/child-left.component';
import { GrandchildLeftComponent } from './parent-left/child-left/grandchild-left/grandchild-left.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentRightComponent,
    ChildRightComponent,
    GrandchildRightComponent,
    ParentLeftComponent,
    ChildLeftComponent,
    GrandchildLeftComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
