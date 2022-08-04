// Created common Angular module file that can be imported to different modules as per need

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTING ANGULAR MATERIAL MODULES TO BE USED IN THE COMPONENTS --
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
})
export class AngularMaterialModule {}
