import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {ActionInfoComponent} from './action-info/action-info.component';
import {MessageUsComponent} from './message-us/message-us.component';
import {CountdownComponent} from './countdown/countdown.component';
import {MediaComponent} from './media/media.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [MainPageComponent, ActionInfoComponent, MessageUsComponent, CountdownComponent, MediaComponent, ProgressBarComponent],
  imports: [CommonModule]
})
export class MainPageModule {
}
