// write vanilajs

let sidebar = document.getElementById("shop-sidebar");
let sidebar_content = document.getElementById("shop-sidebar-content");
let footer_content = document.getElementById("footer-content");
let header_middle = document.getElementById("header-middle");
let headerMiddleTop = header_middle.getBoundingClientRect().top;

window.onscroll = () => {
  let scrollTop = window.scrollY;
  let viewportHeight = window.innerHeight;

  // handle header
  if (header_middle) {
    if (scrollTop >= headerMiddleTop) {
      header_middle.style.position = "fixed";
      header_middle.style.top = 0;
      header_middle.style.paddingTop = "10px";
      header_middle.style.paddingBottom = "10px";
      header_middle.classList.add("shadow");
    } else {
      header_middle.style.position = "";
      header_middle.style.top = "auto";
      header_middle.style.paddingTop = "28px";
      header_middle.style.paddingBottom = "28px";
      header_middle.classList.remove("shadow");
    }
  }

  // handle sidebar
  if (sidebar && sidebar_content && footer_content) {
    let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
    let contentHeight = sidebar_content.getBoundingClientRect().height;
    let footerHeight = footer_content.getBoundingClientRect().height;
    let footerTop = footer_content.getBoundingClientRect().top;

    if (viewportHeight < contentHeight) {
      if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
        if (footerTop < viewportHeight) {
          sidebar_content.style.transform = `translateY(-${
            contentHeight + sidebarTop - (viewportHeight - footerHeight)
          }px)`;
        } else {
          sidebar_content.style.transform = `translateY(-${
            contentHeight - viewportHeight + sidebarTop
          }px)`;
        }
        sidebar_content.style.position = "fixed";
      } else {
        sidebar_content.style.transform = "";
        sidebar_content.style.position = "";
      }
    } else {
      if (scrollTop >= sidebarTop) {
        sidebar_content.style.position = "fixed";
        sidebar_content.style.transform = `translateY(-${sidebarTop}px)`;
      } else {
        sidebar_content.style.position = "";
        sidebar_content.style.transform = "";
      }
    }
  }
};
