import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [UsersModule, MenusModule],
})
export class AppModule {}
