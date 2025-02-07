import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-5be48","appId":"1:614677890046:web:bff7c18d0e7ece218536af","storageBucket":"simple-crm-5be48.firebasestorage.app","apiKey":"AIzaSyC8H9dAZVKfWz7LswSiyL-Vl5sbOZ3IzNA","authDomain":"simple-crm-5be48.firebaseapp.com","messagingSenderId":"614677890046"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-5be48","appId":"1:614677890046:web:bff7c18d0e7ece218536af","storageBucket":"simple-crm-5be48.firebasestorage.app","apiKey":"AIzaSyC8H9dAZVKfWz7LswSiyL-Vl5sbOZ3IzNA","authDomain":"simple-crm-5be48.firebaseapp.com","messagingSenderId":"614677890046"})), provideFirestore(() => getFirestore())]
};
