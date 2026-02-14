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
  },
  "psychism-pet": {
    title: "Pet Psychic Reading",
    meta: "20 minutes • $30",
    description:
      "A heart‑centered connection with your animal’s soul and emotional world.",
  },
  "psychism-one-topic": {
    title: "One Topic Psychic Reading",
    meta: "45 minutes • $30",
    description:
      "A focused reading on one specific area of your life for deep clarity.",
  },
  "psychism-guide": {
    title: "Guide Reading",
    meta: "20 minutes • $30",
    description:
      "A channeled connection with your spiritual team for guidance and clarity.",
  },

  // MEDIUMSHIP
  "mediumship-direct": {
    title: "Direct Mediumship",
    meta: "60 minutes • $45",
    description:
      "A focused connection with a specific loved one in Spirit.",
  },
  "mediumship-spirit-led": {
    title: "Spirit‑Led Mediumship",
    meta: "90 minutes • $60",
    description:
      "Spirit chooses who steps forward with the most aligned message.",
  },
  "mediumship-pet": {
    title: "Pet Mediumship",
    meta: "45 minutes • $35",
    description:
      "A loving connection with pets who have crossed over.",
  },

  // REIKI
  "reiki-quick": {
    title: "Quick Boost Reiki",
    meta: "30 minutes • $20",
    description:
      "A short, potent energetic reset to clear static and restore balance.",
  },
  "reiki-deep": {
    title: "Deep Healing Reiki",
    meta: "60 minutes • $50",
    description:
      "A full‑body energetic immersion for deep release and restoration.",
  },

  // ASTROLOGY
  "astro-birth": {
    title: "Birth Chart Reading",
    meta: "45 minutes • $50",
    description:
      "A deep dive into your soul blueprint, gifts, and purpose.",
  },
  "astro-transit": {
    title: "Transit Chart Reading",
    meta: "30 minutes • $35",
    description:
      "Explore the cosmic weather moving through your life right now.",
  },
  "astro-progressed": {
    title: "Progressed Chart Reading",
    meta: "30 minutes • $35",
    description:
      "Understand your current internal season and soul evolution.",
  },
  "astro-all-three": {
    title: "All Three Readings",
    meta: "90 minutes • $90",
    description:
      "A full cosmic map of your soul, present moment, and unfolding path.",
  },

  // MENTORSHIP
  "mentorship-meditation": {
    title: "Meditation Mentorship",
    meta: "8 weeks • $77",
    description:
      "A guided journey into presence, grounding, and inner stillness.",
  },
  "mentorship-reiki": {
    title: "Reiki Mentorship",
    meta: "6 weeks • $333",
    description:
      "Deepen your healing abilities, intuition, and energetic ethics.",
  },
  "mentorship-tarot": {
    title: "Tarot Mentorship",
    meta: "8 weeks • $111",
    description:
      "Learn to read Tarot intuitively, symbolically, and confidently.",
  },
  "mentorship-spiritual-beginner": {
    title: "Spiritual Beginner Mentorship",
    meta: "5 months • $888",
    description:
      "A grounded introduction to intuition, energy, and spiritual safety.",
  },
  "mentorship-empath": {
    title: "Empath 101",
    meta: "8 weeks • $77",
    description:
      "A mentorship for sensitive souls learning boundaries and regulation.",
  },
  "mentorship-angelology": {
    title: "Angelology Mentorship",
    meta: "8 weeks • $77",
    description:
      "A devotional journey into angelic connection and communication.",
  },
  "mentorship-shadow": {
    title: "Shadow Work Mentorship",
    meta: "8 weeks • $77",
    description:
      "A compassionate exploration of unconscious patterns and integration.",
  },
  "mentorship-inner-child": {
    title: "Inner Child Mentorship",
    meta: "8 weeks • $77",
    description:
      "A tender journey into healing younger selves and restoring wholeness.",
  },

  // PRACTICE CIRCLES
  "circle-reiki": {
    title: "Reiki Practice Circle",
    meta: "Fridays • 8 PM EST • $15",
    description:
      "A supportive space to practice giving and receiving Reiki.",
  },
  "circle-tarot": {
    title: "Tarot Practice Circle",
    meta: "Tuesdays • 8 PM EST • $15",
    description:
      "A guided circle for practicing Tarot in a safe environment.",
  },
  "circle-spiritual-dev": {
    title: "Spiritual Development Circle",
    meta: "Mondays • 8 PM EST • $15",
    description:
      "A community space for intuitive development and psychic exercises.",
  }
};

// MODAL
const modal = document.getElementById("sessionModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalBookBtn = document.getElementById("modalBookBtn");

document.querySelectorAll(".session-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.stopImmediatePropogation();
    
    const card = btn.closest(".session-card");
    const key = card.getAttribute("data-session");
    const s = sessions[key];

    modalTitle.textContent = s.title;
    modalMeta.textContent = s.meta;
    modalDescription.textContent = s.description;
    modalBookBtn.onclick = () => {
      window.open("https://app.acuityscheduling.com/schedule.php?owner=38371407", "_blank");
    };

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
