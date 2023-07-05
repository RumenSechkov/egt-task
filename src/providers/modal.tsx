import React from 'react'
import { useSelector } from 'react-redux'
import Dispatches from '@state/slices'
import Button from '@atoms/button'

const ModalProvider = () => {
  const modal = useSelector((state) => state.ui.modal)

  return (
    modal.active && (
      <div className="modal-background">
        <div className="modal-wrapper">
          {modal.content}
          {modal.action && <Button onClick={modal.action}>confirm</Button>}
          <Button
            onClick={() => {
              Dispatches.ui.setModal({ active: false })
            }}
          >
            cancel
          </Button>
        </div>
      </div>
    )
  )
}

export default ModalProvider
