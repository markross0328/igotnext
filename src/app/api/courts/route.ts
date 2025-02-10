// src/app/api/courts/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const { courtName, courtLocation } = await request.json();

    // Add a new document in Firestore under "courts" collection
    const docRef = await addDoc(collection(db, 'courts'), {
      name: courtName,
      location: courtLocation,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      id: docRef.id,
      message: 'Court created successfully',
    });
  } catch (error) {
    console.error('Error creating court:', error);
    return NextResponse.error();
  }
}
