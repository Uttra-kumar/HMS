document.addEventListener('DOMContentLoaded', function() {

    /* ------------------------------------------
       🔥 BACK BUTTON FIX + CACHE DISABLE
       ------------------------------------------ */

    // Back se cache load ho to reload force
    window.addEventListener("pageshow", function(event) {
        if (event.persisted) window.location.reload();
    });

    // Back button block
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", function() {
        window.history.pushState(null, "", window.location.href);
        location.reload();
    });

    /* ------------------------------------------
       🔐 SESSION CHECK (TOP)
       ------------------------------------------ */
    const SESSION_KEYS = {
        LOGIN_STATUS: 'phm_admin'
    };

    const REDIRECT_URL = "index.html";

    const isLoggedIn = localStorage.getItem(SESSION_KEYS.LOGIN_STATUS);

    if (!isLoggedIn || isLoggedIn !== "true") {
        clearSessionData();
        window.location.href = REDIRECT_URL;
        return;
    }

    /* ------------------------------------------
       ⏳ SESSION TIMER
       ------------------------------------------ */
    

    
    setupLogoutHandler();

    
    /* ------------------------------------------
       🚪 LOGOUT FUNCTION
       ------------------------------------------ */
    function setupLogoutHandler() {
        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);
    }

    function handleLogout() {
        clearSessionData();
        setTimeout(() => window.location.href = REDIRECT_URL, 1500);
    }

    function clearSessionData() {
        localStorage.removeItem(SESSION_KEYS.LOGIN_STATUS);
        localStorage.removeItem(SESSION_KEYS.EXPIRY_TIME);
    }

}
    
