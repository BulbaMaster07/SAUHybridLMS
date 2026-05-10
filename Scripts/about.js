document.addEventListener("mousemove", e => {

  const orbs =
    document.querySelectorAll(".bg-orb");

  const x =
    e.clientX / window.innerWidth;

  const y =
    e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {

    const speed =
      (index + 1) * 18;

    orb.style.transform = `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
    `;

  });

});

// CARD ENTRANCE

window.addEventListener("DOMContentLoaded", () => {

  const cards =
    document.querySelectorAll(".developer-card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

      card.style.transition =
        "all .7s ease";

      card.style.opacity = "1";
      card.style.transform =
        "translateY(0px)";

    }, index * 180);

  });

});