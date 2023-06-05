import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MosaicComponent } from './mosaic/mosaic.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    SearchBarComponent,
    MosaicComponent,
    SidebarComponent,
    AdBannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
