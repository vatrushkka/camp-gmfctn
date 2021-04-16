// modules
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './modules/layout/layout.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
