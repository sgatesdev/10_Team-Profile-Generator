const Employee = require("../lib/employee.js");

describe("Employee", () => {
  // check constructor
  describe("Initialization", () => {
    it("should create an object with name, id, email if provided valid arguments", () => {

      const employee = new Employee('Sam',1,'sam.j.gates@gmail.com');

      // make sure object has correct values
      expect(employee.name).toEqual('Sam');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('sam.j.gates@gmail.com');
    });

    /** Check various methods to make sure they return proper values  */

    describe("getRole", () => {
        it("returns Employee", () => {
          expect(new Employee('Sam',1,'sam.j.gates@gmail.com').getRole()).toBe('Employee');
        });
      });

      describe("getName", () => {
        it("returns name", () => {
          expect(new Employee('Sam',1,'sam.j.gates@gmail.com').getName()).toBe('Sam');
        });
      });

      describe("getId", () => {
        it("returns Employee id", () => {
          expect(new Employee('Sam',1,'sam.j.gates@gmail.com').getId()).toBe(1);
        });
      });

      describe("getEmail", () => {
        it("returns Employee email", () => {
          expect(new Employee('Sam',1,'sam.j.gates@gmail.com').getEmail()).toBe('sam.j.gates@gmail.com');
        });
      });
  });
});
