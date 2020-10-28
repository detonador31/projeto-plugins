import { DatePipe } from '@angular/common';
import { Image } from './../../classes/image';
import { EntImageService } from './../../services/entity/ent-image.service';
import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camera1',
  templateUrl: './camera1.page.html',
  styleUrls: ['./camera1.page.scss'],
})
export class Camera1Page implements OnInit {
  // tslint:disable: no-string-literal

  photo: SafeResourceUrl;
  photo2: SafeResourceUrl;
  images = [];
  bancoImages: Image[] = [];
  countImagens = 0;

  imgClass: Image = new Image();

  constructor(private sanitizer: DomSanitizer,
              private helper: HelperService,
              private entImage: EntImageService,
              private datepipe: DatePipe,
  ) {
  }

  async ngOnInit() {
    await this.getImages();
  }

  async getImages() {
    const bdImagens = await this.entImage.getAll();
    this.bancoImages = [];
    if (bdImagens.length > 0) {
      bdImagens.forEach(async (item: Image) => {
        const imgBin = JSON.parse(item.image);
        const photo: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imgBin && (imgBin.dataUrl));
        const img: any = [];
        img.image = photo;
        this.bancoImages.push(img);
      });
    }
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 10,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

/*     this.countImagens++;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    // Recupera a imagem armazenada no um Storage
    if (this.countImagens > 1){
      const image2 = await this.helper.getLocaStoragetoObject('imagem');
      this.photo2 = this.sanitizer.bypassSecurityTrustResourceUrl(image2 && (image2.dataUrl));
    } else {
      this.photo2 = this.photo;
    }

    // Armazena imagem em Storage
    localStorage.setItem('imagem', JSON.stringify(image));

    // Insere a imagem em um array
    const img: any = [];
    img.image = this.photo;
    img.image2 = this.photo2;
    this.images.push(img); */

    // Salva Imagens no mysql
    await this.salvarImagem(image);
  }

  async salvarImagem(image) {
    const date = this.helper.dateTime();
    this.imgClass.created_at = this.datepipe.transform(date, 'dd/MM/yyyy h:mm');
    this.imgClass.image = JSON.stringify(image);
    await this.entImage.save(this.imgClass);
    await this.getImages();
  }

}
