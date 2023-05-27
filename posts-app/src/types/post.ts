import exp from "constants";

export type PostDetails = {
  id: number;
  postImgLink: string;
  postDescription: string;
  postTitle: string;
  postCaption: string;
  profileImgLink: string;
  userName: string;
  userFullName: string;
  isPostFav: boolean;
  numberOfLikes: number;
  numberOfComments: number;
  tags: string[];
};

const dummyPosts: PostDetails[] = [
  {
    id: 1,
    postImgLink:
      "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "Beautiful sunset view by the sea",
    postTitle: "Sunset Serenity",
    postCaption: "Enjoying the peaceful evening by the shore",
    profileImgLink:
      "https://images.unsplash.com/photo-1683666121675-fe053a14ecb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    userName: "Huseyintopcu",
    userFullName: "Huseyin",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "Türkiye",
      "Fethiye/Muğla",
      "Akarca",
      "LightBackgrounds",
      "Fisherman",
      "HdSkyWallpapers",
      "Sea",
      "Evening",
      "CreativeCommonsImages",
    ],
  },
  {
    id: 2,
    postImgLink:
      "https://images.unsplash.com/photo-1684690640456-381bc7183e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
    postDescription: "Bonfire under the starry night sky",
    postTitle: "Nighttime Adventure",
    postCaption: "Embracing the warmth of the flames",
    profileImgLink:
      "https://images.unsplash.com/photo-1684692379192-988a99e5ee5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "AndreyK",
    userFullName: "Andrey K",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "HdSceneryWallpapers",
      "MountainRange",
      "MountainImages&Pictures",
      "Peak",
      "Panoramic",
      "HdSkyWallpapers",
      "HdFireWallpapers",
      "Bonfire",
      "Flame",
    ],
  },
  {
    id: 3,
    postImgLink:
      "https://images.unsplash.com/photo-1682252913872-2ec60d4b0818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1189&q=80",
    postDescription: "Colorful hot air balloons soaring in the sky",
    postTitle: "Up, Up, and Away!",
    postCaption: "Experiencing the beauty of a hot air balloon ride",
    profileImgLink:
      "https://images.unsplash.com/photo-1683666121675-fe053a14ecb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    userName: "AnnaB",
    userFullName: "Anna B",
    isPostFav: false,
    numberOfLikes: 7,
    numberOfComments: 12,
    tags: [
      "HotAirBalloons",
      "Adventure",
      "Travel",
      "Sky",
      "Colorful",
      "Wanderlust",
      "BucketList",
    ],
  },
  {
    id: 4,
    postImgLink:
      "https://images.unsplash.com/photo-1684409915974-2e3c9f9effc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription:
      "A breathtaking view of a rocky cliff under the night sky. The moon shines brightly, illuminating the surrounding landscape.",
    postTitle: "Nighttime Wonder",
    postCaption: "Nature's beauty under the moonlit sky. ✨",
    profileImgLink:
      "https://images.unsplash.com/photo-1684071270645-c7516acf0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "Mariatopcu",
    userFullName: "Maria",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "NatureImages",
      "Outdoors",
      "Night",
      "MoonImages&Pictures",
      "Astronomy",
      "Rock",
      "Cliff",
      "HdSkyWallpapers",
    ],
  },
  {
    id: 5,
    postImgLink:
      "https://images.unsplash.com/photo-1595433506055-228e45746b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1947&q=80",
    postDescription:
      "A scenic view of a winding road through Iceland's beautiful landscape. The road leads to the coast, surrounded by mountains and a stunning grey sky.",
    postTitle: "Journey Through Iceland",
    postCaption: "Exploring Iceland's captivating beauty. 🚗",
    profileImgLink:
      "https://images.unsplash.com/photo-1683888063216-ccf69e385c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "SandroG",
    userFullName: "SandroG",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "HdGreyWallpapers",
      "Iceland",
      "Nature Images",
      "Landscape Images & Pictures",
      "Travel Images",
      "Roadtrip",
      "Coast",
      "MountainImages&Pictures",
      "Road",
      "Highway",
      "Freeway",
    ],
  },
  {
    id: 6,
    postImgLink:
      "https://images.unsplash.com/photo-1683249047864-685e8d9f2c41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription:
      "A stunning sunrise over a majestic mountain range. The golden light paints the sky as clouds float peacefully in the background.",
    postTitle: "Morning Majesty",
    postCaption: "Witnessing the beauty of nature at sunrise. 🌄",
    profileImgLink:
      "https://images.unsplash.com/photo-1683731026299-1e50f81345c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "LuAndrade",
    userFullName: "Lucas Andrade",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "Landscape Images & Pictures",
      "Mountain Images & Pictures",
      "Travel Images",
      "Canon 5d Mark 3",
      "Roadtrip",
      "Sunrise",
      "Mountain Range",
      "Cloud Pictures & Images",
    ],
  },
  {
    id: 7,
    postImgLink:
      "https://images.unsplash.com/photo-1683752590938-e3b687c1f344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    postDescription:
      "A stunning view of the mountain range in Sëlva, Italy. The peaks rise majestically against the clear blue sky, creating a picturesque scene.",
    postTitle: "Italian Mountain Beauty",
    postCaption: "Capturing the magnificence of Italy's mountain range. 🏔️",
    profileImgLink:
      "https://images.unsplash.com/photo-1682465184253-ac7d28a0452a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "Salidheek",
    userFullName: "Salman Sidheek",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "ItalyPictures&Images",
      "Sëlva",
      "Outdoors",
      "MountainRange",
      "Peak",
      "MountainImages&Pictures",
    ],
  },
  {
    id: 8,
    postImgLink:
      "https://images.unsplash.com/photo-1683085809775-d9ac53fcbe21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    postDescription:
      "A serene forest filled with tall trees and lush greenery. The sunlight filters through the leaves, casting a beautiful shadow on the ground.",
    postTitle: "Tranquil Forest Retreat",
    postCaption: "Discovering serenity amidst nature's embrace. 🌳",
    profileImgLink:
      "https://images.unsplash.com/photo-1643438430812-25ba3d570caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "JeremiahMar",
    userFullName: "Jeremiah Del Mar",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "Trees In Forest",
      "Travel Images",
      "Town",
      "Shiny",
      "Shadow",
      "Quiet",
    ],
  },
  {
    id: 9,
    postImgLink:
      "https://images.unsplash.com/photo-1683918027458-319f01af78db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription:
      "A mesmerizing view of the desert landscape with a camel standing tall. The vastness of the desert stretches out as the camel peacefully rests.",
    postTitle: "Desert Serenity",
    postCaption: "Exploring the beauty and tranquility of the desert. 🐪",
    profileImgLink:
      "https://images.unsplash.com/photo-1682251150339-983145cdcc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "HaktanBulut",
    userFullName: "Ömer Haktan Bulut",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "NatureImages",
      "Outdoors",
      "DesertImages",
      "Camel",
      "Mammal",
      "AnimalsImages&Pictures",
      "Kangaroo",
    ],
  },
  {
    id: 10,
    postImgLink:
      "https://images.unsplash.com/photo-1684216116726-a6d0cea8e93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    postDescription:
      "A winding road surrounded by trees and beautiful scenery. The sunlight filters through the leaves, creating a picturesque and serene atmosphere.",
    postTitle: "Journey Through Nature",
    postCaption: "Embracing the beauty of nature along a scenic road. 🌳🛣️",
    profileImgLink:
      "https://images.unsplash.com/photo-1682138764304-061f0f8f9153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "JerMar19",
    userFullName: "JerMar",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: [
      "NatureImages",
      "Road",
      "Akarca",
      "WindyRoad",
      "Ridge",
      "Trees",
      "HDWallpapers",
    ],
  },
];
export default dummyPosts;
