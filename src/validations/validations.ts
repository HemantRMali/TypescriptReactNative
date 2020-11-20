const isValidUser = (userName: string): boolean => {
  if (userName.trim().length > 3) {
    return true;
  } else {
    return false;
  }
};

export {isValidUser};
