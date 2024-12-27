'use client'
import { createNewEvent } from '@/actions/events'
// import { createNewEvent } from '@/actions/events'
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react'
import { CirclePlus, Menu } from 'lucide-react'
import { useTransition } from 'react'

const Nav = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isPending, startTransition] = useTransition()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const handleClick = (e: any, onClose: any) => {
    startTransition(() => {
      e.preventDefault()
      console.log('Create new event called')
      const formData = new FormData()
      formData.append('name', e.target.name.value)
      formData.append('description', e.target.description.value)

      createNewEvent({ formData })
      onClose()
    })
  }

  return (
    <>
      <nav className="h-[65px] border-b border-default-50 flex items-center px-4 gap-4">
        <button
          className="lg:hidden p-2"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} />
        </button>

        {/* <div>
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
        </div> */}
        <Button color="primary" onPress={onOpen}>
          <Tooltip content="New Event" placement="bottom">
            <CirclePlus size={16} />
          </Tooltip>
        </Button>
        <Modal
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add Event
                </ModalHeader>
                <form
                  onSubmit={(e) => {
                    handleClick(e, onClose)
                  }}
                  className="flex flex-col gap-4 p-4"
                >
                  <Input
                    name="name"
                    label="name"
                    placeholder="Enter the event name"
                    variant="bordered"
                  />
                  <Input
                    name="description"
                    label="description"
                    placeholder="Enter the event description"
                    type="textarea"
                    variant="bordered"
                  />

                  <Button
                    disabled={isPending}
                    color="danger"
                    variant="flat"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button isLoading={isPending} type="submit" color="primary">
                    add event
                  </Button>
                </form>
              </>
            )}
          </ModalContent>
        </Modal>

        <div className="flex-1">
          <Input size="sm" variant="faded" placeholder="Search" />
        </div>
      </nav>
    </>
  )
}

export default Nav
