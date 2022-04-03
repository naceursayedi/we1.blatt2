import {Sample} from "../src/sample";

 test("First Test", () => {
 const testee = new Sample("Naceur Sayedi");
 expect(testee.greeting()).toBe("Hello Naceur Sayedi");
 });