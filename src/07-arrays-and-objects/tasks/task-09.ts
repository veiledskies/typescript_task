/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typescriptPosts = posts.filter(function(post) {
    return post.hashtags.includes("typescript");
});

console.log(typescriptPosts);


const nestjsPosts = posts.filter(function(post) {
    return post.hashtags.includes("nestjs");
});

console.log(nestjsPosts);


let highest = posts[0];

for (let i = 0; i < posts.length; i++) {
    if (posts[i].likes > highest.likes) {
        highest = posts[i];
    }
}

console.log(highest);


let totalLikes = 0;

for (let i = 0; i < posts.length; i++) {
    totalLikes = totalLikes + posts[i].likes;
}

console.log(totalLikes);