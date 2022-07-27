import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { catchError, from, Observable, of } from 'rxjs';
import { LoadingScreenComponent } from 'src/shared/components/loading-screen/loading-screen.component';
import { NavbarModule } from 'src/shared/components/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export class SourceTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../assets/i18n/${lang}.json`)).pipe(
      catchError(() => of({}))
    );
  }
}

export function translateLoaderFactory(): TranslateLoader {
  return new SourceTranslateLoader();
}

@NgModule({
  declarations: [AppComponent, LoadingScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
      },
    }),
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
