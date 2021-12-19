import { ConflictException, Injectable } from '@nestjs/common';
import { PhotoRepository } from './photos.repository';
import * as AWS from 'aws-sdk';
<<<<<<< HEAD:src/domains/photos/photos.service.ts
import { CategoriesService } from 'src/domains/categories/categories.service';
import { Photo } from './entities/photo.entity';
=======
import { CategoriesService } from 'src/categories/categories.service';
import { Photo } from '../entities/photo.entity';
>>>>>>> 5d68d576ffd02fcbe39d6a10bc8b4167fecfda51:src/photos/photos.service.ts

const s3 = new AWS.S3();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
@Injectable()
export class PhotosService {
  constructor(
    private readonly photoRepository: PhotoRepository,
    private readonly categoriesService: CategoriesService,
  ) {}

  async isExistingFile(file, params) {
    const exists = await s3
      .headObject(params)
      .promise()
      .then(
        () => true,
        (err) => {
          if (err.code === 'NotFound') {
            return false;
          }
          throw err;
        },
      );
    return exists;
  }

  async uploadToS3(file) {
    const urlKey = `poetree-daily-photos/${file.originalname}`;

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: urlKey,
    };
    try {
      const isExistingFile = await this.isExistingFile(file, params);
      if (isExistingFile) {
        throw new ConflictException(
          'file with the same name already exists in S3',
        );
      }

      const data = await s3
        .upload({ Body: file.buffer, ...params }, (err, data) => {
          if (err) {
            console.log(err);
          }
        })
        .promise();

      return data;
    } catch (error) {
      throw error;
    }
  }

  async findOnePhoto(originalName): Promise<Photo> {
    return this.photoRepository.findOne({
      where: { originalName },
    });
  }

  async uploadFile(file, body): Promise<Photo> {
    const { uploadDate, category, description } = body;
    const { encoding, mimetype, size, originalname } = file;
    try {
      const { Location } = await this.uploadToS3(file);
      const getCategory = await this.categoriesService.findOneByCode(category);

      return await this.photoRepository.save({
        uploadDate,
        categoryId: getCategory.id,
        imageUrl: Location,
        encoding: encoding,
        mimeType: mimetype,
        size: size,
        name: originalname,
        description,
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
