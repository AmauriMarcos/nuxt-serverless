exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hope I can set up everything correctly",
        event
      })
    }
  }