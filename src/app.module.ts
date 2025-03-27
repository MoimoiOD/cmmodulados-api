import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GosacModule } from './modules/gosac/gosac.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleDriverModule } from './modules/google-driver/google-driver.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      // dropSchema: true,
    }),
    GosacModule, GoogleDriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
