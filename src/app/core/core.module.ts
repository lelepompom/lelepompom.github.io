import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './templates/notfound/notfound.component';
import { MaintenanceComponent } from './templates/maintenance/maintenance.component';



@NgModule({
  declarations: [NotfoundComponent, MaintenanceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  exports: [
    NotfoundComponent,
    MaintenanceComponent,
  ]
})
export class CoreModule { }
