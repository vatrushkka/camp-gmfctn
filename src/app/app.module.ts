// modules
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@layout/layout.module';

// components
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/+auth/auth.component';
import {AuthModule} from "@app/modules/+auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    CoreModule,
    LayoutModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
