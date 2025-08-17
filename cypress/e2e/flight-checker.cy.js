describe('check flight prices', () => {
  it('checks flight prices', () => {
    cy.visit(
      'https://www.google.com/travel/flights?tfs=CA0QAhpiEgoyMDI2LTAxLTE0IiAKA0RTTRIKMjAyNi0wMS0xNBoDT1JEKgJBQTIENDEzNiIgCgNPUkQSCjIwMjYtMDEtMTQaA1BVSioCQUEyBDI2MTNqBwgBEgNEU01yBwgBEgNQVUoaYhIKMjAyNi0wMS0yMCIgCgNQVUoSCjIwMjYtMDEtMjAaA0NMVCoCQUEyBDMwNDEiIAoDQ0xUEgoyMDI2LTAxLTIwGgNEU00qAkFBMgQxMzI1agcIARIDUFVKcgcIARIDRFNNQAJAAkABQAFIAVIDVVNEemhDalJJVVd0UVRraDBPWEpFY0hkQlFub3RjMUZDUnkwdExTMHRMUzB0YjJ0aWFYSXpPRUZCUVVGQlIyaHRVV3BKU3pabVNVRkJFZ0V3R2dzSTNPTU5FQUlhQTFWVFJEZ1pjTnpqRFE9PcgBAA&curr=USD&utm_source=FLRE&utm_medium=EMAIL&utm_campaign=PC&utm_content=FLIGHT',
    );
    cy.get('span.tZe0ff')
      .invoke('text')
      .then((text) => {
        const numbersOnly = text.replace(/[^0-9]/g, '');
        const value = parseInt(numbersOnly, 10);
        console.log(`numbersOnly: ${numbersOnly}`);
        console.log(`value: ${value}`);
        expect(value).to.be.at.least(3400);
      });
  });
});
