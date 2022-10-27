export const parseEntities = (tweetText, entitiesObj) => {
  let tweetInnerHtml = tweetText;

  // insert tweet entities
  for (const [entityType, entities] of Object.entries(entitiesObj)) {
    if (entityType === "urls") {
      for (const entity of entities) {
        tweetInnerHtml = tweetInnerHtml.replace(
          entity.url,
          `<a href="${entity.expanded_url}" target="_blank"
            rel="noreferrer">${entity.url}</a>`
        );
      }
    } else if (entityType === "mentions") {
      for (const entity of entities) {
        tweetInnerHtml = tweetInnerHtml.replace(
          "@" + entity.username,
          `<a href="https://twitter.com/${entity.username}" target="_blank"
          rel="noreferrer">@${entity.username}</a>`
        );
      }
    } else if (entityType === "hashtags") {
      for (const entity of entities) {
        console.log(entity);
        tweetInnerHtml = tweetInnerHtml.replace(
          "#" + entity.tag,
          `<a href="https://twitter.com/search?q=%23${entity.tag}" target="_blank"
          rel="noreferrer">#${entity.tag}</a>`
        );
      }
    }
  }

  return { __html: tweetInnerHtml };
};
