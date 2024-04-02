import { SignIn } from "@clerk/clerk-react"

function SignInPage() {
  return (
    <div>
      <SignIn afterSignInUrl="/" afterSignUpUrl="/" signUpUrl="/auth/sign-up" />
    </div>
  )
}
export default SignInPage