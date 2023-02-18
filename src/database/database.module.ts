import { Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri:
          configService.get<string>("NODE_ENV") === "test"
            ? configService.get<string>("MONGO_TEST_CONNECTION_URI")
            : configService.get<string>("MONGO_CONNECTION_URI"),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
