var playlist = {name: 'song'};

var updatePlaylist = function updatePlaylist (obj, artist, song) {
  obj[artist] = song;
  return obj;
}

var removeFromPlaylist = function removeFromPlaylist (obj, artist) {
  delete obj[artist];
  return obj;
}
