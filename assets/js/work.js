/* ============================================================
   Aureza Labs — Work index: filtering + search
   Filters are reflected in the URL so a view can be shared.
   ============================================================ */

(function () {
  "use strict";

  var grid = document.querySelector("[data-work-grid]");
  if (!grid) return;

  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-group]"));
  var groups = Array.prototype.slice.call(document.querySelectorAll("[data-work-group]"));
  var search = document.querySelector("[data-work-search]");
  var empty = document.querySelector("[data-work-empty]");
  var countEl = document.querySelector("[data-work-count]");

  var state = { group: "all", query: "" };

  function matches(card) {
    if (state.group !== "all" && card.getAttribute("data-group") !== state.group) return false;
    if (!state.query) return true;
    var haystack = (card.getAttribute("data-search") || card.textContent || "").toLowerCase();
    return haystack.indexOf(state.query) !== -1;
  }

  function apply() {
    var shown = 0;

    cards.forEach(function (card) {
      var ok = matches(card);
      card.classList.toggle("is-hidden", !ok);
      if (ok) shown++;
    });

    // Hide a group heading when nothing under it survives the filter
    groups.forEach(function (group) {
      var visible = group.querySelectorAll("[data-group]:not(.is-hidden)").length;
      group.classList.toggle("is-hidden", visible === 0);
    });

    filters.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter") === state.group));
    });

    if (empty) empty.classList.toggle("is-visible", shown === 0);
    if (countEl) {
      countEl.textContent = shown === cards.length
        ? "Showing all " + cards.length + " projects"
        : "Showing " + shown + " of " + cards.length + " projects";
    }

    syncUrl();
  }

  function syncUrl() {
    if (!window.history || !window.history.replaceState) return;
    var params = new URLSearchParams();
    if (state.group !== "all") params.set("filter", state.group);
    if (state.query) params.set("q", state.query);
    var qs = params.toString();
    var url = window.location.pathname + (qs ? "?" + qs : "");
    window.history.replaceState(null, "", url);
  }

  function readUrl() {
    var params = new URLSearchParams(window.location.search);
    var f = params.get("filter");
    if (f && filters.some(function (b) { return b.getAttribute("data-filter") === f; })) {
      state.group = f;
    }
    var q = params.get("q");
    if (q) {
      state.query = q.toLowerCase();
      if (search) search.value = q;
    }
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.group = btn.getAttribute("data-filter");
      apply();
    });
  });

  if (search) {
    var debounce;
    search.addEventListener("input", function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.query = search.value.trim().toLowerCase();
        apply();
      }, 160);
    });
    search.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        search.value = "";
        state.query = "";
        apply();
      }
    });
  }

  readUrl();
  apply();
})();
