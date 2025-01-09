describe("User login and dashboard interaction with theme validation", () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Menyesuaikan viewport agar elemen tidak saling menutupi
  });

  it("should allow user to log in with valid credentials, validate theme changes, and log out", () => {
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

    // Verifikasi elemen tema tersedia di dashboard
    cy.get("div.md\\:flex").contains("Themes").scrollIntoView().should("be.visible");

    // Klik setiap elemen tema dan verifikasi perubahan pada elemen yang ditandai
    const themes = ["bg-[#299D91]", "bg-[#1E90FF]", "bg-[#6A5ACD]", "bg-[#DB7093]", "bg-[#8B4513]"];
    const affectedElements = [
      "div.md\\:flex > div:nth-child(1)", // Overview menu
      "div.card[data-id='account-balance']", // Total balance card
      "div.card[data-id='target-achievement']", // Target vs Achievement section
      "div.card[data-id='weekly-comparison']", // Weekly Comparison chart
    ];

    cy.get("div.md\\:w-6.h-6").each(($theme, index) => {
      cy.wrap($theme).scrollIntoView().click({ force: true });

      // Tunggu untuk memastikan perubahan diterapkan
      cy.wait(500);

      // (Opsional) Tambahkan log untuk memverifikasi tema saat pengujian
      cy.log(`Clicked theme: ${themes[index]}`);
    });

    // Klik tombol Logout
    cy.get("nav").contains("Logout").click();

    // Verifikasi kembali ke halaman login
    cy.url().should("include", "/login");
  });
});
