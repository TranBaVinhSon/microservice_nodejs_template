import { Controller, Get, PathParams } from "@tsed/common";

@Controller("/users")
export class UserController {
  @Get("/:id")
  async get(@PathParams("id") id: string): Promise<Object> {
    return {
      id
    };
  }
}
