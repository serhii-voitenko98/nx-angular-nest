import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserService } from '../services/user.service';
import { CurrentUser } from '../decorators/user.decorator';
import { UserEntity } from '../entities/user.entity';
import { GqlAuthGuard } from '../guards/gql.auth-guard';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: UserEntity) {
    return this.userService.findOneById(user.id);
  }
}
