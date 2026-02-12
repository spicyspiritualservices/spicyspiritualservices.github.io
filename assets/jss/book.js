// CATEGORY DROPDOWNS
document.querySelectorAll(".booking-category").forEach(cat => {
  const header = cat.querySelector(".category-header");
  header.addEventListener("click", () => {
    cat.classList.toggle("open");
  });
});

// SESSION DATA
const sessions = {
  "psychism-general": {
    title: "General Psychic Reading",
    meta: "45 minutes • $45",
    description:
      "A spacious, intuitive reading where we tune into the energetic threads moving through your life right now.",
    link: "https://buy.stripe.com/eVq14g3I53kwdys4Jb97G00"
  },
  "psychism-pet": {
    title: "Pet Psychic Reading",
    meta: "20 minutes • $30",
    description:
      "A heart‑centered connection with your animal’s soul and emotional world.",
    link: "https://buy.stripe.com/fZucMY6Uhf3ebqkejL97G01"
  },
  "psychism-one-topic": {
    title: "One Topic Psychic Reading",
    meta: "45 minutes • $30",
    description:
      "A focused reading on one specific area of your life for deep clarity.",
    link: "https://buy.stripe.com/eVq3cofqN4oAfGA7Vn97G02"
  },
  "psychism-guide": {
    title: "Guide Reading",
    meta: "20 minutes • $30",
    description:
      "A channeled connection with your spiritual team for guidance and clarity.",
    link: "https://buy.stripe.com/aFa28k5Qd3kwgKE6Rj97G03"
  },

  // MEDIUMSHIP
  "mediumship-direct": {
    title: "Direct Mediumship",
    meta: "60 minutes • $45",
    description:
      "A focused connection with a specific loved one in Spirit.",
    link: "https://buy.stripe.com/5kQ4gs2E15sEamgfnP97G04"
  },
  "mediumship-spirit-led": {
    title: "Spirit‑Led Mediumship",
    meta: "90 minutes • $60",
    description:
      "Spirit chooses who steps forward with the most aligned message.",
    link: "https://buy.stripe.com/fZuaEQdiFcV6amgb7z97G05"
  },
  "mediumship-pet": {
    title: "Pet Mediumship",
    meta: "45 minutes • $35",
    description:
      "A loving connection with pets who have crossed over.",
    link: "https://buy.stripe.com/aFabIUdiF6wIamg1wZ97G06"
  },

  // REIKI
  "reiki-quick": {
    title: "Quick Boost Reiki",
    meta: "30 minutes • $20",
    description:
      "A short, potent energetic reset to clear static and restore balance.",
    link: "https://buy.stripe.com/6oUaEQ0vT7AM3XSejL97G07"
  },
  "reiki-deep": {
    title: "Deep Healing Reiki",
    meta: "60 minutes • $50",
    description:
      "A full‑body energetic immersion for deep release and restoration.",
    link: "https://buy.stripe.com/eVq28k0vT3kw3XSb7z97G08"
  },

  // ASTROLOGY
  "astro-birth": {
    title: "Birth Chart Reading",
    meta: "45 minutes • $50",
    description:
      "A deep dive into your soul blueprint, gifts, and purpose.",
    link: "https://buy.stripe.com/fZu7sEdiF5sEeCw7Vn97G09"
  },
  "astro-transit": {
    title: "Transit Chart Reading",
    meta: "30 minutes • $35",
    description:
      "Explore the cosmic weather moving through your life right now.",
    link: "https://buy.stripe.com/dRm7sEguR7AM660fnP97G0a"
  },
  "astro-progressed": {
    title: "Progressed Chart Reading",
    meta: "30 minutes • $35",
    description:
      "Understand your current internal season and soul evolution.",
    link: "https://buy.stripe.com/eVq14g2E1dZa7a48Zr97G0b"
  },
  "astro-all-three": {
    title: "All Three Readings",
    meta: "90 minutes • $90",
    description:
      "A full cosmic map of your soul, present moment, and unfolding path.",
    link: "https://buy.stripe.com/4gM5kw7Yl08kamg8Zr97G0c"
  },

  // MENTORSHIP
  "mentorship-meditation": {
    title: "Meditation Mentorship",
    meta: "8 weeks • $77",
    description:
      "A guided journey into presence, grounding, and inner stillness.",
    link: "https://buy.stripe.com/6oU28kdiF2gs0LG0sV97G0d"
  },
  "mentorship-reiki": {
    title: "Reiki Mentorship",
    meta: "6 weeks • $333",
    description:
      "Deepen your healing abilities, intuition, and energetic ethics.",
    link: "https://buy.stripe.com/00wbIUguRdZafGAejL97G0e"
  },
  "mentorship-tarot": {
    title: "Tarot Mentorship",
    meta: "8 weeks • $111",
    description:
      "Learn to read Tarot intuitively, symbolically, and confidently.",
    link: "https://buy.stripe.com/dRm14g2E19IU6601wZ97G0f"
  },
  "mentorship-spiritual-beginner": {
    title: "Spiritual Beginner Mentorship",
    meta: "5 months • $888",
    description:
      "A grounded introduction to intuition, energy, and spiritual safety.",
    link: "https://buy.stripe.com/28EaEQceB3kw9ic3F797G0g"
  },
  "mentorship-empath": {
    title: "Empath 101",
    meta: "8 weeks • $77",
    description:
      "A mentorship for sensitive souls learning boundaries and regulation.",
    link: "https://buy.stripe.com/4gM3coceB9IU0LGb7z97G0h"
  },
  "mentorship-angelology": {
    title: "Angelology Mentorship",
    meta: "8 weeks • $77",
    description:
      "A devotional journey into angelic connection and communication.",
    link: "https://buy.stripe.com/6oUbIU4M98EQ2TO1wZ97G0i"
  },
  "mentorship-shadow": {
    title: "Shadow Work Mentorship",
    meta: "8 weeks • $77",
    description:
      "A compassionate exploration of unconscious patterns and integration.",
    link: "https://buy.stripe.com/cNi5kwdiF2gsamg2B397G0j"
  },
  "mentorship-inner-child": {
    title: "Inner Child Mentorship",
    meta: "8 weeks • $77",
    description:
      "A tender journey into healing younger selves and restoring wholeness.",
    link: "https://buy.stripe.com/9B628k1zXg7idysb7z97G0k"
  },

  // PRACTICE CIRCLES
  "circle-reiki": {
    title: "Reiki Practice Circle",
    meta: "Fridays • 8 PM EST • $15",
    description:
      "A supportive space to practice giving and receiving Reiki.",
    link: "https://buy.stripe.com/dRm3co5Qd08kdysa3v97G0m"
  },
  "circle-tarot": {
    title: "Tarot Practice Circle",
    meta: "Tuesdays • 8 PM EST • $15",
    description:
      "A guided circle for practicing Tarot in a safe environment.",
    link: "https://buy.stripe.com/3cIeV65QdaMYcuodfH97G0n"
  },
  "circle-spiritual-dev": {
    title: "Spiritual Development Circle",
    meta: "Mondays • 8 PM EST • $15",
    description:
      "A community space for intuitive development and psychic exercises.",
    link: "https://buy.stripe.com/9B628k92p6wIeCwfnP97G0o"
  }
};

// MODAL
const modal = document.getElementById("sessionModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalBookBtn = document.getElementById("modalBookBtn");

document.querySelectorAll("[data-session]").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-session");
    const s = sessions[key];

    modalTitle.textContent = s.title;
    modalMeta.textContent = s.meta;
    modalDescription.textContent = s.description;
    modalBookBtn.onclick = () => window.open(s.link, "_blank");

    modal.classList.add("active");
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

document.querySelectorAll('.category-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;

    header.classList.toggle('open');
    body.classList.toggle('open');
  });
});
