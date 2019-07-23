import {suite, test, timeout} from "mocha-typescript";
import StAnalyticsClient from "../src/StAnalyticsClient";

const nock = require('nock');

@suite("STAnalyticClientSpec", timeout(100000))
export class STAnalyticClientSpec {

  before() {
    require('dotenv').config({path:`./.env.${process.env.NODE_ENV}`})
  }

  @test("test st analytics")
  async testStAnalytics() {
    let stAnalyticsClient = new StAnalyticsClient("", "");
  }
}