import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import {provideClientHydration,withEventReplay,} from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './Core/Interceptors/Header/headers.interceptor';
import { errorsInterceptor } from './Core/Interceptors/Erorr/errors.interceptor';
import { loadingInterceptor } from './Core/Interceptors/Loading/loading.interceptor';
import { HttpLoaderFactory } from './Core/helper/Loaderfactory';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withHashLocation()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorsInterceptor,loadingInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    },),
    importProvidersFrom([TranslateModule.forRoot({
      defaultLanguage:"en",
    loader: {
      provide: TranslateLoader,
      useFactory:HttpLoaderFactory,
      deps: [HttpClient]

    }
    })])
  ],
};
