import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer/interceptors/files.interceptor';
import { PhotosService } from './photos.service';
import dotenv from 'dotenv';
import { FileInterceptor } from '@nestjs/platform-express';
dotenv.config();

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileToS3(@UploadedFile() file, @Body() body) {
    return this.photosService.uploadFile(file, body);
  }

  @Get(':imageUrl')
  seeUploadedFile(@Param('imageUrl') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
}
