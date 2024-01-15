const gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  nav: false,
  close: false,
});

gallery.on('show.simplelightbox', e => {
  console.log('HELLO');
});

gallery.on('close.simplelightbox', e => {
  console.log('Bye');
});

gallery.open();
