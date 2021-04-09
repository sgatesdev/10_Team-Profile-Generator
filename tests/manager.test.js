const Manager = require("../lib/manager.js");

describe("Manager", () => {
  // check constructor
  describe("Initialization", () => {
    it("should create an object with name, id, email if provided valid arguments", () => {

      const manager = new Manager('Sam',1,'sam.j.gates@gmail.com','919-800-1800');

      // makbject has correct values
      expect(manager.name).toEqual('Sam');
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual('sam.j.gates@gmail.com');
      expect(manager.officeNumber).toEqual('919-800-1800');
    });

    /** Check various methods to make sure they return proper values  */
    
    describe("getRole", () => {
        it("returns Manager", () => {
          expect(new Manager('Sam',1,'sam.j.gates@gmail.com','919-800-1800').getRole()).toBe('Manager');
        });
     });

     describe("getOfficeNumber", () => {
        it("returns 919-800-1800", () => {
          expect(new Manager('Sam',1,'sam.j.gates@gmail.com','919-800-1800').getOfficeNumber()).toBe('919-800-1800');
        });
     });
  });
});