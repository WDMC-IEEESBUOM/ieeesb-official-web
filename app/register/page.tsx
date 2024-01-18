import { RegisterProvider } from "./RegisterContext";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <RegisterProvider>
      <div className="bg-white text-black w-full ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-5xl text-[#3E3E3E] font-semibold mt-10">
            Register Page
          </h1>
          <div className="mt-5 text-center">
            Welcome to IEEE Student branch Registration!
          </div>
          <div className=" text-center ">
            Unlock a world of personalized experiences by creating your account.
            Join our community of [describe your audience, e.g., enthusiasts,
            users, members] and take advantage of exclusive features
          </div>
          <RegisterForm />
        </div>
      </div>
    </RegisterProvider>
  );
};

export default RegisterPage;
