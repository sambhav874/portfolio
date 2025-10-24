import { Schema, model, models, Document } from 'mongoose';

// Interface for the Contact Message document
export interface IContact extends Document {
  name: string;
  email: string;
  feedback: string;
  createdAt: Date;
}

const contactMessageSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = models.ContactMessage || model<IContact>('ContactMessage', contactMessageSchema);

export default Contact;