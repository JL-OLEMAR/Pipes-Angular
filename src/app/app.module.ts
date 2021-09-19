import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Cambiar el locale de la app
import localeEsPe from '@angular/common/locales/es-PE'
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'

// Módulo personalizado
import { AppRouterModule } from './app-router.module'
import { SharedModule } from './shared/shared.module'
import { VentasModule } from './ventas/ventas.module'
import { AppComponent } from './app.component'

registerLocaleData(localeEsPe)
registerLocaleData(localeFr)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' } // Cambia languaje
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
