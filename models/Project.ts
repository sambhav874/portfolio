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
  title: { 
    type: String, 
    required: true,
    index: true
  },
  description: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  techStack: [{ 
    type: String,
    index: true
  }],
  link: { 
    type: String, 
    required: true,
    index: true
  },
}, {
  timestamps: false, // Disable timestamps if not needed
  minimize: true, // Saves space by removing empty objects
  versionKey: false // Disable version key if not needed
});

const Project = models.Project || model<IProject>('Project', projectSchema);

export default Project;