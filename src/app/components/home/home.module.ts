import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './../shared/header/header.component';

import { MainSectionComponent } from '../../shared/main-section/main-section.component';
import { MyPhotoComponent } from '../../shared/my-photo/my-photo.component';
import { BtnPrimaryComponent } from '../shared/btn-primary/btn-primary.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MyPhotoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MyPhotoComponent]
})
export class HomeModule { }
