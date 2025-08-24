import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { signUp, sessionQueryOptions } from '@/lib/auth-client'
import { toast } from 'sonner'

export const Route = createFileRoute('/_auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  const navigate = useNavigate()
  const qc = useQueryClient()

  const form = useForm({
    defaultValues: { email: '', password: '', name: '' },
    onSubmit: async ({ value }) => {
      const { error } = await signUp.email({
        email: value.email,
        password: value.password,
        name: value.name,
      })
      if (error) toast.error(error.message)
      await qc.invalidateQueries({ queryKey: sessionQueryOptions.queryKey })
      navigate({ to: '/' })
      return
    },
  })

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold">Create account</h2>
        <p className="text-sm text-neutral-600">Start your journey in one minute.</p>
      </header>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field name="name" validators={{ onChange: ({ value }) => (!value ? 'Required' : undefined) }}>
          {(field) => (
            <div className="space-y-1">
              <label htmlFor={field.name} className="text-sm font-medium">
                Name
              </label>
              <input
                id={field.name}
                name={field.name}
                className="w-full rounded-xl border p-3 outline-none ring-0 focus:border-indigo-500"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                autoComplete="name"
                required
              />
              {!field.state.meta.isValid && (
                <p className="text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
              )}
            </div>
          )}
        </form.Field>

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
                <p className="text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
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
                autoComplete="new-password"
                required
              />
              {!field.state.meta.isValid && (
                <p className="text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
          {([canSubmit, isSubmitting]) => (
            <div className="space-y-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded-xl bg-indigo-600 p-3 font-medium text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Creating…' : 'Create account'}
              </button>
            </div>
          )}
        </form.Subscribe>

        <p className="text-sm text-neutral-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  )
}