import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://viktor-atanasov-next.ghost.io",
  key: "430fc53cb1282baad29024fba8",
  version: "v3",
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
