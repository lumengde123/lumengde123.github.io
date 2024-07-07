function openAlbum(albumId) {
    // Dummy data for example purposes
    const albums = {
        'album1': [
            'https://i0.hdslb.com/bfs/article/c68593d9f7d90e34d3dc6bec4dd0adfe8934b080.jpg@1256w_1978h_!web-article-pic.avif',
            'https://i0.hdslb.com/bfs/article/c68593d9f7d90e34d3dc6bec4dd0adfe8934b080.jpg@1256w_1978h_!web-article-pic.avif',
            // Add more image URLs as needed
        ]
    };

    const albumImages = albums[albumId];
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    albumImages.forEach(url => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${url}" alt="Photo">`;
        gallery.appendChild(div);
    });
}
