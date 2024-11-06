const getProductList = () => {
  const storedListStr = localStorage.getItem("product-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};


const getWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredProductList = (id) => {
  const storedList = getProductList();

  if (storedList.includes(id)) {
    alert("already exist");
  } else {
    storedList.push(id);

    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("product-list", storedListStr);
  }
};

const addToStoredWishList = (id) => {
  const storedList = getWishList();

  if (storedList.includes(id)) {
    alert("already exist");
  } else {
    storedList.push(id);

    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
};

export { addToStoredProductList, addToStoredWishList, getProductList, getWishList };
