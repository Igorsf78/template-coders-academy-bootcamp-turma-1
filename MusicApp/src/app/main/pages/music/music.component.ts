import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MusicService } from 'app/services/music.service';
import { Observable } from "rxjs";
import Album from 'app/model/album';

@Component({
    selector: "app-music",
    templateUrl: "./music.component.html",
    styleUrls: ["./music.component.scss"],
})
export class MusicComponent implements OnInit {

    albuns: Album[] = [];

    constructor(private musicService: MusicService,
        private router: Router
    ) { }

    ngOnInit() {
        this.musicService.getAlbums().subscribe(result => {
            this.albuns = result;            
        })
    }

    detail(album) {
        this.router.navigate(["music", album.id])
    }
}
