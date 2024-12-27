'use client'
import Shell from '@/components/Shell'
import { usePathname } from 'next/navigation'

const Dashboard = ({
  children,
  rsvps,
  events,
}: {
  children: React.ReactNode
  rsvps: React.ReactNode
  events: React.ReactNode
}) => {
  const path = usePathname()

  return (
    <Shell>
      {path === '/dashboard' ? (
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-default-50 p-4">
            {rsvps}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="border-b border-default-50 w-full h-full lg:h-1/2 p-4">
              {events}
            </div>
            <div className="w-full h-full lg:h-1/2 p-4">{children}</div>
          </div>
        </div>
      ) : (
        <div className="p-4">{children}</div>
      )}
    </Shell>
  )
}

export default Dashboard
