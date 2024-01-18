import EmailVerification from "@/app/register/EmailVerification";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();
    const resend = new Resend("re_7yuYjHXa_DoVRfj4tNpcjnhYGHe9kK4bT");
    console.log(code);
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: `${email}`,
      subject: "Registraion of IEEE student branch",
      react: EmailVerification({ code }),
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
