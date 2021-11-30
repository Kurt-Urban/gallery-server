import { Test, TestingModule } from '@nestjs/testing';
import { TagsResolver } from '../../resolvers/tags.resolver';
import { TagsService } from '../../service/tags.service';

describe('TagsResolver', () => {
  let resolver: TagsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagsResolver, TagsService],
    }).compile();

    resolver = module.get<TagsResolver>(TagsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
