'use client'

import React, { useEffect, useState } from 'react'
import * as Form from '@radix-ui/react-form';
import { Button, Card, Flex, RadioGroup, TextField, Theme } from '@radix-ui/themes';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase'
// Old patient: name, contact no. 
// New patient: name, age, sex, address, contact no. and complain
import * as AlertDialog from '@radix-ui/react-alert-dialog';

{/* <AlertDialog.Root>
<AlertDialog.Trigger />
<AlertDialog.Portal>
  <AlertDialog.Overlay />
  <AlertDialog.Content>
    <AlertDialog.Title />
    <AlertDialog.Description />
    <AlertDialog.Cancel />
    <AlertDialog.Action />
  </AlertDialog.Content>
</AlertDialog.Portal>
</AlertDialog.Root> */}


const NewPatientForm = () => {

  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    setOpenDialog(true)


  }, [])


  const submitForm = async (e: any) => {
    const data = Object.fromEntries(new FormData(e.currentTarget))

    setOpenDialog(true)
    e.preventDefault()
    // alert('asdas')
    await addDoc(
      collection(db, 'items'),
      data
    )
  }

  return (
    <>
      <AlertDialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialog.Portal>
          <Theme>
            <AlertDialog.Overlay className='AlertDialogOverlay' />
            <AlertDialog.Content className='fixed top-0 right-0'>
              <Card>
                {/* <AlertDialog.Title /> */}
                <AlertDialog.Description>
                  TESTETSTATSDAASSSS
                </AlertDialog.Description>
                {/* <AlertDialog.Cancel /> */}
                {/* <AlertDialog.Action /> */}
              </Card>
            </AlertDialog.Content>
          </Theme>
        </AlertDialog.Portal>
      </AlertDialog.Root>
      <Card>
        <Form.Root onSubmit={submitForm}>
          <Form.Field className="FormField" name="name">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Name</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your Name
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid Name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <TextField.Root required />
            </Form.Control>
          </Form.Field>

          <Form.Field className={` FormField`} name="age">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Age</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your Age
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid Age
              </Form.Message>
            </div>
            <Form.Control asChild>
              <TextField.Root type='number' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className={`FormField`} name="sex">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Sex</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your sex
              </Form.Message>
            </div>
            <Form.Control asChild>
              <RadioGroup.Root size="1" defaultValue="1" name='sex'>
                <Flex direction={'row'} gap={'4'}>
                  <RadioGroup.Item value="1" >Male</RadioGroup.Item>
                  <RadioGroup.Item value="2" >Female</RadioGroup.Item>
                </Flex>
              </RadioGroup.Root>
            </Form.Control>
          </Form.Field>

          <Form.Field className={`FormField`} name="address">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Address</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your address
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid address
              </Form.Message>
            </div>
            <Form.Control asChild>
              <TextField.Root type='text' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className={`FormField`} name="contact-no.">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Contact No.</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your contact no.
              </Form.Message>
              <Form.Message className="FormMessage" match={
                (value, formData): boolean => {
                  const regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
                  return value.match(regex) ? false : true
                }
              }>
                Please provide a valid contact no.
              </Form.Message>
            </div>
            <Form.Control asChild>
              <TextField.Root type='number' required />
            </Form.Control>
          </Form.Field>

          {/* <Form.Field className="FormField" name="complaints">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Complaints</Form.Label>
            </div>
            <Form.Control asChild>
              <TextArea placeholder='Type a complaint.' />
            </Form.Control>
          </Form.Field> */}
          <Form.Submit asChild>
            <Button>
              Submit
            </Button>
          </Form.Submit>

        </Form.Root>
      </Card>
    </>
  )
}

export default NewPatientForm