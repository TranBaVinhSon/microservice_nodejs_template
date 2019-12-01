import { Controller, Get, PathParams } from "@tsed/common";

@Controller("/users")
export class UserController {
  @Get("/:id")
  async get(@PathParams("id") id: string): Promise<Record<string, any>> {
    return {
      id,
    };
  }
}
