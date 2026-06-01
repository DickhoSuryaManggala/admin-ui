import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

function FormSignIn() {
    return (
      <>
        {/* Form start */}
        <div className="mb-16 rounded-3xl px-8 py-8">
          <div className="mb-4 text-center">
            <h1 className="text-xl font-bold text-slate-900">Create an account</h1>
          </div>

          <form action="">
            <div className="mb-6">
              <LabeledInput
                label="Name"
                type="text"
                name="name"
                id="name"
                placeholder="Tanzir Rahman"
              />
            </div>
            <div className="mb-6">
              <LabeledInput
                label="Email address"
                type="email"
                name="email"
                id="email"
                placeholder="hello@example.com"
              />
            </div>
            <div className="mb-6">
              <LabeledInput
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="************"
              />
            </div>
            <p className="mb-6 text-xs text-slate-500">
              By continuing, you agree to our{' '}
              <a href="#" className="font-semibold text-primary hover:underline">
                terms of service
              </a>
              .
            </p>
            <Button>Sign up</Button>

            <div className="relative my-9 flex items-center justify-center text-xs text-slate-500">
              <div className="absolute inset-x-0 h-px bg-slate-200"></div>
              <span className="relative bg-transparent px-3">or sign up with</span>
            </div>

            <div className="mb-8">
              <Button type="button" variant="secondary">
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M21.35 11.1H12v2.8h5.15c-.2 1.2-.85 2.2-1.8 2.9v2.4h2.95c1.75-1.6 2.75-4 2.75-7.1 0-.6-.05-1.15-.15-1.7z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 22c2.45 0 4.5-.8 6-2.15l-2.95-2.4c-.8.55-1.85.85-3.05.85-2.35 0-4.35-1.6-5.05-3.8H3.9v2.4C5.35 19.9 8.4 22 12 22z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.95 14.5a5.94 5.94 0 010-3.8V8.3H3.9a9.98 9.98 0 000 7.4l3.05-1.2z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 7.1c1.35 0 2.55.45 3.5 1.3l2.6-2.6C16.45 4.25 14.45 3.4 12 3.4 8.4 3.4 5.35 5.5 3.9 8.3l3.05 2.4C7.65 8.7 9.65 7.1 12 7.1z"
                      fill="#EB4335"
                    />
                  </svg>
                  Continue with Google
                </span>
              </Button>
            </div>

            <div className="flex justify-center text-sm text-slate-500">
              Already have an account?{' '}
              <a href="#" className="font-semibold text-primary hover:underline">
                Sign in here
              </a>
            </div>
          </form>
        </div>
      </>
    );
}

export default FormSignIn;
