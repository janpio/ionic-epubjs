import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TocPage } from './toc';

@NgModule({
  declarations: [
    TocPage,
  ],
  imports: [
    IonicPageModule.forChild(TocPage),
  ],
  exports: [
    TocPage
  ]
})
export class TocPageModule {}
