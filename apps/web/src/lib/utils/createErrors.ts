const createErrors = (err: any) => {
  return {
    ...err.data.data,
    default: {
      code: err.data.code,
      message: err.data.message,
    },
  }
}

export default createErrors
