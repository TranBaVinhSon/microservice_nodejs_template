import { $log, ServerLoader } from "@tsed/common";
import { Server } from "./Server";
import { Logger } from "base";

async function bootstrap(): Promise<void> {
  try {
    $log.debug("Start server...");
    const server = await ServerLoader.bootstrap(Server);

    await server.listen();
    $log.debug("Server initialized");
    Logger();
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();
