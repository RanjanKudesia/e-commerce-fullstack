import SignupContextWrapper from "./context";
import PasswordInput from "./components/password-input";
import EmailInput from "./components/email-input";
import SubmitButton from "./components/submit-button";



export default function LogIn() {
    return (
        <SignupContextWrapper>
            <div className="asbolute bg-[#0B0F0E] bg-opacity-[0.5] w-full h-screen flex justify-center items-center">
                <div
                    style={{ boxShadow: '0px 4px 70px rgba(129, 139, 156, 0.20)' }}
                    className='bg-white rounded-[8px] flex flex-col gap-[24px] border-[#E4E9EE] w-[327px] h-[583px] p-[24px]'>
                    <div className="w-full text-left text-[#0B0F0E] text-[20px] font-[600] tracking-[-0.2px]">Sign Up</div>
                    <div className='flex flex-col gap-[16px] justify-center'>
                        <div className='flex flex-col gap-[8px] justify-center items-start'>
                            <label className='text-[#0B0F0E] text-[16px] font-[600]' htmlFor='email'>Email</label>
                            <EmailInput id='email' />
                        </div>
                        <div className='flex flex-col gap-[8px] justify-center items-start'>
                            <label className='text-[#0B0F0E] text-[16px] font-[600]' htmlFor='password'>Password</label>
                            <PasswordInput id='password' />
                        </div>
                    </div>
                    <div className='flex w-full flex-col gap-[24px] justify-center items-start pt-[36px]'>
                        <SubmitButton />
                        <div className='relative w-full flex justify-between items-center py-[10px]'>
                            <div className='w-full h-[1px] bg-[#E4E9EE]' />
                            <div className='absolute left-1/2 transform -translate-x-1/2 w-max z-1 bg-white  text-[#818B9C] text-[12px] font-[500] px-[10px]'>
                                Or using other method
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SignupContextWrapper>
    )
}