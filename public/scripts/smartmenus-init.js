function waitForSmartMenus() {
    if (typeof $ === 'undefined' || typeof $.fn.smartmenus === 'undefined') {
      setTimeout(waitForSmartMenus, 50);
    } else {
      $('#main-menu').smartmenus();
    }
  }
  
  waitForSmartMenus();
  