var playlist = { 'Dave Matthews Band': 'What would you say?'}

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
    return playlist
}
