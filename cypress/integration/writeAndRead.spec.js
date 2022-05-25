
describe("test method", function() {
    
    it('write and read file test', function(){
        cy.request('GET', 'https:google.com')
            .then(response => {
                cy.writeFile('cypress/fixtures/test-read-write/read-write.json', response);
        })
    });
});