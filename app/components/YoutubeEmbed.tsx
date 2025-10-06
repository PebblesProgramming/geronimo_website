// components/YoutubeEmbed.tsx
import React from 'react';

type YoutubeEmbedProps = {
  embedId: string; // This is the part after 'v=' in the URL
};

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => {
  // URL Parameters for Autoplay, Mute, and Hiding Controls:
  // 1. autoplay=1: Starts the video automatically.
  // 2. mute=1: Required for autoplay to work on most modern browsers (due to policies).
  // 3. controls=0: Hides the player controls (play/pause, volume, fullscreen).
  // 4. showinfo=0: Hides video information (title, uploader) before it plays.
  // 5. modestbranding=1: Removes the YouTube logo from the controls bar (though controls=0 already handles this).
  // 6. loop=1: Loops the video (requires the 'playlist' parameter to be set to the same video ID).
  const embedParams = `autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${embedId}`;

  const embedUrl = `https://www.youtube.com/embed/${embedId}?${embedParams}`;

  return (
    // This is the standard 'Aspect Ratio Box' to make the video responsive.
    <div
      className="yt-embed-holder relative w-full overflow-hidden"
      style={{ paddingTop: '56.25%' }}
    >
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={embedUrl}
        frameBorder="0"
        // 'allow' attribute must include 'autoplay' for it to work.
        // 'encrypted-media' and 'gyroscope' are often needed for smooth playback.
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
};

export default YoutubeEmbed;
