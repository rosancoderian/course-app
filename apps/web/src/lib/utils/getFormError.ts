const getFormError = (errors: Record<string, any>, name: string) => {
  return errors[name] ? errors[name]?.message : null
}

export default getFormError