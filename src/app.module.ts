import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [TaskModule, UsersModule, ProjectsModule, AuthModule, PaymentsModule ],
  controllers: [HelloController],
})
export class AppModule {}
