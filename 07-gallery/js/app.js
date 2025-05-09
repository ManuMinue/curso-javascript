const posts = [
  { id: 1, nombre: "Post 1", likes: 3 },
  { id: 2, nombre: "Post 2", likes: 5 },
  { id: 3, nombre: "Post 3", likes: 2 },
  { id: 4, nombre: "Post 4", likes: 8 },
  { id: 5, nombre: "Post 5", likes: 1 },
  { id: 6, nombre: "Post 6", likes: 4 },
  { id: 7, nombre: "Post 7", likes: 0 },
  { id: 8, nombre: "Post 8", likes: 6 },
  { id: 9, nombre: "Post 9", likes: 7 },
  { id: 10, nombre: "Post 10", likes: 9 },
  { id: 11, nombre: "Post 11", likes: 10 },
  { id: 12, nombre: "Post 12", likes: 12 },
  { id: 13, nombre: "Post 13", likes: 15 },
  { id: 14, nombre: "Post 14", likes: 20 },
  { id: 15, nombre: "Post 15", likes: 25 },
];

const addLike = (id) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.likes++;
    renderPosts();
  }
};

const createPostElement = ({ id, nombre, likes }) => {
  const postElement = document.createElement("div");
  postElement.className = "card";

  const postText = document.createElement("span");
  const postHeart = document.createElement("p");
  postText.textContent = `${nombre}`;
  postHeart.textContent = `❤️ ${likes}`;

  const likeButton = document.createElement("button");
  likeButton.textContent = "Like";
  likeButton.className = "btn btn-primary";
  likeButton.onclick = () => addLike(id);

  postElement.appendChild(postText);
  postElement.appendChild(postHeart);
  postElement.appendChild(likeButton);

  return postElement;
};

const renderPosts = (filterLikes = false) => {
  const postList = document.getElementById("gallery");
  postList.innerHTML = "";

  posts
    .filter(({ likes }) => !filterLikes || likes >= 3)
    .forEach((post) => {
      const postElement = createPostElement(post);
      postList.appendChild(postElement);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const showPopular = document.getElementById("showPopular");
  const reset = document.getElementById("reset");

  renderPosts();

  showPopular.addEventListener("click", (event) => {
    event.preventDefault();
    renderPosts(true);
  });

  reset.addEventListener("click", (event) => {
    event.preventDefault();
    renderPosts();
  });
});
