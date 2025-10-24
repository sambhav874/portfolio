import { Schema, model, models, Document } from 'mongoose';

// Interface for the Project document
export interface IProject extends Document {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string;
}

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  techStack: [{ type: String }],
  link: { type: String, required: true },
});

const Project = models.Project || model<IProject>('Project', projectSchema);

export default Project;