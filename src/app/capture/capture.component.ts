import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Item, items } from './2017-07-07.videos';

const mediaUrl = '/assets/videos/';

@Component({
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss'],
})
export class CaptureComponent {
  @ViewChild('canvas') canvasRef: ElementRef;
  @ViewChild('canvasMirror') canvasMirrorRef: ElementRef;
  @ViewChild('source') sourceRef: ElementRef;
  @ViewChild('video') videoRef: ElementRef;

  private canvas: HTMLCanvasElement;
  private canvasMirror: HTMLImageElement;
  private itemIndex: number = 0;
  private items: Item[] = items;
  private mediaUrl: string = mediaUrl;
  private saverFilename: string;
  private source: HTMLSourceElement;
  private video: HTMLVideoElement;

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.canvasMirror = this.canvasMirrorRef.nativeElement;
    this.source = this.sourceRef.nativeElement;
    this.video = this.videoRef.nativeElement;
  }

  capture() {
    let width = 500;
    let ratio = this.video.videoWidth / width;
    let height = this.video.videoHeight / ratio;

    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas
      .getContext('2d')
      .drawImage(this.video, 0, 0, width, height);

    // this.canvasMirror.src = this.canvas.toDataURL('image/png');
    var image = this.canvas.toDataURL('image/png');
    // .replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)

    // window.location.href = image;
    this.saveContent(image, this.saverFilename);
  }

  onChange(evt: any) {
    let video = evt.target.value;

    this.source.src = mediaUrl + video;
    this.video.load();
    this.video.currentTime = 0;

    this.canvas
      .getContext('2d')
      .drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
    this.saverFilename = Array.prototype.slice.call(video, 0, -4).join('') + '.png';
  }

  saveContent(fileContents: string, fileName: string)
  {
      var link = document.createElement('a');
      link.download = fileName;
      link.href = fileContents;
      link.click();
  }

}