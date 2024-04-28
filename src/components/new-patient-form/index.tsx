'use client'

import React, { useEffect, useState } from 'react'
import * as Form from '@radix-ui/react-form';
import { Button, Card, Flex, RadioGroup, TextField, Theme, Text } from '@radix-ui/themes';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase'
// Old patient: name, contact no. 
// New patient: name, age, sex, address, contact no. and complain
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import ServicesForm from '../services-form';
import DateTimeForm from '../date-time-form';

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

  const [openServicesForm, setOpenServicesForm] = useState(false)
  const [openDateTimeForm, setOpenDateTimeForm] = useState(false)
  const [chosenService, setChosenService] = useState('')
  const [chosenDate, setChosenDate] = useState('')
  const [patientForm, setPatientForm] = useState({})

  const submitForm = (e: any) => {
    const data = Object.fromEntries(new FormData(e.currentTarget))

    e.preventDefault()
    // alert('asdas')
    setOpenServicesForm(true)

    setPatientForm(data)

  }

  const onValueChange = (value: string) => {
    setChosenService(value)
    setOpenServicesForm(false)
    setOpenDateTimeForm(true)
  }

  const onChosenDate = async (e: any) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    let mergedData = {
      service: chosenService,
      ...data,
      ...patientForm
    }

    console.log(mergedData)

    await addDoc(
      collection(db, 'patients'),
      mergedData
    )
    // setChosenDate()
  }

  return (
    <>
      {/* <AlertDialog.Root open={openDialog} onOpenChange={setOpenServicesForm}>
        <AlertDialog.Portal>
          <Theme>
            <AlertDialog.Overlay className='AlertDialogOverlay' />
            <AlertDialog.Content className='dialog-position'>
              <Card>
                <Flex direction={'column'} gap={'5'}>
                  <AlertDialog.Description asChild>
                    <Text>Form succesfully submitted. </Text>
                  </AlertDialog.Description>
                  <AlertDialog.Cancel asChild className=' ml-auto'>
                    <Button>Close</Button>
                  </AlertDialog.Cancel>
                </Flex>
              </Card>
            </AlertDialog.Content>
          </Theme>
        </AlertDialog.Portal>
      </AlertDialog.Root> */}
      <DateTimeForm onOpenChange={setOpenDateTimeForm} open={openDateTimeForm} onSubmit={onChosenDate} />
      <ServicesForm onOpenChange={setOpenServicesForm} open={openServicesForm} onValueChange={onValueChange} />

      <Card className='w-72 absolute'>
        <Form.Root onSubmit={submitForm}>
          <Form.Field className="FormField" name="name">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Name</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing" asChild>
                <Text>Please enter your Name</Text>
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch" asChild>
                <Text>Please provide a valid Name</Text>
              </Form.Message>
            </div>
            <Form.Control asChild>
              <TextField.Root required />
            </Form.Control>
          </Form.Field>

          <Form.Field className={` FormField`} name="age">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Age</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing" asChild>
                <Text>Please enter your Age</Text>
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch" asChild>
                <Text>Please provide a valid Age</Text>
              </Form.Message>
            </div>
            <Form.Control asChild>
              <TextField.Root type='number' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className={`FormField`} name="sex">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Sex</Form.Label>
            </div>
            <Form.Control asChild>
              <RadioGroup.Root size="1" defaultValue="1" name='sex'>
                <Flex direction={'row'} gap={'4'}>
                  <RadioGroup.Item value="1" ><Text>Male</Text></RadioGroup.Item>
                  <RadioGroup.Item value="2" ><Text>Female</Text></RadioGroup.Item>
                </Flex>
              </RadioGroup.Root>
            </Form.Control>
          </Form.Field>

          <Form.Field className={`FormField`} name="address">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="FormLabel">Address</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                <Text>Please enter your address</Text>
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                <Text>Please provide a valid address</Text>
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
                <Text>Please enter your contact no.</Text>
              </Form.Message>
              <Form.Message className="FormMessage" match={
                (value, formData): boolean => {
                  const regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
                  return value.match(regex) ? false : true
                }
              }>
                <Text>Please provide a valid contact no.</Text>
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