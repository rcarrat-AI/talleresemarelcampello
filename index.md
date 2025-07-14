---
layout: home
locale: es
---

<script>
// Simple language detection and redirect for Spanish default page
(function() {
    // Only run on main index page, not on language-specific pages
    if (window.location.pathname === '/' && !window.location.search.includes('nolang')) {
        var userLang = navigator.language || navigator.userLanguage;
        var langCode = userLang.substring(0, 2).toLowerCase();
        
        // Check if user has already been asked or made a choice
        if (document.cookie.includes('lang_asked=true') || document.cookie.includes('lang_preference=')) {
            return; // Don't ask again
        }
        
        // Check if user prefers English, German, or French and redirect
        if (langCode === 'en') {
            document.cookie = 'lang_asked=true; path=/; max-age=2592000'; // 30 days
            if (confirm('¿Prefieres ver el sitio en inglés? / Would you like to view the site in English?')) {
                document.cookie = 'lang_preference=en; path=/; max-age=2592000'; // 30 days
                window.location.href = '/en/';
            } else {
                document.cookie = 'lang_preference=es; path=/; max-age=2592000'; // 30 days
            }
        } else if (langCode === 'de') {
            document.cookie = 'lang_asked=true; path=/; max-age=2592000'; // 30 days
            if (confirm('¿Prefieres ver el sitio en alemán? / Möchten Sie die Website auf Deutsch anzeigen?')) {
                document.cookie = 'lang_preference=de; path=/; max-age=2592000'; // 30 days
                window.location.href = '/de/';
            } else {
                document.cookie = 'lang_preference=es; path=/; max-age=2592000'; // 30 days
            }
        } else if (langCode === 'fr') {
            document.cookie = 'lang_asked=true; path=/; max-age=2592000'; // 30 days
            if (confirm('¿Prefieres ver el sitio en francés? / Préférez-vous voir le site en français?')) {
                document.cookie = 'lang_preference=fr; path=/; max-age=2592000'; // 30 days
                window.location.href = '/fr/';
            } else {
                document.cookie = 'lang_preference=es; path=/; max-age=2592000'; // 30 days
            }
        }
    }
})();
</script>
