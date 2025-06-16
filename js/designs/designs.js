import { loadDesigns } from "./designsLoading.js";
import { applyFilter } from "../events/filter.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadDesigns();
  const defaultFilter = document.querySelector(".filter-btn.active");
  applyFilter(defaultFilter);
});
