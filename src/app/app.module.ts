// modules
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@layout/layout.module';

// components
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/+auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    CoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
