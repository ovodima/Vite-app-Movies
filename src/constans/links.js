function dateNow() {
  return new Date().getFullYear();
}

const Links = {
  popular: import.meta.env.VITE_REACT_APP_POP_URL,
  imgPath: import.meta.env.VITE_REACT_APP_IMG_PATH,
  all:
    import.meta.env.VITE_REACT_APP_URL_FIRST +
    dateNow() +
    import.meta.env.VITE_REACT_APP_URL_SECOND,
};

export default Links;
