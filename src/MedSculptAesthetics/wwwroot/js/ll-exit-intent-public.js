//(function( $ ) {
//	// console.log( llExitIntent );
	

//	/**
//	 * All of the code for your public-facing JavaScript source
//	 * should reside in this file.
//	 *
//	 * Note: It has been assumed you will write jQuery code here, so the
//	 * $ function reference has been prepared for usage within the scope
//	 * of this function.
//	 *
//	 * This enables you to define handlers, for when the DOM is ready:
//	 *
//	 * $(function() {
//	 *
//	 * });
//	 *
//	 * When the window is loaded:
//	 *
//	 * $( window ).load(function() {
//	 *
//	 * });
//	 *
//	 * ...and/or other possibilities.
//	 *
//	 * Ideally, it is not considered best practise to attach more than a
//	 * single DOM-ready or window-load handler for a particular page.
//	 * Although scripts in the WordPress core, Plugins and Themes may be
//	 * practising this, we should strive to set a better example in our own work.
//	 */

//	$(function() {
//		const template = `
//		<div class="llei-container llei-hidden ${llExitIntent.wrapper}">
//			<div class="llei-row">
//				<div class="llei-col">
//					<div class="llei-popup">
//						<div class="llei-close">&times</div>
//						<div class="llei-popup__inner">
//							<div class="llei-popup__inner__left">
//								<div class="llei__image">
//									<img src=${llExitIntent.image.sizes.large}>
//								</div>
//							</div>
//							<div class="llei-popup__inner__right">
//								<div class="llei-wysiwyg">
//									${llExitIntent.content}
//								</div>
//							</div>
//						</div>
//					</div>
//				</div>
//			</div>
//		</div>
//		`;
//		function addStyleString(str) {
//			const node = document.createElement( 'style' );
//			node.innerHTML = str;
//			document.body.appendChild( node );
//	}
//	addStyleString(llExitIntent.css);
//	document.body.insertAdjacentHTML( 'beforeEnd', template );
//	const popup = document.querySelector( '.llei-container' );
//	setTimeout(() => {
//		$( document ).mouseleave( function() {
		
//			if ( !sessionStorage.getItem( 'leaving_popup_seen' ) && ( $( 'body' ).find( '.llei-container' ).length > 0) ) {
//				popup.classList.remove( 'llei-hidden' ); 
		
//				sessionStorage.setItem( 'leaving_popup_seen', true );
//			}
//		} );

//	}, (+llExitIntent.wait * 1000));
//	const closeButton = document.querySelector( '.llei-close' );
//	closeButton.addEventListener( 'click', () => {
//		popup.classList.add( 'llei-hidden' ); 
//	} )
//		 } );
//} )( jQuery );
