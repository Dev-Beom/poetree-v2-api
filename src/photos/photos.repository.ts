import { EntityRepository, Repository } from 'typeorm';
import { Photo } from '../entities/photo.entity';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {}
