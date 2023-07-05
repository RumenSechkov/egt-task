const reportError = (error: { response: { status: number } }) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        return { error: `Bad Request (400)` }
      case 401:
        return { error: 'Unauthorized (401)' }
      case 403:
        return { error: `Forbidden (403)` }
      case 404:
        return { error: `Not Found (404)` }
      case 500:
        return { error: `Internal Server Error (500)` }
      default:
        return { error: `General Server Error` }
    }
  } else {
    return { error: 'No response from the server or the request was cancelled' }
  }
}

export default reportError
