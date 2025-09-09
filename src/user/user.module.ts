import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}