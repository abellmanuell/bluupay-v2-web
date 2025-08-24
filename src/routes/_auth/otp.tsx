import { signIn, sessionQueryOptions, emailOtp, checkVerificationOtp, verifyEmail } from '@/lib/auth-client'
import { useForm } from '@tanstack/react-form'
import { useQueryClient } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'

export const Route = createFileRoute('/_auth/otp')({
  component: OTPPage,
})

function OTPPage() {
  const navigate = useNavigate({ from: Route.fullPath })
    const qc = useQueryClient()
  
    const form = useForm({
      defaultValues: { otp: '', email: '' },
      onSubmit: async ({ value }) => {
        const { error } = await verifyEmail({
          otp: value.otp,
          email: value.email
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
          <form.Field name="otp" validators={{ onChange: ({ value }) => (!value ? 'Required' : undefined) }}>
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
          </form.Field>
  
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
        </form>
      </div>
    )
}
