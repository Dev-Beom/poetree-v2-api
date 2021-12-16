import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  uploadFileToS3(@UploadedFiles() file) {
    console.log(file);
    return this.photosService.uploadFileToS3(file);
  }

  @Get(':imageUrl')
  seeUploadedFile(@Param('imageUrl') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
}
