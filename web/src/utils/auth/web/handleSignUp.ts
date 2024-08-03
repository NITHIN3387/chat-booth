export const handleSignUp = (state: any, formData: FormData) => {  
  const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirm = formData.get("confirm") as string

  if (name.trim().length < 2)
    return {
      name: "name",
      error: "Name must be at least 2 characters",
      status: false
    }
  
  if (!EMAIL_PATTERN.test(email))
    return {
      name: "email",
      error: "Invalid email. Please check the format",
      status: false
    }
    
  if (password.length < 8)
    return {
      name: "password",
      error: "Password must be at least 8 characters",
      status: false
    }

  if (confirm !== password)
    return {
      name: "confirm",
      error: "Password didn't match",
      status: false
    }

  // write logic for sign-up here
}