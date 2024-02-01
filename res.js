const response = {
    // Function for sending a successful response with data
    ok: function(data, res) {
      res.status(200).json({
        status: 'success',
        data: data
      });
    },
  
    // Function for sending an error response
    error: function(message, res) {
      res.status(500).json({
        status: 'error',
        message: message
      });
    }
  };
  
  module.exports = response;
  