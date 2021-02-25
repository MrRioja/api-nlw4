import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ email: "example@example.com", user: "Example User" });

    expect(res.status).toBe(201);
  });
});
