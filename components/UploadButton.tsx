'use client'
import React from 'react'
import { Dialog, DialogContent } from './ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from './ui/button';

function Uploadbutton() {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={(v) => {
        if(!v) {
            setIsOpen(v) 
        }
    }}>
        <DialogTrigger onClick={()=> setIsOpen(true)} asChild>
            <Button>Upload PDF</Button>
        </DialogTrigger>
        <DialogContent>Example</DialogContent>
    </Dialog>
  )
}

export default Uploadbutton