import { Module } from "@nestjs/common";
import { AppGateway } from "./server";


@Module({
    providers: [AppGateway]
})
export class GatewayModule {}