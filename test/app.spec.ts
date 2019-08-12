import * as supertest from "supertest"
import { app } from "../src/app"

describe("Express server", () => {
  it("should response the GET method", async (done) => {
    supertest(app)
      .get("/")
      .then((response) => {
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Hello, VSCode!!!")
        done()
      })
  })
})
