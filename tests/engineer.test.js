const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  // check constructor
  describe("Initialization", () => {
    it("should create an object with name, id, email if provided valid arguments", () => {
      const engineer = new Engineer('Sam',1,'sam.j.gates@gmail.com','sg0703');

      // makbject has correct values
      expect(engineer.name).toEqual('Sam');
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual('sam.j.gates@gmail.com');
      expect(engineer.github).toEqual('sg0703');
    });

    /** Check various methods to make sure they return proper values  */
    
    describe("getRole", () => {
        it("returns Engineer", () => {
          expect(new Engineer('Sam',1,'sam.j.gates@gmail.com','sg0703').getRole()).toBe('Engineer');
        });
     });

     describe("getGithub", () => {
        it("returns Engineer", () => {
          expect(new Engineer('Sam',1,'sam.j.gates@gmail.com','sg0703').getGithub()).toBe('sg0703');
        });
     });
  });
});
