const INITIAL_STATE = {
  sections: [
    {
      title: "sayur",
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl: "images/sayur.jpg", // local file in public/images/
      id: 1,
      linkUrl: "shop/sayur",
    },
    {
      title: "perabotan",
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl: "images/perabotan.jpg", // local file in public/images/
      id: 2,
      linkUrl: "shop/perabotan",
    },
    {
      title: "fashion",
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl: "images/jackets.png", // local file in public/images/
      id: 3,
      linkUrl: "shop/fashion",
    },
    {
      title: "makanan",
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl: "images/makanan.jpg", // local file in public/images/
      size: "large",
      id: 4,
      linkUrl: "shop/makanan",
    },
    {
      title: "minuman",
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl: "images/minuman.jpg", // local file in public/images/
      size: "large",
      id: 5,
      linkUrl: "shop/minuman",
    },
  ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;