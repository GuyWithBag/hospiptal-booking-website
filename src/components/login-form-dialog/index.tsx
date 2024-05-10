'use client'

import { Card, Theme, Text, TextField, Button, Flex } from '@radix-ui/themes'
import React, { useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import { useRouter } from 'next/navigation';

type Props = {
  onOpenChange: (open: boolean) => void,
  open: boolean,
  // onSubmit: (e: any) => void
}

const LoginFormDialog = ({ open, onOpenChange }: Props) => {
  const correctUser = 'guinmapang'
  const correctPass = 'clinic123'
  const router = useRouter()


  const onSubmit = (e: any) => {
    // const router: NextRouter = useRouter()

    e.preventDefault()
    // alert('asd')
    // redirect('/patients-list')
    router.push('/patients-list')
    onOpenChange(false)
  }

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Portal>
        <Theme>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className='dialog-position'>
            <Card className='popup max-md:px-10 md:px-20 py-8'>
              <Dialog.Title>
                <Text weight={'bold'} className='text-[var(--accent-11)]'>Login here</Text>
              </Dialog.Title>
              <Form.Root onSubmit={onSubmit} method='POST'>
                <Form.Field className="FormField" name="username">
                  <Flex align={'baseline'} justify={'between'}>
                    <Form.Label className="FormLabel">Username</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing" asChild>
                      <Text>Please enter your Username</Text>
                    </Form.Message>
                    <Form.Message className="FormMessage" match={(value, formData) => value !== correctUser} asChild>
                      <Text>Incorrect Username</Text>
                    </Form.Message>
                  </Flex>
                  <Form.Control asChild>
                    <TextField.Root required />
                  </Form.Control>
                </Form.Field>

                <Form.Field className="FormField" name="password">
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className="FormLabel">Password</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing" asChild>
                      <Text>Please enter your Password</Text>
                    </Form.Message>
                    <Form.Message className="FormMessage" match={(value, formData) => value !== correctPass} asChild>
                      <Text>Incorrect Password</Text>
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <TextField.Root type='password' required />
                  </Form.Control>
                </Form.Field>

                <Flex className=' ml-auto' gap={'4'}>
                  <Form.Submit asChild>
                    <Button>Login</Button>
                  </Form.Submit>

                  <Dialog.Close asChild>
                    <Button>Close</Button>
                  </Dialog.Close>
                </Flex>

              </Form.Root>


            </Card>
          </Dialog.Content>
        </Theme>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LoginFormDialog