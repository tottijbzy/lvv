var api = flowplayer("#player", {
    live: true,
    splash: true,
    clip: {
        sources: [
            {
                type: "application/x-mpegurl",
                src: "http://srv6.zoeweb.tv:1935/z330-live/stream/playlist.m3u8"
            }
        ],
        title: "LiveStream"
    },
    embed: {
        skin: "http://releases.flowplayer.org/6.0.1/skin/bauhaus.css"
    }
});
