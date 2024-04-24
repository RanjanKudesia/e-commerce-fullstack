import SignupContextWrapper from "./context"
import NameInput from "./components/name-input"
import PasswordInput from "./components/password-input"
import EmailInput from "./components/email-input"
import SubmitButton from "./components/submit-button"



export default function SignIn() {
    return (
        <SignupContextWrapper>
            <div className="flex flex-col">
                <EmailInput />
                <NameInput />
                <PasswordInput />
                <SubmitButton />
            </div>
        </SignupContextWrapper>
    )
}