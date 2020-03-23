import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineInsertComponent } from './medicine-insert/medicine-insert.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MedicineService } from './commons/service/medicine.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './components/toast/toast.component';
import { MedicineCardComponent } from './medicine-card/medicine-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { MedicineDataContentComponent } from './medicine-data-content/medicine-data-content.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  imports: [
    NgxMaskModule.forRoot(options),
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MedicineListComponent,
    MedicineInsertComponent,
    FileUploadComponent,
    LoginComponent,
    HomeComponent,
    ToastComponent,
    MedicineCardComponent,
    CarouselComponent,
    MedicineDetailComponent,
    MedicineDataContentComponent
  ],
  entryComponents: [
    MedicineDetailComponent
  ],
  providers: [
    MedicineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
