import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { sessionQueryOptions, signIn } from '@/lib/auth-client'
import { toast } from 'sonner'

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
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold">Sign in</h2>
        <p className="text-sm text-neutral-600">
          Use your email and password to access your dashboard.
        </p>
      </header>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
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
              <label htmlFor={field.name} className="text-sm font-medium">
                Email
              </label>
              <input
                id={field.name}
                name={field.name}
                type="email"
                className="w-full rounded-xl border p-3 outline-none ring-0 focus:border-indigo-500"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                autoComplete="email"
                required
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
          }}
        >
          {(field) => (
            <div className="space-y-1">
              <label htmlFor={field.name} className="text-sm font-medium">
                Password
              </label>
              <input
                id={field.name}
                name={field.name}
                type="password"
                className="w-full rounded-xl border p-3 outline-none ring-0 focus:border-indigo-500"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                autoComplete="current-password"
                required
              />
              {!field.state.meta.isValid && (
                <p className="text-sm text-red-600">
                  {field.state.meta.errors.join(', ')}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <div className="flex items-center justify-between">
          <a href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting, s.errors] as const}>
          {([canSubmit, isSubmitting, submitError]) => (
            <div className="space-y-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded-xl bg-indigo-600 p-3 font-medium text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </button>
              {submitError && (
                <p className="text-sm text-red-600">{String(submitError.join(', '))}</p>
              )}
            </div>
          )}
        </form.Subscribe>

        <p className="text-sm text-neutral-600">
          New here?{' '}
          <a href="/register" className="text-indigo-600 hover:underline">
            Create an account
          </a>
        </p>
      </form>
    </div>
  )
}