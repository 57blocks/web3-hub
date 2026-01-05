/**
 * Type of animal that the Vet can treat.
 */
export enum AnimalType {
  DOG = 'Dog',
  Cat = 'Cat',
};

/**
 * A medical record for a Pet in the 57B Vet.
 */
export type MedicalRecord = {
  /** The ID of the medical record */
  id: string;
  /** The name of the patient */
  name: string;
  /** The age of the patient */
  age: number;

  /** The name of the pet's caretaker */
  caretakerName: string;
  /** The phone number of the pet's caretaker */
  caretakerPhone: string;
};
