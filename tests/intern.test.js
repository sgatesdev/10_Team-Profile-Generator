const Intern = require("../lib/intern.js");

describe("Intern", () => {
  // check constructor
  describe("Initialization", () => {
    it("should create an object with name, id, email if provided valid arguments", () => {
      const intern = new Intern('Sam',1,'sam.j.gates@gmail.com','NCSU');

      // makbject has correct values
      expect(intern.name).toEqual('Sam');
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual('sam.j.gates@gmail.com');
      expect(intern.school).toEqual('NCSU');
    });

    /** Check various methods to make sure they return proper values  */
    
    describe("getRole", () => {
        it("returns Intern", () => {
          expect(new Intern('Sam',1,'sam.j.gates@gmail.com','sg0703').getRole()).toBe('Intern');
        });
     });

     describe("getSchool", () => {
        it("returns NCSU", () => {
          expect(new Intern('Sam',1,'sam.j.gates@gmail.com','NCSU').getSchool()).toBe('NCSU');
        });
     });
  });
});