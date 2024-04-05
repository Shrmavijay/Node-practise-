const globalRequestHandler = (operation) => {
  return async (req, res, next) => {
    try {
      await operation(req, res, next);
    } catch (err) {
      res.send({
        success: false,
        message: err.message,
      });
    }
  };
};

export default globalRequestHandler;
