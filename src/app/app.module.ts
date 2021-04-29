// modules
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from "@app/modules/+auth/auth.module";

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    LayoutModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
