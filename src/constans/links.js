function dateNow() {
  return new Date().getFullYear();
}

const Links = {
  popular: import.meta.env.VITE_REACT_APP_POP_URL,
  imgPath: import.meta.env.VITE_REACT_APP_IMG_PATH,
  tvShowToday: import.meta.env.VITE_REACT_APP_URL_TODAY,
  tvShowInAir: import.meta.env.VITE_REACT_APP_URL_NOW_INAIR,
  tvShowTop: import.meta.env.VITE_REACT_APP_TOP_TVSHOW,
  tvShow: import.meta.env.VITE_REACT_APP_URL_TV_SHOW,
  all:
    import.meta.env.VITE_REACT_APP_URL_FIRST +
    dateNow() +
    import.meta.env.VITE_REACT_APP_URL_SECOND,
};

export default Links;
