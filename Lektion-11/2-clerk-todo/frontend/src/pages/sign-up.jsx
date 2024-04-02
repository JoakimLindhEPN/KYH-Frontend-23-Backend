import { SignUp } from "@clerk/clerk-react"

function SignUpPage() {
  return (
    <div>
      <SignUp afterSignInUrl="/" afterSignUpUrl="/" signInUrl="/auth/sign-in" />
    </div>
  )
}
export default SignUpPage