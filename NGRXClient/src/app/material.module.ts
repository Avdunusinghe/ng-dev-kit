import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
        imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule ],
        exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule],
    })

export class MaterialModule{}