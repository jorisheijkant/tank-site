import xml2js from "xml2js";

let parsePodcasts = function (podcasts) {
  return new Promise((resolve, reject) => {
    let parser = new xml2js.Parser();

    parser.parseString(podcasts, (err, result) => {
      if (err) {
        console.log(err);
        reject("Feed could not be parsed.");
      } else {
        if (
          result &&
          result.rss &&
          result.rss.channel &&
          result.rss.channel[0] &&
          result.rss.channel[0].item
        ) {
          let podcasts = result.rss.channel[0].item.map((podcast) => {
            let parsedPodcast = {};
            if (podcast.guid) parsedPodcast.id = podcast.guid;
            if (podcast.title && podcast.title.length > -1)
              parsedPodcast.title = podcast.title[0];
            if (podcast.link && podcast.link.length > -1)
              parsedPodcast.link = podcast.link[0];
            if (podcast.description && podcast.description.length > -1)
              parsedPodcast.description = podcast.description[0];
            if (podcast["itunes:image"] && podcast["itunes:image"].length > -1)
              parsedPodcast.image = podcast["itunes:image"][0]["$"]["href"];

            return parsedPodcast;
          });

          resolve(podcasts);
        }
      }
    });
  });
};

export default defineEventHandler(async () => {
  const soundcloudXml = await $fetch(
    "https://feeds.soundcloud.com/users/soundcloud:users:44048738/sounds.rss"
  );
  const rss = await soundcloudXml.text();
  let podcasts = await parsePodcasts(rss);

  return {
    podcasts: podcasts,
    latestPodcasts: podcasts.slice(0, 3),
  };
});
