describe("Create a Backbone Model: ", function(){
  var companyUrl;

  beforeEach(function(){
    companyUrl = new Company();
  });

  it("store it as a variable called 'Company'", function (){
    expect(Company).not.toBeUndefined();
  });
})