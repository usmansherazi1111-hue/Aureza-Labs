/* ============================================================
   Aureza Labs — Site behaviour
   Progressive enhancement only: every page works without JS.
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --------------------------------------------------------
     Theme — persisted, respects system default until chosen
     -------------------------------------------------------- */

  var THEME_KEY = "aureza-theme";

  function readTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function writeTheme(v) {
    try { localStorage.setItem(THEME_KEY, v); } catch (e) { /* private mode */ }
  }
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initTheme() {
    var saved = readTheme();
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);

    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      writeTheme(next);
      toggle.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  /* --------------------------------------------------------
     Header — stuck state, scroll progress, mobile menu
     -------------------------------------------------------- */

  function initHeader() {
    var header = document.querySelector(".site-header");
    var burger = document.querySelector("[data-burger]");
    var toTop = document.querySelector("[data-to-top]");
    var progress = document.querySelector(".scroll-progress");
    if (!header) return;

    if (burger) {
      burger.addEventListener("click", function () {
        var open = header.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
      });

      header.querySelectorAll(".nav__link").forEach(function (a) {
        a.addEventListener("click", function () {
          header.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && header.classList.contains("is-open")) {
          header.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
          burger.focus();
        }
      });
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        header.classList.toggle("is-stuck", y > 8);
        if (toTop) toTop.classList.toggle("is-visible", y > 700);
        if (progress) {
          var max = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.setProperty("--progress", max > 0 ? String(Math.min(y / max, 1)) : "0");
        }
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      });
    }
  }

  /* --------------------------------------------------------
     Scroll reveal — staggered within a group
     -------------------------------------------------------- */

  function initReveal() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });

    // Stagger siblings that share a [data-reveal-group] parent
    document.querySelectorAll("[data-reveal-group]").forEach(function (group) {
      var step = parseInt(group.getAttribute("data-reveal-group"), 10) || 70;
      Array.prototype.forEach.call(group.children, function (child, i) {
        if (child.hasAttribute("data-reveal")) {
          child.style.setProperty("--reveal-delay", (i * step) + "ms");
        }
      });
    });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------
     Pointer spotlight on cards
     -------------------------------------------------------- */

  function initSpotlight() {
    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
    document.querySelectorAll(".card--spot").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* --------------------------------------------------------
     Counters — animate numbers into view once
     -------------------------------------------------------- */

  function initCounters() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length || reduceMotion || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);

        var target = parseFloat(el.getAttribute("data-count"));
        if (isNaN(target)) return;
        var prefix = el.getAttribute("data-prefix") || "";
        var suffix = el.getAttribute("data-suffix") || "";
        var decimals = parseInt(el.getAttribute("data-decimals"), 10) || 0;
        var dur = 1400;
        var start = performance.now();

        function frame(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + (target * eased).toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          }) + suffix;
          if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.5 });

    els.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------
     Accordions
     -------------------------------------------------------- */

  function initAccordion() {
    document.querySelectorAll(".accordion").forEach(function (acc) {
      var single = acc.hasAttribute("data-single");
      acc.querySelectorAll(".accordion__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var open = btn.getAttribute("aria-expanded") === "true";
          if (single && !open) {
            acc.querySelectorAll(".accordion__btn").forEach(function (o) {
              o.setAttribute("aria-expanded", "false");
            });
          }
          btn.setAttribute("aria-expanded", String(!open));
        });
      });
    });
  }

  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* --------------------------------------------------------
     Toast
     -------------------------------------------------------- */

  var toastTimer = null;
  function showToast(message) {
    var toast = document.querySelector("[data-toast]");
    if (!toast) return;
    var label = toast.querySelector("span");
    if (label) label.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 4800);
  }

  /* --------------------------------------------------------
     Contact form — client-side validation, accessible errors
     -------------------------------------------------------- */

  function initForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var card = form.closest(".contact-card") || form.parentElement;
    var status = form.querySelector("[data-form-status]");

    var rules = {
      name: function (v) { return v.trim().length >= 2 || "Please enter your name."; },
      email: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.";
      },
      message: function (v) {
        return v.trim().length >= 20 || "Please tell us a little more, around 20 characters or so.";
      }
    };

    function validateField(input) {
      var rule = rules[input.name];
      if (!rule) return true;
      var result = rule(input.value);
      var field = input.closest(".field");
      var err = field ? field.querySelector(".field__error") : null;
      if (result === true) {
        if (field) field.classList.remove("has-error");
        if (err) err.textContent = "";
        input.removeAttribute("aria-invalid");
        return true;
      }
      if (field) field.classList.add("has-error");
      if (err) err.textContent = result;
      input.setAttribute("aria-invalid", "true");
      return false;
    }

    form.querySelectorAll("input, textarea").forEach(function (input) {
      input.addEventListener("blur", function () {
        if (input.value) validateField(input);
      });
      input.addEventListener("input", function () {
        var field = input.closest(".field");
        if (field && field.classList.contains("has-error")) validateField(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var firstBad = null;

      form.querySelectorAll("input, textarea").forEach(function (input) {
        if (!rules[input.name]) return;
        if (!validateField(input)) {
          ok = false;
          if (!firstBad) firstBad = input;
        }
      });

      if (!ok) {
        if (status) status.textContent = "Please check the highlighted fields.";
        if (firstBad) firstBad.focus();
        return;
      }

      if (status) status.textContent = "";
      if (card) card.classList.add("is-sent");
      showToast("Brief received. We will reply within two business days.");
      form.reset();
    });

    var again = document.querySelector("[data-form-reset]");
    if (again) {
      again.addEventListener("click", function () {
        if (card) card.classList.remove("is-sent");
        var first = form.querySelector("input");
        if (first) first.focus();
      });
    }
  }

  /* --------------------------------------------------------
     Deep-link the brief form, e.g. contact.html?type=ai-vision
     -------------------------------------------------------- */

  function initPrefill() {
    var params = new URLSearchParams(window.location.search);
    var type = params.get("type");
    if (type) {
      var safe = window.CSS && CSS.escape ? CSS.escape(type) : type.replace(/[^a-zA-Z0-9_-]/g, "");
      var input = document.querySelector('input[name="project-type"][value="' + safe + '"]');
      if (input) input.checked = true;
    }
    var ref = params.get("ref");
    if (ref) {
      var msg = document.querySelector('textarea[name="message"]');
      if (msg && !msg.value) {
        msg.value = "I would like to talk about something similar to " + ref + ".\n\n";
      }
    }
  }

  /* --------------------------------------------------------
     Boot
     -------------------------------------------------------- */

  function boot() {
    initTheme();
    initHeader();
    initReveal();
    initSpotlight();
    initCounters();
    initAccordion();
    initYear();
    initForm();
    initPrefill();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.AurezaToast = showToast;
})();
