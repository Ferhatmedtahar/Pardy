'use client'
import { createNewEvent } from '@/actions/events'
import { Button, Input, Tooltip } from '@nextui-org/react'
import { CirclePlus, Menu } from 'lucide-react'
import { useTransition } from 'react'

const Nav = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(() => {
      createNewEvent()
    })
  }

  return (
    <nav className="h-[65px] border-b border-default-50 flex items-center px-4 gap-4">
      <button
        className="lg:hidden p-2"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <Menu size={24} />
      </button>

      <div>
        <Tooltip content="New Event">
          <Button
            isIconOnly
            variant="ghost"
            size="sm"
            isLoading={isPending}
            onClick={handleClick}
          >
            <CirclePlus size={16} />
          </Button>
        </Tooltip>
      </div>

      <div className="flex-1">
        <Input size="sm" variant="faded" placeholder="Search" />
      </div>
    </nav>
  )
}

export default Nav
