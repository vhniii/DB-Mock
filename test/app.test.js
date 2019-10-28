const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("Gets all products", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        // expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });

  it("Adds food product", done => {
    chai
      .request(app)
      .post("/add")
      .send({ name: "Pannkook", price: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        // expect(res.body.result).to.equals(10);
        done();
      });
  });
});