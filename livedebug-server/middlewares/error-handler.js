module.exports = function(err, req, res, next) {
  // console.log(err)
  const stringifiedErr = JSON.stringify(err);
  if (err.code === 404) {
    res.status(err.code).json({
      message: err.resource + ' not found',
    });
  } 
  else if (stringifiedErr.indexOf('SequelizeValidationError') === -1) {
    console.log(stringifiedErr)
    const validateErrors = err.errors;
    const errors = [];
    console.log(validateErrors,'ini mau di loop')
    for (let key in validateErrors) {
      errors.push(validateErrors[key].message);
    }

    res.status(400).json({ errors });

  } else if (stringifiedErr.indexOf('SequelizeUniqueConstraintError') !== -1) {
    let errors = null;
    if (stringifiedErr.indexOf('phone_number must be unique') !== -1) {
      errors = ['Phone Number is already in use'];
    } else {
      errors = ['Email is already in use'];
    }

    res.status(400).json({ errors });
  } else {
    console.log(err);

    res.status(500).json({
      message: 'Internal server error, check the console',
    });
  }
};