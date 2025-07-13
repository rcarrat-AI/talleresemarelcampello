// Cookie Consent Configuration for Talleres EmarElCampello
window.addEventListener('load', function() {
  // Ensure cookieconsent is available
  if (typeof window.cookieconsent !== 'undefined') {
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
});

// Function to load Google Analytics when user consents
function loadAnalyticsOnConsent() {
  console.log('User consented to cookies');
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