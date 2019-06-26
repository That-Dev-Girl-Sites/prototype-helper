$( document ).ready( function() {

  // Click event: Navigation menu
  $( '.menu-toggle' ).click( function(e) {
    e.preventDefault();
    toggleMenu();
  } );

  // Click event: Navigation items
  $( '#tool-menu ul a' ).click( function(e) {
    e.preventDefault();
    displayIframe( this )
    toggleMenu();
  });

  // Utility function to open/close the navigation menu.
  function toggleMenu() {
    $( '#tool-menu, #scrim' ).toggleClass( 'open' );

    if ( $( '#tool-menu' ).is( ':focus' ) ) {
      $( '#menu-close' ).focus();
    } else {
      $( 'header .menu-toggle' ).focus();
    }
  }

  // Utility function to open item in iframe.
  function displayIframe( el ) {
    let url = $( el ).attr( 'href' ),
        title = $( el ).text();

    let html = `
      <iframe src="${url}" title="${title}">
        <noframe>
          Sorry! Your browser does not support iframes.  You will need to visit the
          <a href="${url}">${title}</a> site on your own.
        </noframe>
      </iframe>
    `;

    $( 'main' ).html( html );
  }

});
