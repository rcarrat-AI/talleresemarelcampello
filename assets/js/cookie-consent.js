// Cookie Consent Configuration for Talleres EmarElCampello
// Load the Cookie Consent library first
document.addEventListener('DOMContentLoaded', function() {
  // Load Cookie Consent library
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js';
  script.setAttribute('data-cfasync', 'false');
  script.onload = function() {
    initCookieConsent();
  };
  document.head.appendChild(script);
});

function initCookieConsent() {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#2c3e50",
        "text": "#ffffff"
      },
      "button": {
        "background": "#ff6900",
        "text": "#ffffff"
      }
    },
    "type": "opt-in",
    "content": {
      "message": "Este sitio web utiliza cookies para mejorar tu experiencia de navegación y ofrecerte el mejor servicio posible.",
      "dismiss": "Aceptar",
      "deny": "Rechazar",
      "allow": "Permitir cookies",
      "link": "Más información",
      "href": "/legal.html",
      "close": "&#x274c;",
      "policy": "Política de cookies",
      "target": "_blank"
    },
    "position": "bottom",
    "static": false,
    "theme": "classic",
    "compliance": {
      "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
    },
    
    onInitialise: function(status) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // Load tracking scripts only if user consented
        loadAnalyticsOnConsent();
      }
    },
    
    onStatusChange: function(status, chosenBefore) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // User just consented, load analytics
        loadAnalyticsOnConsent();
      }
      if (type == 'opt-in' && !didConsent) {
        // User denied consent, remove cookies if any
        removeAnalyticsCookies();
      }
    },
    
    onRevokeChoice: function() {
      var type = this.options.type;
      if (type == 'opt-in') {
        // User revoked consent, remove tracking
        removeAnalyticsCookies();
      }
    }
  });
}

// Function to load Google Analytics when user consents
function loadAnalyticsOnConsent() {
  // Check if Google Analytics is configured in _config.yml
  var gaTrackingId = '{{ site.analytics.google }}';
  if (gaTrackingId && gaTrackingId !== '') {
    // Load Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', gaTrackingId, 'auto');
    ga('send', 'pageview');
    
    console.log('Google Analytics loaded with user consent');
  }
}

// Function to remove analytics cookies when user denies consent
function removeAnalyticsCookies() {
  // Remove Google Analytics cookies
  var cookies = ['_ga', '_gat', '_gid'];
  cookies.forEach(function(cookie) {
    document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
    document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname + ';';
  });
  
  console.log('Analytics cookies removed');
}