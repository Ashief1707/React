describe("User login", () => {
  it("should allow user to log in with valid credentials and navigate to the dashboard", () => {
    cy.visit("http://localhost:5173/");

    // Verifikasi berada di halaman login
    cy.url().should("include", "/login");

    // Masukkan email
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    // Masukkan password
    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    // Klik tombol login
    cy.get("button").contains("Login").click();

    // Tunggu sampai diarahkan ke dashboard
    cy.url().should("include", "/");

  });
});
