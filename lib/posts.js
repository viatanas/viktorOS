import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://personal-website-3.ghost.io",
  key: "512433fdd3906e0be3c4747928",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostBySlug(slug) {
  return await api.posts
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
}
