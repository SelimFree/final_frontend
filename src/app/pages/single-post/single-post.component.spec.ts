import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostComponent } from './single-post.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { SideSectionComponent } from 'src/app/layout/side-section/side-section.component';
import { RecentSectionComponent } from 'src/app/layout/recent-section/recent-section.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Styles
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

describe('SinglePostComponent', () => {
    let component: SinglePostComponent;
    let fixture: ComponentFixture<SinglePostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                SinglePostComponent,
                HeaderComponent,
                SideSectionComponent,
                RecentSectionComponent,
                FooterComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                MatDividerModule,
                MatInputModule,
                MatIconModule,
                MatToolbarModule,
                MatMenuModule,
                MatDialogModule
            ],
            providers: [
                {provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: []},
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(SinglePostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
