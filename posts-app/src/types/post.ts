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
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1683666121675-fe053a14ecb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    userName: "Huseyintopcu",
    userFullName: "Huseyin",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 2,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1684692379192-988a99e5ee5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "AndreyK",
    userFullName: "Andrey K",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 3,
    postImgLink: "https://images.unsplash.com/photo-1684434832555-082502e1bf7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1683666121675-fe053a14ecb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    userName: "NimaSarram",
    userFullName: "NimaSarram",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 4,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1684071270645-c7516acf0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "Mariatopcu",
    userFullName: "Maria",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 5,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1683888063216-ccf69e385c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "SandroG",
    userFullName: "SandroG",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 6,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1683731026299-1e50f81345c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "LuAndrade",
    userFullName: "Lucas Andrade",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 7,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1682465184253-ac7d28a0452a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "Salidheek",
    userFullName: "Salman Sidheek",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 8,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1643438430812-25ba3d570caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "JeremiahMar",
    userFullName: "Jeremiah Del Mar",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 9,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1682251150339-983145cdcc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "HaktanBulut",
    userFullName: "Ömer Haktan Bulut",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
  {
    id: 10,
    postImgLink: "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    postDescription: "",
    postTitle: "",
    postCaption: "",
    profileImgLink:
      "https://images.unsplash.com/photo-1682138764304-061f0f8f9153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    userName: "JerMar19",
    userFullName: "JerMar",
    isPostFav: false,
    numberOfLikes: 5,
    numberOfComments: 9,
    tags: ["Türkiye", "Fethiye/Muğla", "Akarca", "LightBackgrounds", "Fisherman", "HdSkyWallpapers", "Sea", "Evening",  "CreativeCommonsImages"],
  },
];
