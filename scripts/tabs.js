document.addEventListener("DOMContentLoaded", () => {
  function showTab(tabId) {
    console.log('tabId:', tabId)
    const tabs = document.querySelectorAll(".tab");
    const containers = document.querySelectorAll(".container");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    containers.forEach((container) => {
      container.classList.remove("active");
    });

    document
      .querySelector(`#${tabId}-tab`)
      .classList.add("active");
    document.getElementById(tabId).classList.add("active");
  }

  document.getElementById("graham-tab").addEventListener("click", showTab.bind(null, "graham"));
  document.getElementById("bazin-tab").addEventListener("click", showTab.bind(null, "bazin"));
});
