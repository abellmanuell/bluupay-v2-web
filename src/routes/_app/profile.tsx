import { createFileRoute } from '@tanstack/react-router'
import { useSession } from '@/lib/auth-client'

export const Route = createFileRoute('/_app/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const { data } = useSession()
  const user = data?.user
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <pre className="overflow-auto rounded-xl border bg-white p-4 text-sm">
        {JSON.stringify(user, null, 2)}
      </pre>
    </section>
  )
}