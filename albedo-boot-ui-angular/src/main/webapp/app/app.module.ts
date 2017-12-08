import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { customHttpProvider } from "./intercepter/http.provider";
import { Ng2Webstorage } from 'ngx-webstorage';
import {NgJhipsterModule} from "ng-jhipster";

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent
    ],
    imports: [
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            i18nEnabled: true,
            defaultI18nLang: 'zh-cn'
        }),
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule
    ],
    providers: [
        ScriptLoaderService,
        customHttpProvider()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
