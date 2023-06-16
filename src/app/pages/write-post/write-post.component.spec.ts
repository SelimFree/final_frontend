import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { WritePostComponent } from './write-post.component';
import {FormsModule} from '@angular/forms';
// Material Styles
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

describe('WritePostComponent', () => {
    let component: WritePostComponent;
    let fixture: ComponentFixture<WritePostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                WritePostComponent,
                HeaderComponent,
                FooterComponent,
            ],
            imports: [
                HttpClientModule,
                MatIconModule,
                MatToolbarModule,
                MatMenuModule,
                MatDialogModule,
                FormsModule,
                BrowserAnimationsModule
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: [] },
            ],
        })
        .compileComponents();

        fixture = TestBed.createComponent(WritePostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
