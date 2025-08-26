import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { sessionQueryOptions, signIn } from '@/lib/auth-client'
import { toast } from 'sonner'
import Logo from "@/assets/appLogo.svg?react";
import { Button, Card, Checkbox, Input } from '@/components/ui'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/20/solid'


export const Route = createFileRoute('/_auth/login')({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === 'string' ? search.redirect : undefined,
  }),
  component: LoginPage,
})

function LoginPage() {
  const navigate = useNavigate({ from: Route.fullPath })
  const qc = useQueryClient()

  const form = useForm({
    defaultValues: { email: '', password: '' },
    onSubmit: async ({ value }) => {
      const { error } = await signIn.email({
        email: value.email,
        password: value.password,
      })

      if (error) toast.error(error.message)
      await qc.invalidateQueries({ queryKey: sessionQueryOptions.queryKey })

      navigate({ to: "/" });
      return
    },
  })

  return (
    <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
      <div className="w-full max-w-[26rem] p-4 sm:px-5">
        <div className="text-center">
          <Logo className="mx-auto size-16" />
          <div className="mt-4">
            <h2 className="dark:text-dark-100 text-2xl font-semibold text-gray-600">
              Welcome Back
            </h2>
            <p className="dark:text-dark-300 text-gray-400">
              Please sign in to continue
            </p>
          </div>
        </div>
        <Card className="mt-5 rounded-lg p-5 lg:p-7">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <div className="space-y-4">
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) =>
                    !value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
                      ? 'Enter a valid email'
                      : undefined,
                }}
              >
                {(field) => (
                  <div className="space-y-1">
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      label="Email"
                      placeholder="Email address"
                      className="w-full rounded-xl border p-3 outline-none ring-0 focus:border-indigo-500"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      autoComplete="email"
                      prefix={
                        <EnvelopeIcon
                          className="size-5 transition-colors duration-200"
                          strokeWidth="1"
                        />
                      }
                    />
                    {!field.state.meta.isValid && (
                      <p className="text-sm text-red-600">
                        {field.state.meta.errors.join(', ')}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) =>
                    !value || value.length < 8
                      ? 'Password must be at least 8 characters'
                      : undefined,
                }}>
                {(field) => (
                  <div className="space-y-1">
                    <Input
                      id={field.name}
                      name={field.name}
                      type="password"
                      label="Password"
                      placeholder="Enter Password"
                      className="w-full rounded-xl border p-3 outline-none ring-0 focus:border-indigo-500"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      autoComplete="current-password"
                      prefix={
                        <LockClosedIcon
                          className="size-5 transition-colors duration-200"
                          strokeWidth="1"
                        />
                      }
                    />

                    {!field.state.meta.isValid && (
                      <p className="text-sm text-red-600">
                        {field.state.meta.errors.join(', ')}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <div className="flex items-center justify-between space-x-2">
                <Checkbox label="Remember me" />
                <a
                  href="/forgot-password"
                  className="dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100 text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting, s.errors] as const}>
              {([canSubmit, isSubmitting, submitError]) => (
                <div className="space-y-2">
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-5 w-full"
                    color="primary"
                  >
                    {isSubmitting ? 'Signing in…' : 'Sign in'}
                  </Button>
                  {submitError && (
                    <p className="text-sm text-red-600">{String(submitError.join(', '))}</p>
                  )}
                </div>
              )}
            </form.Subscribe>
          </form>
          <div className="text-xs-plus mt-4 text-center">
            <p className="line-clamp-1">
              <span>Dont have Account?</span>{" "}
              <Link
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600 transition-colors"
                to="/register"
              >
                Create account
              </Link>
            </p>
          </div>
          <div className="my-7 flex items-center space-x-3 text-xs">
            <div className="dark:bg-dark-500 h-px flex-1 bg-gray-200"></div>
            <p>OR</p>
            <div className="dark:bg-dark-500 h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="flex gap-4">
            <Button className="h-10 flex-1 gap-3" variant="outlined">
              <img
                className="size-5.5"
                src="/images/logos/google.svg"
                alt="logo"
              />
              <span>Google</span>
            </Button>
            <Button className="h-10 flex-1 gap-3" variant="outlined">
              <img
                className="size-5.5"
                src="/images/logos/github.svg"
                alt="logo"
              />
              <span>Github</span>
            </Button>
          </div>
        </Card>
        <div className="dark:text-dark-300 mt-8 flex justify-center text-xs text-gray-400">
          <a href="##">Privacy Notice</a>
          <div className="dark:bg-dark-500 mx-2.5 my-0.5 w-px bg-gray-200"></div>
          <a href="##">Term of service</a>
        </div>
      </div>
    </main>
  );
}