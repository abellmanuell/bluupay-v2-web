import { emailOtp, resetPassword } from '@/lib/auth-client'
import { useForm } from '@tanstack/react-form'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_auth/forgot')({
  component: RouteComponent,
})

function RouteComponent() {
  const [sent, setSent] = React.useState(false)
  const navigate = useNavigate()

  const requestForm = useForm({
    defaultValues: { email: '' },
    onSubmit: async ({ value }) => {
      const { error } = await emailOtp({
        email: value.email,
      })
      if (error) toast.error(error.message)
      setSent(true)
      return
    },
  })

  const resetForm = useForm({
    defaultValues: { email: '', otp: '', password: '' },
    onSubmit: async ({ value }) => {
      const { error } = await resetPassword({
        email: value.email,
        otp: value.otp,
        password: value.password,
      })
      if (error) toast.error(error.message)
      navigate({ to: '/login' })
      return
    },
  })

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold">Reset your password</h2>
        <p className="text-sm text-neutral-600">
          Enter your email to receive a one-time code. Then use it to set a new password.
        </p>
      </header>

      {!sent ? (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            requestForm.handleSubmit()
          }}
        >
          <requestForm.Field
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
          </requestForm.Field>

          <requestForm.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
            {([canSubmit, isSubmitting]) => (
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-xl bg-indigo-600 p-3 font-medium text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send OTP'}
                </button>
              </div>
            )}
          </requestForm.Subscribe>
        </form>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            resetForm.handleSubmit()
          }}
        >
          <resetForm.Field name="email" validators={{ onChange: ({ value }) => (!value ? 'Required' : undefined) }}>
            {(field) => (
              <div className="space-y-1">
                <label htmlFor={field.name} className="text-sm font-medium">
                  Email
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="email"
                  className="w-full rounded-xl border p-3"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
              </div>
            )}
          </resetForm.Field>

          <resetForm.Field name="otp" validators={{ onChange: ({ value }) => (!value ? 'Required' : undefined) }}>
            {(field) => (
              <div className="space-y-1">
                <label htmlFor={field.name} className="text-sm font-medium">
                  OTP Code
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  className="w-full rounded-xl border p-3"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  required
                />
              </div>
            )}
          </resetForm.Field>

          <resetForm.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                !value || value.length < 8 ? 'Min 8 characters' : undefined,
            }}
          >
            {(field) => (
              <div className="space-y-1">
                <label htmlFor={field.name} className="text-sm font-medium">
                  New Password
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="password"
                  className="w-full rounded-xl border p-3"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  autoComplete="new-password"
                  required
                />
                {!field.state.meta.isValid && (
                  <p className="text-sm text-red-600">
                    {field.state.meta.errors.join(', ')}
                  </p>
                )}
              </div>
            )}
          </resetForm.Field>

          <resetForm.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
            {([canSubmit, isSubmitting]) => (
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-xl bg-indigo-600 p-3 font-medium text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Resetting…' : 'Reset password'}
                </button>
              </div>
            )}
          </resetForm.Subscribe>

          <p className="text-sm text-neutral-600">
            Done? <a className="text-indigo-600 hover:underline" href="/login">Back to sign in</a>
          </p>
        </form>
      )}
    </div>
  )
}
