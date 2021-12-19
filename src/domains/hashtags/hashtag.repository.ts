import { EntityRepository, Repository } from 'typeorm';
import { Hashtag } from '../entities/hashtag.entity';

@EntityRepository(Hashtag)
export class HashtagRepository extends Repository<Hashtag> {}
