document.addEventListener("DOMContentLoaded", () => {
  const likeButton = document.querySelector("#like-button");
  const commentButton = document.querySelector("#comment-button");
  const shareButton = document.querySelector("#share-button");

  const likeCount = document.querySelector("#like-count");
  const commentCount = document.querySelector("#comment-count");
  const shareCount = document.querySelector("#share-count");

  likeButton.addEventListener("click", () => {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  });

  commentButton.addEventListener("click", () => {
    commentCount.textContent = parseInt(commentCount.textContent) + 1;
  });

  shareButton.addEventListener("click", () => {
    shareCount.textContent = parseInt(shareCount.textContent) + 1;
  });
});
