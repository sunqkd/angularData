import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PipeComponent } from './pipe/pipe.component';
import { MultiplePipe } from './pipe/multiple.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    ReactiveComponent,
    PipeComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // 双向数据绑定
    ReactiveFormsModule // 用于做响应式编程的模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
