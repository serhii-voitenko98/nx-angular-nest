import { Resolver, Query } from '@nestjs/graphql';

@Resolver('app')
export class AppResolver {
  @Query('test')
  async getData() {
    return 'GraphQL response';
  }
}
