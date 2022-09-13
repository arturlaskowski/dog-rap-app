import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('navbar', {read: ElementRef, static:false}) navbar!: ElementRef;

  sticky: boolean = false;
  menuPosition: any;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.menuPosition = this.navbar.nativeElement.offsetHeight
  }

  onNavigationItemClick(anchorId: string) {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll > 0){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }
}
