const getFormError = (errors: Record<string, any>, name: string) => {
  if (!errors) return null
  return errors[name] ? errors[name]?.message : null
}

export default getFormError