import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/_app/')({
  component: DashboardHome,
})

function DashboardHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/dashboards" });
  });
} 