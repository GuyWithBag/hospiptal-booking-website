'use client'
import { Box, Card, Flex, Text, Button, IconButton } from '@radix-ui/themes';
import PatientInformation from '../patient-information';
import { db } from '@/firebase';
import { FirebaseDocument } from '@/models/FirebaseDocuments';
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

const PatientInformationList = () => {
    const [patients, setPatients] = useState([] as Array<FirebaseDocument>);
    const [deletePatientId, setDeletePatientId] = useState<string | null>(null);

    useEffect(() => {
        const q = query(collection(db, 'patients')); // Order by 'createdAt' in ascending order
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arr: Array<FirebaseDocument> = [];

            querySnapshot.forEach(doc => {
                arr.push({
                    data: doc.data(),
                    id: doc.id
                } as FirebaseDocument);
            });
            arr.sort(
                (a, b) => {
                    return a.data.timeBooked.localeCompare(b.data.timeBooked);
                }
            )
            setPatients(arr);
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe from snapshot listener
    }, []);

    const handleOpenConfirmationDialog = (patientId: string) => {
        setDeletePatientId(patientId);
    };

    const handleCloseConfirmationDialog = () => {
        setDeletePatientId(null);
    };

    const handleDelete = async () => {
        if (deletePatientId) {
            try {
                await deleteDoc(doc(db, 'patients', deletePatientId));
                // Remove the deleted patient from the state
                setPatients(prevPatients => prevPatients.filter(patient => patient.id !== deletePatientId));
                setDeletePatientId(null); // Reset deletePatientId after successful deletion
            } catch (error) {
                console.error('Error deleting patient:', error);
            }
        }
    };

    return (
        <Card>
            <Flex direction={'column'} justify={'center'} gap={'2'}>
                <Box display={`${patients.length === 0 ? 'block' : 'none'}`}>
                    <Text weight={'bold'}>Patient List is empty. </Text>
                </Box>
                {patients.map((value: FirebaseDocument) => (
                    <Box key={value.id} position="relative">
                        <Flex gap="2" align={'center'}>
                            <PatientInformation {...value.data} />
                            <IconButton onClick={() => handleOpenConfirmationDialog(value.id)} style={{ position: 'absolute', top: 0, right: 0 }}>
                                <Cross1Icon />
                            </IconButton>
                        </Flex>
                    </Box>
                ))}
            </Flex>
            <Dialog.Root open={!!deletePatientId} onOpenChange={handleCloseConfirmationDialog}>
                <Dialog.Portal>
                    <Dialog.Title>
                        <Text>Are you sure you want to delete this patient?</Text>
                    </Dialog.Title>
                    <Dialog.Close>
                        <Button onClick={handleDelete}>Yes</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleCloseConfirmationDialog}>No</Button>
                    </Dialog.Close>
                </Dialog.Portal>
            </Dialog.Root>
        </Card>
    );
};

export default PatientInformationList;
