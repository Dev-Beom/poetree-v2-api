import { EntityRepository, Repository } from 'typeorm';
import { PostHashtag } from './entities/postHashtag.entity';

@EntityRepository(PostHashtag)
export class PostHashtagRepository extends Repository<PostHashtag> {}
